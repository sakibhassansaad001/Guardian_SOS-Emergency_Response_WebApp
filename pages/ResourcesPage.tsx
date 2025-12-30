
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-x-hidden no-scrollbar pb-24 md:pb-12">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 pt-12 pb-6 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-left flex-1 uppercase">Safety Intelligence</h1>
          <button onClick={() => navigate('/settings')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-gray-900 dark:text-white" style={{ fontSize: '24px' }}>settings</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-6 flex-1">
        <div className="py-8">
          <div className="relative flex items-center w-full max-w-2xl h-14 rounded-2xl bg-white dark:bg-surface-dark shadow-md border border-gray-100 dark:border-white/5 overflow-hidden group focus-within:ring-4 focus-within:ring-primary/20 transition-all mx-auto">
            <div className="flex items-center justify-center pl-5 pr-3 text-gray-400 dark:text-gray-500">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>search</span>
            </div>
            <input 
              className="w-full h-full bg-transparent border-none outline-none text-base md:text-lg placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:ring-0 font-medium" 
              placeholder="Search guides (e.g., CPR, Burns, Active Shooter)..." 
              type="text"
            />
          </div>
        </div>

        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">Priority Protocols</h3>
            <button className="text-xs font-bold text-primary hover:text-red-400 uppercase tracking-widest">Global Directory</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <QuickDialBtn icon="local_police" label="Police" color="blue" />
            <QuickDialBtn icon="ambulance" label="Medical" color="red" />
            <QuickDialBtn icon="local_fire_department" label="Fire" color="orange" />
            <QuickDialBtn icon="psychiatry" label="Mental Health" color="purple" />
            <QuickDialBtn icon="child_care" label="Child Safety" color="emerald" />
            <QuickDialBtn icon="pets" label="Animal Rescue" color="amber" />
          </div>
        </section>

        <section className="py-6">
          <h3 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">Featured Readiness</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl group cursor-pointer border border-white/5">
              <img 
                alt="Hurricane readiness" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/hurricane/800/400" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-primary text-white uppercase tracking-wider">Critical</span>
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-white/20 backdrop-blur-md text-white flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px]">download_done</span> Offline Ready
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Storm Preparedness 2024</h2>
                <p className="text-sm text-gray-200 line-clamp-2 max-w-md">Complete residential checklist and evacuation maps for current seasonal alerts.</p>
              </div>
            </div>
            
            <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl group cursor-pointer border border-white/5">
              <img 
                alt="First aid basics" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/firstaid/800/400" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-emerald-600 text-white uppercase tracking-wider">Essential</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Advanced Life Support</h2>
                <p className="text-sm text-gray-200 line-clamp-2 max-w-md">Visual step-by-step CPR and AED operation for high-stress scenarios.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <h3 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">Explore Knowledge Base</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CategoryCard icon="medical_services" title="First Aid" info="CPR, Hemorrhage, Trauma" color="red" />
            <CategoryCard icon="flood" title="Natural Disasters" info="Quakes, Floods, Tornados" color="amber" />
            <CategoryCard icon="perm_phone_msg" title="Official Contacts" info="Embassy, FD, Police" color="green" />
            <CategoryCard icon="shield" title="Personal Security" info="Self Defense, Cyber Saftey" color="purple" />
          </div>
        </section>

        <section className="py-6 pb-20">
          <h3 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">Verified Offline Assets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OfflineGuide name="Cardiac Arrest Protocol" desc="Automated emergency voice guidance" icon="monitor_heart" />
            <OfflineGuide name="Seismic Safety Guide" desc="Structural integrity & triage basics" icon="warning" />
          </div>
        </section>
      </div>
    </div>
  );
};

const QuickDialBtn: React.FC<{ icon: string, label: string, color: string }> = ({ icon, label, color }) => (
  <button className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-md active:scale-95 transition-all hover:bg-gray-50 dark:hover:bg-primary/5 group">
    <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400 group-hover:scale-110 transition-transform`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <span className="text-xs font-black uppercase tracking-widest text-center">{label}</span>
  </button>
);

const CategoryCard: React.FC<{ icon: string, title: string, info: string, color: string }> = ({ icon, title, info, color }) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-md hover:border-primary/50 transition-all cursor-pointer group text-left">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-14 h-14 rounded-xl bg-${color}-50 dark:bg-${color}-900/20 flex items-center justify-center text-${color}-600 dark:text-${color}-500 group-hover:scale-110 transition-transform`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">chevron_right</span>
    </div>
    <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-tight">{title}</h4>
    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-2">{info}</p>
  </div>
);

const OfflineGuide: React.FC<{ name: string, desc: string, icon: string }> = ({ name, desc, icon }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm text-left hover:scale-[1.01] transition-all">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div>
        <h4 className="text-base font-black text-gray-900 dark:text-white uppercase tracking-tight">{name}</h4>
        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
      </div>
    </div>
    <div className="flex items-center text-green-500 dark:text-green-400 p-2" title="Available Offline">
      <span className="material-symbols-outlined text-[24px]">check_circle</span>
    </div>
  </div>
);

export default ResourcesPage;
