import React, { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle, XCircle, Code as CodeIcon } from "lucide-react";

const CodeExample = () => {
  const [activeTab, setActiveTab] = useState("bad");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    if (activeTab === "bad") {
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
    <section id="examples" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_#ec4899]">
            AI Code Mentoring
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how our AI reviews code and offers actionable improvements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0D0D0D] backdrop-blur rounded-2xl border border-pink-600/30 shadow-[0_0_20px_#ec489933] overflow-hidden">
          <div className="flex border-b border-gray-800">
            {["bad", "good"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-gray-800 text-pink-400 border-b-2 border-pink-500"
                    : "bg-gray-950 text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "bad" ? "Code Sample" : "Improved Version"}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="bg-gray-950/70 rounded-lg p-4 font-mono text-sm relative overflow-hidden border border-gray-800 shadow-inner shadow-pink-500/10">
              <pre className="text-gray-300 whitespace-pre-wrap">
                <code>{activeTab === "bad" ? badCode : goodCode}</code>
              </pre>

              {isAnalyzing && (
                <div className="absolute inset-0 bg-gray-950/95 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div class="w-8 h-8 border-2 border-[#e82ef9] border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p class="text-[#e82ef9] font-medium">Analyzing code...</p>
                  </div>
                </div>
              )}
            </div>

            {activeTab === "bad" && showAnalysis && (
              <div className="mt-8 space-y-8 animate-fadeIn">
                <div className="flex items-start">
                  <AlertTriangle size={24} className="text-yellow-400 mr-3 mt-1 drop-shadow-[0_0_8px_#facc15]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Issues Found:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <XCircle size={18} className="text-rose-500 mr-2 mt-0.5" />
                        <div>
                          <p className="text-rose-400 font-medium">Infinite Loop Risk</p>
                          <p className="text-gray-400">
                            Structure allows potential infinite loop if increment is altered.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <XCircle size={18} className="text-rose-500 mr-2 mt-0.5" />
                        <div>
                          <p className="text-rose-400 font-medium">Poor Readability</p>
                          <p className="text-gray-400">
                            Sudden <code className="text-rose-400">break</code> disrupts flow and readability.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <XCircle size={18} className="text-rose-500 mr-2 mt-0.5" />
                        <div>
                          <p className="text-rose-400 font-medium">Unclear Purpose</p>
                          <p className="text-gray-400">
                            The goal of the loop isn't communicated well to readers.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle size={24} className="text-emerald-400 mr-3 mt-1 drop-shadow-[0_0_8px_#34d399]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Recommended Fix:</h3>
                    <p className="text-gray-400 mb-3">Use a <code className="text-emerald-400">for</code> loop with range:</p>
                    <div className="bg-gray-900/60 border border-emerald-600/40 rounded-lg p-4 font-mono text-sm shadow-[0_0_15px_#34d39922]">
                      <pre className="text-emerald-400 whitespace-pre-wrap">
                        <code>{goodCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <CodeIcon size={24} className="text-sky-400 mr-3 mt-1 drop-shadow-[0_0_8px_#38bdf8]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Why This is Better:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-emerald-400 mr-2 mt-0.5" />
                        <p className="text-gray-400">
                          <span className="font-medium text-white">Clear Intent:</span> For loop clearly expresses iteration.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-emerald-400 mr-2 mt-0.5" />
                        <p className="text-gray-400">
                          <span className="font-medium text-white">Safe Increment:</span> No infinite loop risk.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-emerald-400 mr-2 mt-0.5" />
                        <p className="text-gray-400">
                          <span className="font-medium text-white">Improved Readability:</span> Simpler, clearer, and easier to maintain.
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
