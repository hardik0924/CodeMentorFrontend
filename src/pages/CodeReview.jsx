import { ArrowRight, XCircle, AlertTriangle, CheckCircle, Copy, Check } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { analyzeCode } from '../utils/gemini';
import { marked } from 'marked';
const isCodeLike = (input) => {
  const codePatterns = /(if|for|while|def|class|public|static|void|int|String|return|console\.log|System\.out\.println|\{|\}|\(|\)|=|;)/;
  return codePatterns.test(input);
};

const CodeReview = () => {
  const [code, setCode] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
const [reviewCount, setReviewCount] = useState(0);
const maxReviews = 5;
useEffect(() => {
  const today = new Date().toLocaleDateString();
  const storedDate = localStorage.getItem("lastReviewDate");
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;

  if (storedDate !== today) {
    count = 0;
    localStorage.setItem("lastReviewDate", today);
    localStorage.setItem("reviewCount", count);
  }

  setReviewCount(count);
}, []);

  const handleCopyCode = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        alert('Unable to copy to clipboard: ' + err);
      });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setAnalysis(null);

  if (!code.trim()) {
    setError("Please enter some code to review.");
    return;
  }

  if (!isCodeLike(code)) {
    setError("This doesn’t look like code. Please enter valid code to review.");
    return;
  }

  const today = new Date().toLocaleDateString();
  const storedDate = localStorage.getItem("lastReviewDate");
  let currentReviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

  // If new day — reset count
  if (storedDate !== today) {
    currentReviewCount = 0;
    localStorage.setItem("lastReviewDate", today);
    localStorage.setItem("reviewCount", currentReviewCount);
  }

  // Check limit
  if (currentReviewCount >= maxReviews) {
    setError("⚠️ You’ve reached your daily 3-review limit. Please come back tomorrow for more code reviews!");
    return;
  }

  setIsAnalyzing(true);

  try {
    const result = await analyzeCode(code);
    setAnalysis(result);

    // Increment review count only after successful review
    currentReviewCount++;
    localStorage.setItem("reviewCount", currentReviewCount);
    setReviewCount(currentReviewCount);

  } catch (err) {
    setError("🚨 Server is busy or something went wrong. Try again in a while.");
  } finally {
    setIsAnalyzing(false);
  }
};




  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-16 font-mono text-[#F8F8F2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#FF00E5] mb-3 drop-shadow-[0_0_10px_#FF00E5]">AI-Powered CodeMentor</h1>
          <h2 className="text-2xl font-bold mb-6 text-[#FF44CC]">SPOT BUGS<span className="text-[#FF00E5]">.FIX FAST</span>.LEVEL UP</h2>

          <p className="text-[#B8B8FF] mb-8 text-lg leading-relaxed tracking-wide">
           Instantly review your code for syntax errors, logical flaws, and potential risks with AI-powered insights.
          </p>

          <form onSubmit={handleSubmit} className="mb-8 space-y-4">
            <label className="block text-[#FF00E5] text-lg font-medium">Enter your code:</label>
            <div className="bg-[#0D0D0D] rounded-lg p-4 border border-[#FF00E5] shadow-[0_0_20px_#FF00E5]">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-transparent text-[#F8F8F2] font-mono text-sm focus:outline-none resize-none placeholder-[#888]"
                placeholder="Paste your code here..."
              />
              
            </div>

            <button
              type="submit"
              disabled={isAnalyzing || !code.trim()}
              className="bg-[#FF00E5] hover:bg-[#FF44CC] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center transition duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  Review Code <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>
            <p className="text-[#FF44CC] mb-4">
  📝 {3 - reviewCount} free reviews remaining for today.
</p>

          </form>

          {error && (
            <div className="bg-red-800/20 border border-red-500 rounded-lg p-4 mb-6 text-red-400">
              {error}
            </div>
          )}

          {analysis && (
            <div className="animate-fadeIn space-y-8">
              <h3 className="text-3xl font-bold text-[#FF00E5] drop-shadow-[0_0_8px_#FF00E5]">AI Code Review Result</h3>

              {/* Issues Found */}
              {analysis?.issues && analysis.issues.length > 0 && (
                <div className="bg-[#0D0D0D] border border-[#FF44CC] rounded-lg p-6 space-y-5 shadow-[0_0_15px_#FF44CC]">
                  <h4 className="text-xl font-semibold text-[#FF44CC] drop-shadow-[0_0_5px_#FF00E5]">Issues Found:</h4>
                  {analysis.issues.map((issue, index) => (
                    <div key={index} className="space-y-1">
                      <h5 className="text-[#F8F8F2] text-lg font-semibold">{issue.title}</h5>
                      <p className="text-[#D0CFFF] text-base leading-relaxed tracking-wide">{issue.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* AI Review Summary */}
              {analysis?.review && (
                <div className="bg-[#0D0D0D] border border-[#FF00E5] rounded-lg p-6 shadow-[0_0_15px_#FF00E5]">
                  <h4 className="text-xl font-semibold text-[#F8F8F2] drop-shadow-[0_0_5px_#FF00E5] mb-4">AI Review Summary:</h4>
                  <div
                    className="text-[#D0CFFF] prose prose-invert prose-base leading-relaxed tracking-wide"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(analysis.review) }}
                  />
                </div>
              )}

              {/* 5️⃣ Improved Code Example */}
              {analysis?.recommendation && (
  <div className="bg-[#1F103F] border border-[#FF00E5] rounded-lg p-6 shadow-[0_0_15px_#FF00E5]">
    <div className="flex items-center mb-4">
      <CheckCircle size={24} className="text-green-500 mr-2" />
      <h4 className="text-xl font-semibold text-[#F8F8F2] drop-shadow-[0_0_5px_#FF00E5]">5️⃣ Improved Code Example:</h4>
    </div>
    <pre className="bg-[#0D0221] rounded-md p-5 mb-4 text-green-300 border border-[#FF00E5] overflow-x-auto text-base leading-relaxed">
      <code>{analysis.recommendation.code}</code>
    </pre>
    <div className="flex justify-end">
      <button
        onClick={() => handleCopyCode(analysis.recommendation.code)}
        className="bg-[#FF00E5] hover:bg-[#FF44CC] text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition transform hover:scale-105"
      >
        {copySuccess ? <><Check size={20} /> Copied!</> : <><Copy size={20} /> Copy Code</>}
      </button>
    </div>
    <p className="text-[#D0CFFF] mt-3 text-base leading-relaxed tracking-wide">{analysis.recommendation.explanation}</p>
  </div>
)}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function formatMarkdown(md) {
  return marked.parse(md || '');
}

export default CodeReview;
