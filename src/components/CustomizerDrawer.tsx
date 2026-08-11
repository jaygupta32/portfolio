import React, { useState } from 'react';
import { Settings2, X, RefreshCw, Code, Check } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface CustomizerDrawerProps {
  data: PortfolioData;
  onUpdateData: (newData: PortfolioData) => void;
  onResetData: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  data,
  onUpdateData,
  onResetData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'json'>('edit');
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    const updated = {
      ...data,
      personal: {
        ...data.personal,
        [field]: value,
      },
    };
    onUpdateData(updated);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#111111] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#0A8FFF] transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer group"
        title="Customize Portfolio Config"
      >
        <Settings2 className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
        <span className="hidden sm:inline">Customize Data</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A8FFF]" />
                  <h3 className="font-bold text-[#111111] text-base tracking-tight">
                    Portfolio Data Config
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#777777] hover:text-[#111111] rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#E8E8E8] my-4">
                <button
                  onClick={() => setActiveTab('edit')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === 'edit'
                      ? 'border-[#0A8FFF] text-[#0A8FFF]'
                      : 'border-transparent text-[#777777]'
                  }`}
                >
                  Quick Edit
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                    activeTab === 'json'
                      ? 'border-[#0A8FFF] text-[#0A8FFF]'
                      : 'border-transparent text-[#777777]'
                  }`}
                >
                  View Data Model
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'edit' ? (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Developer Name
                    </label>
                    <input
                      type="text"
                      value={data.personal.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={data.personal.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={data.personal.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Hourly Rate
                    </label>
                    <input
                      type="text"
                      value={data.personal.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs font-semibold font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Availability Status
                    </label>
                    <input
                      type="text"
                      value={data.personal.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A] block mb-1">
                      Bio
                    </label>
                    <textarea
                      rows={3}
                      value={data.personal.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full bg-[#F3F4F5] border border-[#E8E8E8] rounded-xl px-3 py-2 text-xs text-[#333] resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#777777]">portfolioData.ts</span>
                    <button
                      onClick={handleCopyJSON}
                      className="text-[10px] font-bold uppercase tracking-wider text-[#0A8FFF] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {showToast ? <Check className="w-3 h-3 text-emerald-600" /> : <Code className="w-3 h-3" />}
                      {showToast ? 'Copied JSON!' : 'Copy JSON'}
                    </button>
                  </div>
                  <pre className="bg-[#111111] text-gray-200 text-[10px] font-mono p-4 rounded-xl max-h-[350px] overflow-y-auto leading-relaxed">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer Reset */}
            <div className="pt-4 border-t border-[#E8E8E8] mt-6 flex items-center justify-between">
              <button
                onClick={onResetData}
                className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#111111] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#0A8FFF] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
