
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-x-hidden no-scrollbar pb-24 md:pb-12">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 pt-12 pb-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex md:hidden items-center justify-center w-10 h-10 rounded-full">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-center md:text-left flex-1 md:pr-0 pr-8">Safety Resources</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="py-4">
          <div className="relative flex items-center w-full h-12 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden group focus-within:ring-2 focus-within:ring-primary/50 transition-all max-w-2xl mx-auto">
            <div className="flex items-center justify-center pl-4 pr-3 text-gray-400 dark:text-gray-500">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full h-full bg-transparent border-none outline-none text-base placeholder-gray-400 text-gray-900 dark:text-white focus:ring-0" placeholder="Search guides (e.g., CPR, Burns)..." type="text" />
          </div>
        </div>

        <section className="py-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">Quick Dial</h3>
            <button className="text-xs font-medium text-primary uppercase">View All</button>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
            <QuickDial icon="local_police" label="Police" color="blue" />
            <QuickDial icon="ambulance" label="Ambulance" color="red" />
            <QuickDial icon="local_fire_department" label="Fire" color="orange" />
          </div>
        </section>

        <section className="py-4">
          <h3 className="text-base font-bold mb-3 text-gray-900 dark:text-white">Featured Guide</h3>
          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer max-w-3xl mx-auto">
            <img alt="Hurricane preparedness" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBDPEKnexQ3wZcddOiXnslfTZNGLzn_F9TEODU4psyOkqASlPtK6oQ9_iVz4Fvi1CSAh0By1wKnZXHUVoS3I4cneNzrWe-J6CMdKQbyyB0Ucusjx24eL9BoHYkKfzxxCH6d7wRvLWMuBa4Xh2N9Xt_F2GtaRRauZO6CjNhUo3H_pTiia1UAOWZJBmMbCjHHjk4ahluYwqXOgHzvPaNaDCdMQ3V7GwmF0cmepHxM6p1WryOGozvRIU_aHd4_7E04PIcOQmby_23SOU" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-white uppercase tracking-wider">Seasonal</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">download_done</span> Offline Ready
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Hurricane Readiness</h2>
              <p className="text-sm text-gray-200 line-clamp-1">Essential checklist before the storm hits your area.</p>
            </div>
          </div>
        </section>

        <section className="py-2">
          <h3 className="text-base font-bold mb-3 text-gray-900 dark:text-white">Browse Categories</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Category icon="medical_services" title="First Aid" info="CPR, Burns, Cuts" color="red" />
            <Category icon="flood" title="Disaster Prep" info="Flood, Fire, Quake" color="amber" />
            <Category icon="perm_phone_msg" title="Contacts" info="Local Directory" color="green" />
            <Category icon="shield" title="Self Defense" info="Techniques, Tips" color="purple" />
          </div>
        </section>

        <section className="py-4 pb-20">
          <h3 className="text-base font-bold mb-3 text-gray-900 dark:text-white">Saved for Offline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SavedItem icon="monitor_heart" title="CPR Basics" info="Step-by-step instructions" />
            <SavedItem icon="warning" title="Earthquake Drill" info="Drop, Cover, and Hold On" />
          </div>
        </section>
      </div>
    </div>
  );
};

const QuickDial: React.FC<{ icon: string, label: string, color: string }> = ({ icon, label, color }) => (
  <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm active:scale-95 transition-transform hover:bg-primary/5 group">
    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-${color === 'blue' ? 'blue-50' : color === 'red' ? 'red-50' : 'orange-50'} dark:bg-${color === 'blue' ? 'blue-900/20' : color === 'red' ? 'primary/10' : 'orange-900/20'} text-${color === 'blue' ? 'blue-600' : color === 'red' ? 'primary' : 'orange-600'}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <span className="text-xs font-semibold">{label}</span>
  </button>
);

const Category: React.FC<{ icon: string, title: string, info: string, color: string }> = ({ icon, title, info, color }) => (
  <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group text-left">
    <div className="flex justify-between items-start mb-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-primary`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white">{title}</h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{info}</p>
  </div>
);

const SavedItem: React.FC<{ icon: string, title: string, info: string }> = ({ icon, title, info }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm text-left">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{info}</p>
      </div>
    </div>
    <span className="material-symbols-outlined text-green-500" style={{ fontSize: '20px' }}>check_circle</span>
  </div>
);

export default ResourcesPage;
