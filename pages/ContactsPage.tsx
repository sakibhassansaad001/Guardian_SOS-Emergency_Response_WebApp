
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white text-slate-900">Emergency Contacts</h2>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-gray-300">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full px-5">
          <div className="pt-6 pb-2 max-w-2xl mx-auto">
            <div className="relative w-full">
              <div className="absolute -inset-1 bg-primary/30 rounded-xl blur-lg opacity-50"></div>
              <button className="relative w-full flex flex-col items-center justify-center h-24 bg-primary hover:bg-red-600 active:scale-[0.98] transition-all rounded-xl shadow-xl border border-red-500 overflow-hidden group">
                <div className="flex items-center gap-3 z-10">
                  <span className="material-symbols-outlined text-white text-3xl animate-pulse">campaign</span>
                  <span className="text-white text-xl font-bold uppercase tracking-wide">Notify All Contacts</span>
                </div>
                <span className="text-white/80 text-xs mt-1 font-medium z-10">Tap and hold to send SOS</span>
                <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full"></div>
              </button>
            </div>
            <p className="text-center text-xs text-slate-500 dark:text-gray-400 mt-3 px-4 leading-relaxed">
              This will send your current location and a distress signal to all people listed below.
            </p>
          </div>

          <div className="mt-8 mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">Your Trusted Circle</p>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">3 Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <ContactCard name="Jane Doe" relation="Wife" image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MMaoeFCZl1jFzVGqNrIBBo1EAVskgq8ZoxE9SiazGLQDrSjemUlnox5Hv3t3a8fskYv4AsQJjUVzQhb5_49qWrM3Pjxuw4hl0eRhbuffsTicOXN8EbXr2yKROz2bCzii4eKpzuUotR_WtHPyoaRr2YHt9qW-8_Fq2Gj_Q4ARhNTMAACdZpDZtAceMrsqbI3kXl9xomw4qWlyENL59BqBr44XFfpqdkgdJymod7FhTDsAyBoCOEzhgyWdc93AfO2E7wnVZGe-PD8" />
            <ContactCard name="John Smith" relation="Brother" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_bSOAlSER9UW0u-AWIMusaWN7Hgi5EKKe1hoOq4opEzpOOKqwwhosOUoWPfGvdvkuSIrPO7G9qLwz04zYzEAmXN0vZoxBQiBWlI0XqaRKzY7bshOE0ZnIP02an_lcYakqexwYI2hPQmxqkeN5cfu_Cim1aW68jnPBbao-m1IdHl-LUvn5Fc9SsvrHrhE3ETTQHcX5OutCg2v1OK56-qXURSbwAm1s6LxW1LpQk8cDlxXOUVlElGIYby71I0JQnMBrr70t-wH5rk" />
            
            <div className="group relative flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-500/20 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-14 w-14 bg-blue-100 dark:bg-blue-900/40 rounded-full border-2 border-blue-200 dark:border-blue-500/30">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">local_police</span>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Local Dispatch</p>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Auto</span>
                  </div>
                  <p className="text-slate-500 dark:text-blue-300/70 text-sm font-medium">Emergency Services (911)</p>
                </div>
              </div>
              <button className="p-2 text-blue-300 dark:text-blue-800 cursor-not-allowed" disabled>
                <span className="material-symbols-outlined">lock</span>
              </button>
            </div>

            <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:border-primary/50 hover:text-primary transition-all group">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-white/5">
                <span className="material-symbols-outlined text-xl">add</span>
              </div>
              <span className="font-semibold text-sm">Add New Contact</span>
            </button>
          </div>

          <div className="mt-8 mb-4 max-w-2xl mx-auto">
            <div className="flex gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/20">
              <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 shrink-0">info</span>
              <p className="text-sm text-orange-800 dark:text-orange-200/80 leading-snug">
                Ensure your contacts have the app installed to receive real-time location tracking during an emergency.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ContactCard: React.FC<{ name: string, relation: string, image: string }> = ({ name, relation, image }) => (
  <div className="group relative flex items-center justify-between p-3 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-colors">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="bg-center bg-no-repeat bg-cover rounded-full h-14 w-14 border-2 border-white dark:border-white/10 shadow-sm" style={{ backgroundImage: `url('${image}')` }} />
        <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center text-left">
        <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">{name}</p>
        <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">{relation}</p>
      </div>
    </div>
    <button className="p-2 text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white rounded-full">
      <span className="material-symbols-outlined">more_vert</span>
    </button>
  </div>
);

export default ContactsPage;
