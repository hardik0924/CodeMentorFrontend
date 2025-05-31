import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Code as CodeIcon } from 'lucide-react';

const CodeExample = () => {
  const [activeTab, setActiveTab] = useState('bad');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    if (activeTab === 'bad') {
      setIsAnalyzing(true);
      setShowAnalysis(false);
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        setShowAnalysis(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsAnalyzing(false);
      setShowAnalysis(false);
    }
  }, [activeTab]);

  const badCode = `
i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1
  `.trim();

  const goodCode = `
for i in range(1, 6):
    print(i)
    if i == 3:
        break
  `.trim();

  return (
    <section id="examples" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">AI-Code Mentoring</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            See how our AI provides intelligent code mentoring by analyzing your code and offering personalized guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#161b22] rounded-lg border border-gray-800 overflow-hidden">
          <div className="flex border-b border-gray-800">
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                activeTab === 'bad' ? 'bg-[#161b22] text-white' : 'bg-[#0d1117] text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('bad')}
            >
              Code Sample
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                activeTab === 'good' ? 'bg-[#161b22] text-white' : 'bg-[#0d1117] text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('good')}
            >
              Improved Version
            </button>
          </div>

          <div className="p-6">
            <div className="bg-[#0d1117] rounded-md p-4 font-mono text-sm relative overflow-hidden">
              <pre className="text-gray-300">
                <code>
                  {activeTab === 'bad' ? badCode : goodCode}
                </code>
              </pre>

              {isAnalyzing && (
                <div className="absolute inset-0 bg-[#0d1117]/80 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-blue-500 font-medium">Analyzing code...</p>
                  </div>
                </div>
              )}
            </div>

            {activeTab === 'bad' && showAnalysis && (
              <div className="mt-6 space-y-6 animate-fadeIn">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <AlertTriangle size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Issues Identified:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <XCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-red-500 font-medium">Infinite Loop Potential:</p>
                          <p className="text-gray-400">While this specific code will terminate, it's structured in a way that could easily lead to infinite loops if the increment (i += 1) is misplaced or conditional.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <XCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-red-500 font-medium">Readability:</p>
                          <p className="text-gray-400">The break statement, while functional, can sometimes make code harder to follow. It's like a sudden plot twist in a story - it works, but you need to pay close attention.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <XCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-red-500 font-medium">Lack of Clarity:</p>
                          <p className="text-gray-400">The code doesn't clearly communicate its intent. What are we trying to achieve? Print numbers until we hit 3?</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <CheckCircle size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Recommended Fix:</h3>
                    <p className="text-gray-400 mb-3">Use a for loop with range to clearly express intent:</p>
                    <div className="bg-[#0d1117] rounded-md p-4 font-mono text-sm">
                      <pre className="text-green-400">
                        <code>
                          {goodCode}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <CodeIcon size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Why It's Better:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-400">
                          <span className="text-white font-medium">Clarity and Intent:</span> The for loop version clearly expresses the intent to iterate from 1 to 5.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-400">
                          <span className="text-white font-medium">Reduced Risk of Infinite Loops:</span> for loops inherently handle the iteration variable, reducing the chances of forgetting to increment it.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-400">
                          <span className="text-white font-medium">Readability:</span> The for loop is often more readable when you have a known range or sequence to iterate over.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;