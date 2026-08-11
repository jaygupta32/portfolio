import React, { useState, useEffect } from 'react';
import { X, Download, FileText, AlertCircle } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { downloadJayGuptaCV, checkCvFileExists } from '../utils/cvGenerator';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: PortfolioData;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose }) => {
  const [fileExists, setFileExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (isOpen) {
      checkCvFileExists().then((exists) => setFileExists(exists));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    downloadJayGuptaCV();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-cyan-500/30 rounded-2xl flex flex-col shadow-[0_0_80px_rgba(2,6,23,0.95)] overflow-hidden">
        
        {/* Action Header */}
        <div className="bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Jay-Gupta-CV.pdf
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                /public/Jay-Gupta-CV.pdf
              </span>
            </div>
          </div>

          {/* Download Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownload}
              className="px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 border border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV ↓</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Viewer */}
        <div className="flex-1 bg-slate-950 p-4 flex flex-col items-center justify-center relative">
          {fileExists === false ? (
            <div className="p-8 max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl text-center space-y-4 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-mono font-bold text-amber-300 uppercase tracking-wider">
                  CV File Not Found
                </h3>
                <p className="text-xs font-mono text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                  CV file not found. Please add Jay-Gupta-CV.pdf to the public folder.
                </p>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Location: <code className="text-cyan-400">public/Jay-Gupta-CV.pdf</code>
              </p>
            </div>
          ) : (
            <iframe
              src="/Jay-Gupta-CV.pdf"
              title="Jay Gupta CV PDF"
              className="w-full h-full rounded-xl border border-slate-800 bg-white"
            />
          )}
        </div>

      </div>
    </div>
  );
};
