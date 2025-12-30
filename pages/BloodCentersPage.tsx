
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BloodCentersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-x-hidden font-manrope text-gray-900 dark:text-white selection:bg-primary/30">
      <div className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/5 pb-2">
        <div className="max-w-7xl mx-auto w-full px-6 pt-6 flex items-center justify-between gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-xl md:text-2xl font-black tracking-tight flex-1 md:text-left uppercase">Life-Stream Network</h1>
          <button className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl font-black text-xs uppercase hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-sm">map</span>
            <span>Live View</span>
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-6 mt-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative group flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full h-14 pl-12 pr-12 rounded-2xl bg-white dark:bg-surface-dark border-none shadow-md text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all font-medium" 
                placeholder="Find O- Negative, Platelets, Plasma centers..." 
                type="text"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl text-gray-400 dark:text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">tune</span>
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar items-center w-full md:w-auto pb-2 md:pb-0">
              <button className="shrink-0 h-11 px-6 rounded-xl bg-primary text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-95">
                Global
              </button>
              <button className="shrink-0 h-11 px-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-300 text-sm font-black uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                Urgent
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 py-8 flex-1">
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
               <h2 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">Active Donation Banks</h2>
               <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-500/10">
                  <span className="material-symbols-outlined filled text-[14px]">my_location</span>
                  New York Downtown
               </div>
            </div>
            <button className="text-primary text-xs font-black uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all">Advanced Filters</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DonationCenterCard 
              name="City General Blood Bank" 
              address="123 Medical Center Dr" 
              distance="0.8 mi" 
              status="Open" 
              urgent="O- Negative" 
              image="https://picsum.photos/seed/hospital/400"
              featured={true}
            />
            <DonationCenterCard 
              name="Red Cross Hub - East" 
              address="45 Community Ave" 
              distance="2.4 mi" 
              status="Closing Soon" 
              urgent="Platelets" 
              image="https://picsum.photos/seed/redcross/400"
            />
            <DonationCenterCard 
              name="St. Jude Triage" 
              address="88 Health Pl" 
              distance="3.1 mi" 
              status="Open" 
              urgent="Plasma" 
              image="https://picsum.photos/seed/stjude/400"
            />
             <DonationCenterCard 
              name="Metro Blood Supply" 
              address="12 Park Row" 
              distance="5.0 mi" 
              status="Open" 
              urgent="B+ Positive" 
              image="https://picsum.photos/seed/metro/400"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-[88px] md:bottom-12 right-6 z-40">
        <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl px-8 py-5 shadow-2xl shadow-red-600/40 transition-all hover:scale-105 active:scale-95 border-2 border-white/20">
          <span className="material-symbols-outlined text-2xl">favorite</span>
          <span className="font-black text-sm uppercase tracking-widest">Register Donor Profile</span>
        </button>
      </div>
    </div>
  );
};

const DonationCenterCard: React.FC<{ name: string, address: string, distance: string, status: string, urgent?: string, image: string, featured?: boolean }> = ({ name, address, distance, status, urgent, image, featured }) => (
  <div className={`group bg-white dark:bg-surface-dark rounded-3xl p-5 shadow-xl transition-all hover:scale-[1.02] border ${featured ? 'border-primary/40 ring-2 ring-primary/5' : 'border-gray-100 dark:border-white/5'}`}>
    <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
      <img src={image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute top-3 left-3 flex gap-2">
         {featured && <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg">Featured</span>}
         <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg ${status === 'Open' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
           {status}
         </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
         <span className="text-white text-xs font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
           {distance} Away
         </span>
         <button className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
            <span className="material-symbols-outlined text-xl">bookmark</span>
         </button>
      </div>
    </div>
    
    <div className="text-left">
      <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight truncate">{name}</h3>
      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1">{address}</p>
    </div>

    {urgent && (
      <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 w-full">
        <span className="material-symbols-outlined text-red-500 text-xl">bloodtype</span>
        <div className="flex flex-col">
           <span className="text-[10px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest">Urgent Requirement</span>
           <span className="text-sm font-black text-red-700 dark:text-red-500 uppercase">{urgent}</span>
        </div>
      </div>
    )}

    <div className="grid grid-cols-2 gap-3 mt-6">
      <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
        <span className="material-symbols-outlined text-xl">call</span> Contact
      </button>
      <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20">
        <span className="material-symbols-outlined text-xl">directions</span> Navigate
      </button>
    </div>
  </div>
);

export default BloodCentersPage;
