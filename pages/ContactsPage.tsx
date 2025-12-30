
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-black leading-tight tracking-tight dark:text-white text-slate-900 uppercase">Trusted Circle</h2>
          <button onClick={() => navigate('/settings')} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-gray-300">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="pt-8 pb-4">
            <div className="relative w-full md:max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-50"></div>
              <button className="relative w-full flex flex-col items-center justify-center h-32 bg-primary hover:bg-red-600 active:scale-[0.98] transition-all rounded-2xl shadow-2xl border border-red-500 overflow-hidden group">
                <div className="flex items-center gap-4 z-10">
                  <span className="material-symbols-outlined text-white text-4xl animate-pulse">campaign</span>
                  <span className="text-white text-2xl font-black uppercase tracking-widest">Broadcast SOS</span>
                </div>
                <span className="text-white/80 text-sm mt-2 font-bold z-10">Notify all contacts immediately</span>
                <div className="absolute bottom-0 left-0 h-1.5 bg-white/30 w-full"></div>
              </button>
            </div>
            <p className="text-center text-xs md:text-sm text-slate-500 dark:text-gray-400 mt-6 px-4 leading-relaxed max-w-lg mx-auto">
              Your current location, live audio, and battery status will be shared with your trusted contacts.
            </p>
          </div>

          <div className="h-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">Emergency Network</p>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 uppercase">3 Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
            <ContactCard 
              name="Jane Doe" 
              relation="Wife" 
              image="https://picsum.photos/seed/jane/200" 
              status="online" 
            />
            <ContactCard 
              name="John Smith" 
              relation="Brother" 
              image="https://picsum.photos/seed/john/200" 
              status="online" 
            />
            
            <div className="group relative flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-500/20 shadow-sm transition-all hover:border-blue-500/40">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-16 w-16 bg-blue-100 dark:bg-blue-900/40 rounded-full border-2 border-blue-200 dark:border-blue-500/30 shrink-0">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">local_police</span>
                </div>
                <div className="flex flex-col justify-center text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-900 dark:text-white text-lg font-black leading-tight truncate">Local Dispatch</p>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">Auto</span>
                  </div>
                  <p className="text-slate-500 dark:text-blue-300/70 text-sm font-bold mt-0.5">Emergency Services (911)</p>
                </div>
              </div>
              <button className="p-2 text-blue-300 dark:text-blue-800 cursor-not-allowed shrink-0" disabled>
                <span className="material-symbols-outlined">lock</span>
              </button>
            </div>

            <button className="flex items-center justify-center gap-4 w-full py-8 rounded-2xl border-2 border-dashed border-gray-300 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:border-primary/50 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-all group">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">add</span>
              </div>
              <span className="font-black uppercase tracking-widest text-sm">Add Contact</span>
            </button>
          </div>

          <div className="pb-12">
            <div className="flex flex-col md:flex-row gap-4 p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/20 items-center text-center md:text-left">
              <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                 <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-3xl">info</span>
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-orange-800 dark:text-orange-200/80 leading-snug">
                  Connection Security Warning
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-200/60 mt-1">
                  Ensure your circle members have active data connections. Location sharing is E2EE protected.
                </p>
              </div>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-xl font-bold text-sm uppercase">Learn More</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ContactCard: React.FC<{ name: string, relation: string, image: string, status: string }> = ({ name, relation, image, status }) => (
  <div className="group relative flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-md hover:border-primary/40 transition-all hover:scale-[1.01]">
    <div className="flex items-center gap-5 min-w-0">
      <div className="relative shrink-0">
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 border-2 border-white dark:border-white/10 shadow-lg"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {status === 'online' && (
          <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
        )}
      </div>
      <div className="flex flex-col justify-center text-left min-w-0">
        <p className="text-slate-900 dark:text-white text-lg font-black leading-tight truncate">{name}</p>
        <p className="text-slate-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider mt-0.5">{relation}</p>
      </div>
    </div>
    <div className="flex items-center gap-1">
       <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
          <span className="material-symbols-outlined filled">call</span>
       </button>
       <button className="p-2 text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">more_vert</span>
       </button>
    </div>
  </div>
);

export default ContactsPage;
