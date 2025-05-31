import { ArrowRight, XCircle, AlertTriangle, CheckCircle, Copy, Check } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { analyzeCode } from '../utils/gemini';
import { marked } from "marked";

const CodeReview = () => {
  console.log("CodeReview component rendering");
  const [code, setCode] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // For handling code copying
  const handleCopyCode = (textToCopy) => {
    console.log("Copy button clicked", textToCopy.substring(0, 20) + "...");
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Copy successful");
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert("Unable to copy to clipboard: " + err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);
    try {
      const result = await analyzeCode(code);
      setAnalysis(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1B4B] pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Your AI-Code Reviewer</h1>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">SMART</span>
            <span className="text-blue-500">.FAST</span>
            <span className="text-white">.RELIABLE</span>
          </h2>
          
          <p className="text-gray-400 mb-6">
            This AI-powered code reviewer helps you review your code for
            syntax errors, logical errors, and security vulnerabilities.
          </p>

          <form onSubmit={handleSubmit} className="mb-6">
            {/* Added title for the code input area */}
            <label className="block text-white text-lg font-medium mb-2">Write or paste your code:</label>
            <div className="bg-[#1A2233] rounded-lg p-4 mb-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-transparent text-gray-300 font-mono text-sm focus:outline-none resize-none"
                placeholder="Paste your code here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isAnalyzing || !code.trim()}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  Generate Review <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {analysis && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-white mb-4">AI-Code Review</h3>
              
              <div className="space-y-4">
               <div className="bg-[#1a2233] rounded-lg p-5 border border-gray-700">
                  <h4 className="text-lg font-medium text-white mb-3">Issues Identified:</h4>
                  <div className="space-y-3">
                    {analysis?.issues && Array.isArray(analysis.issues) && analysis.issues.length > 0 ? (
                      analysis.issues.map((issue, index) => (
                        <div key={index}>
                          <h5>{issue.title}</h5>
                          <p>{issue.description}</p>
                        </div>
                      ))
                    ) : (
                      analysis?.review && (
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">AI Review:</h4>
                          <div
                            className="text-gray-400 whitespace-pre-line prose prose-invert"
                            style={{ whiteSpace: "pre-wrap" }}
                            dangerouslySetInnerHTML={{ __html: formatMarkdown(analysis.review) }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Only render recommendation if it exists */}
                {analysis?.recommendation && (
                  <div className="bg-[#1a2233] rounded-lg p-5 border border-gray-700">
                    <div className="flex items-center mb-3">
                      <CheckCircle size={20} className="text-green-500 mr-2" />
                      <h4 className="text-lg font-medium text-white">{analysis.recommendation.title}</h4>
                    </div>
                    
                    <div>
                      <pre className="bg-[#0d1117] rounded-md p-4 mb-2 overflow-x-auto border border-gray-800">
                        <code className="text-green-400">{analysis.recommendation.code}</code>
                      </pre>
                      
                      {/* Standalone copy button - NOT positioned absolutely */}
                      <div className="flex justify-end mb-4">
                        <button 
                          onClick={() => handleCopyCode(analysis.recommendation.code)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transform transition hover:scale-105"
                        >
                          {copySuccess ? (
                            <>
                              <Check size={20} className="text-white" />
                              <span className="font-medium">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={20} className="text-white" />
                              <span className="font-medium">Copy Improved Code</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <p className="text-gray-400">{analysis.recommendation.explanation}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* New Improved Code section */}
              {analysis.recommendation && (
                <div className="bg-[#1a2233] rounded-lg p-5 border border-gray-700 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-medium text-white">Improved Code</h4>
                    <button 
                      onClick={() => handleCopyCode(analysis.recommendation.code)}
                      className="copy-button"
                    >
                      {copySuccess ? (
                        <>
                          <Check size={24} className="text-white" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={24} className="text-white" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-[#0d1117] rounded-md p-4 overflow-x-auto border border-gray-800">
                      <code className="text-green-400">{analysis.recommendation.code}</code>
                    
                      <div className="absolute top-2 right-2">
                        <button 
                          onClick={() => handleCopyCode(analysis.recommendation.code)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md font-bold border-2 border-white"
                        >
                          <Copy size={24} />
                          <span>COPY</span>
                        </button>
                      </div>
                    </pre>
                  </div>

                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000
                  }}>
                    <button 
                      onClick={() => handleCopyCode(analysis.recommendation.code)}
                      style={{
                        backgroundColor: '#FF3E00',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        border: '3px solid white',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                      }}
                    >
                      <Copy size={24} style={{color: 'white'}} />
                      <span style={{fontSize: '16px'}}>COPY</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* New TEST BUTTON section */}
          <div className="mt-4 mb-4">
            <button 
              onClick={() => alert('Test button clicked!')}
              className="bg-red-500 p-3 text-white"
            >
              TEST BUTTON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function formatMarkdown(md) {
  return marked.parse(md || "");
}

export default CodeReview;