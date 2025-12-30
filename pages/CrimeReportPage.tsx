
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrimeReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('Theft');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [customType, setCustomType] = useState('');

  const incidentTypes = ['Theft', 'Harassment', 'Accident', 'Vandalism', 'Other'];

  const handleSubmit = () => {
    alert("REPORT SUBMITTED: " + (selectedType === 'Other' ? customType : selectedType));
    navigate('/sos');
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-48 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display antialiased">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 border-b border-gray-200 dark:border-gray-800/50">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Report Incident</h2>
      </div>

      <div className="flex-1 flex flex-col gap-6 p-4">
        {/* Incident Type Selector */}
        <section>
          <h3 className="text-xl font-bold leading-tight pb-3 text-left">Incident Type</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {incidentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 transition-all active:scale-95 ${
                  selectedType === type
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#382929]'
                }`}
              >
                <span className="text-sm font-medium">{type}</span>
              </button>
            ))}
          </div>
          {selectedType === 'Other' && (
            <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <input 
                type="text"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
                placeholder="Enter incident type..."
                className="w-full bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-transparent py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
            </div>
          )}
        </section>

        {/* Report To Dropdown */}
        <section>
          <h3 className="text-xl font-bold leading-tight pb-3 text-left">Report To</h3>
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
              <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 group-focus-within:bg-primary/10 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">local_police</span>
              </div>
            </div>
            <select className="w-full appearance-none bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-transparent py-3.5 pl-[3.25rem] pr-10 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm">
              <option value="nearest">Nearest Police Station</option>
              <option value="city">City Police Department</option>
              <option value="highway">Highway Patrol</option>
              <option value="cyber">Cyber Crime Division</option>
              <option value="special">Special Victims Unit</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </div>
          </div>
        </section>

        {/* Location & Time */}
        <section>
          <div className="flex justify-between items-end pb-3">
            <h3 className="text-xl font-bold leading-tight">Location & Time</h3>
            <button className="text-primary text-sm font-medium">Edit</button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{backgroundImage: `url("https://picsum.photos/seed/map/800/400")`}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary drop-shadow-lg text-4xl fill-1">location_on</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium truncate max-w-[80%]">
                  124 Main St, Seattle, WA
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-surface-dark rounded-xl p-3 flex items-center gap-3 border border-gray-100 dark:border-transparent">
                <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Date</span>
                  <span className="text-sm font-medium">Oct 24, 2023</span>
                </div>
              </div>
              <div className="bg-white dark:bg-surface-dark rounded-xl p-3 flex items-center gap-3 border border-gray-100 dark:border-transparent">
                <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Time</span>
                  <span className="text-sm font-medium">10:42 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Textarea */}
        <section>
          <h3 className="text-xl font-bold leading-tight pb-3 text-left">Details</h3>
          <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-transparent focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <textarea 
              className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 resize-none leading-relaxed text-gray-900 dark:text-white" 
              placeholder="Describe what happened clearly. Include descriptions of people, vehicles, or specific events..." 
              rows={4}
            />
          </div>
        </section>

        {/* Evidence Grid */}
        <section>
          <h3 className="text-xl font-bold leading-tight pb-3 text-left">Evidence</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="group relative flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-surface-dark border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary p-6 transition-all active:scale-[0.98]">
              <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined">add_a_photo</span>
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary">Add Photo</span>
            </button>
            <button className="group relative flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-surface-dark border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary p-6 transition-all active:scale-[0.98]">
              <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined">videocam</span>
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary">Add Video</span>
            </button>
          </div>
        </section>

        {/* Anonymous Toggle */}
        <section className="bg-white dark:bg-surface-dark rounded-xl p-4 flex items-center justify-between border border-gray-100 dark:border-transparent shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">visibility_off</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Submit Anonymously</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Your identity will be hidden</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              className="sr-only peer" 
              type="checkbox" 
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          </label>
        </section>
      </div>

      {/* Footer Submit - Fixed above the navigation bar */}
      <div className="fixed bottom-20 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 p-4 z-40 max-w-md mx-auto">
        <button 
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 px-6 text-white shadow-lg shadow-primary/25 hover:bg-red-600 active:scale-[0.99] transition-all"
        >
          <span className="text-base font-bold tracking-wide">Submit Report</span>
          <span className="material-symbols-outlined text-xl">send</span>
        </button>
      </div>
    </div>
  );
};

export default CrimeReportPage;
