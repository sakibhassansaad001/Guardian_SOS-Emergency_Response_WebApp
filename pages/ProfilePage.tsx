
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex items-center px-4 py-3 pb-2 justify-between sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex md:hidden size-10 items-center justify-center rounded-full">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Medical ID</h2>
          <button className="text-primary font-bold text-base px-2 py-1">Edit</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary fill-1 shrink-0 mt-0.5">lock_open</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Access from Lock Screen</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">This Medical ID is available to first responders without unlocking your phone.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center p-6 gap-4 text-center">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 ring-4 ring-background-light dark:ring-background-dark shadow-lg" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpIEAAiVXXfndPnWqieez0pX9i4kFX0Tcjfp0HdYEdPUgNq-_wQVfzGXtjdcdpeZZMQCdcB8OtkTkJ_e5zC63ONFlOSxyBJeSgraLji_awvP-EjlDlKuTYW23x4oD6SJSrIJcCMuC_R0cz_mzzniGH_5jU4Efl407Why65Mep9p6wgVoH5FPMApiyPAB1zrSiJMLDlIGMqAcY2b4RpwokHefLt3kq9UqUDOmklys1brUOThm2RysBEEh_ZwGvpDsdotbKiHv6HTYo')` }} />
              <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full ring-4 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-lg">medical_services</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Doe</h1>
              <div className="flex items-center justify-center gap-2 mt-1 text-slate-500 dark:text-[#b99d9e]">
                <span className="text-sm font-medium">Jan 12, 1990 (34 yrs)</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span className="text-sm font-medium">Organ Donor</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <StatCard label="Blood" value="A+" color="primary" />
              <StatCard label="Height" value="180" unit="cm" />
              <StatCard label="Weight" value="75" unit="kg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              <Section title="Medical Conditions" icon="ecg_heart">
                <div className="bg-white dark:bg-[#2a1d1e] rounded-2xl p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5">
                  <div className="flex flex-wrap gap-2">
                    <Tag label="Asthma" />
                    <Tag label="Type 2 Diabetes" />
                  </div>
                </div>
              </Section>

              <Section title="Allergies & Reactions" icon="warning">
                <div className="flex flex-col gap-2">
                  <div className="bg-primary/10 border border-primary/30 dark:bg-primary/20 rounded-2xl p-4 flex items-center justify-between text-left">
                    <div>
                      <span className="text-slate-900 dark:text-white font-bold text-base">Peanuts</span>
                      <p className="text-primary text-sm font-medium">Severe Anaphylaxis</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-2xl">no_meals</span>
                  </div>
                  <div className="bg-white dark:bg-[#2a1d1e] rounded-2xl p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 flex items-center justify-between text-left">
                    <div>
                      <span className="text-slate-900 dark:text-white font-semibold text-base">Penicillin</span>
                      <p className="text-slate-500 dark:text-[#b99d9e] text-sm">Hives</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-2xl">medication_liquid</span>
                  </div>
                </div>
              </Section>

              <Section title="Medications" icon="pill">
                <div className="bg-white dark:bg-[#2a1d1e] rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 text-left">
                  <MedItem name="Metformin" info="500mg • 1x Daily" />
                  <MedItem name="Albuterol Inhaler" info="90mcg • As needed" />
                </div>
              </Section>

              <Section title="Emergency Contacts" icon="emergency_home">
                <div className="flex flex-col gap-3">
                  <EmergencyContactItem name="Jane Doe" info="Wife • Primary" icon="person" />
                  <EmergencyContactItem name="Dr. Smith" info="Physician" icon="stethoscope" />
                </div>
              </Section>
            </div>

            <div className="pb-8">
              <p className="text-xs text-slate-400 dark:text-slate-500 text-center leading-relaxed">
                <span className="font-bold uppercase block mb-1">Additional Notes</span>
                Patient has a pacemaker installed 2018. Blood thinners are contraindicated without consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string, value: string, unit?: string, color?: string }> = ({ label, value, unit, color }) => (
  <div className="flex flex-col items-center justify-center gap-1 rounded-2xl p-4 bg-white dark:bg-[#392829] shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5">
    <p className="text-slate-500 dark:text-white/70 text-xs font-medium uppercase tracking-wider">{label}</p>
    <p className={`${color === 'primary' ? 'text-primary' : 'text-slate-900 dark:text-white'} tracking-tight text-xl font-bold uppercase`}>
      {value} {unit && <span className="text-sm font-normal text-slate-400">{unit}</span>}
    </p>
  </div>
);

const Section: React.FC<{ title: string, icon: string, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="flex flex-col">
    <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-[#392829] px-3">
    <p className="text-slate-700 dark:text-white text-sm font-medium">{label}</p>
  </div>
);

const MedItem: React.FC<{ name: string, info: string }> = ({ name, info }) => (
  <div className="p-4 border-b last:border-b-0 border-slate-100 dark:border-white/5 flex justify-between items-center">
    <div>
      <p className="text-slate-900 dark:text-white font-semibold">{name}</p>
      <p className="text-slate-500 dark:text-[#b99d9e] text-sm">{info}</p>
    </div>
    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
  </div>
);

const EmergencyContactItem: React.FC<{ name: string, info: string, icon: string }> = ({ name, info, icon }) => (
  <div className="bg-white dark:bg-[#2a1d1e] rounded-2xl p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 flex items-center gap-4 text-left">
    <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-slate-500 dark:text-white text-xl">{icon}</span>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-slate-900 dark:text-white font-bold truncate">{name}</p>
      <p className="text-slate-500 dark:text-[#b99d9e] text-sm truncate">{info}</p>
    </div>
    <button className="size-10 rounded-full bg-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-white fill-1">call</span>
    </button>
  </div>
);

export default ProfilePage;
