
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex items-center px-6 py-4 justify-between sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 md:hidden shrink-0 items-center justify-center rounded-xl active:bg-black/5 dark:active:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Verified Medical ID</h2>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-white font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-primary/20">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="py-8">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left animate-in fade-in duration-500">
              <div className="size-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-3xl">lock_open</span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Access on Emergency Unlock</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-2xl">
                  This identity card is authorized for display on the device lockscreen. First responders can view critical data without requiring biometric authentication.
                </p>
              </div>
              <button className="bg-white dark:bg-white/10 text-primary md:text-gray-900 dark:md:text-white px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest border border-primary/20 md:border-transparent">Configure Visibility</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
            {/* Profile Info Card */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start p-8 rounded-3xl bg-white dark:bg-surface-dark shadow-xl border border-gray-100 dark:border-white/5 text-center lg:text-left h-fit">
              <div className="relative mb-8">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-3xl h-40 w-40 ring-8 ring-background-light dark:ring-background-dark shadow-2xl transition-transform hover:scale-105 duration-500"
                  style={{ backgroundImage: `url('https://picsum.photos/seed/alex/300')` }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl ring-4 ring-white dark:ring-surface-dark flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-2xl filled">medical_services</span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Alex S. Doe</h1>
                <div className="flex flex-col gap-2 mt-4 text-slate-500 dark:text-[#b99d9e]">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="material-symbols-outlined text-sm">cake</span>
                    <span className="text-sm font-black uppercase tracking-widest">Born Jan 12, 1990 (34 yrs)</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                    <span className="text-sm font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Registered Organ Donor</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <StatCard label="Blood Group" value="A+" color="primary" wide />
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard label="Height" value="180" unit="cm" />
                    <StatCard label="Weight" value="75" unit="kg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Details Sections */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Section title="Active Conditions" icon="ecg_heart">
                  <div className="flex flex-wrap gap-3">
                    <Tag label="Severe Asthma" />
                    <Tag label="Type 2 Diabetes" />
                    <Tag label="Hypertension" />
                  </div>
                </Section>

                <Section title="Critical Allergies" icon="warning">
                  <div className="flex flex-col gap-3">
                    <div className="bg-primary/10 border-l-4 border-primary dark:bg-primary/20 rounded-2xl p-5 flex items-center justify-between text-left">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-black text-lg uppercase tracking-tight">Peanuts</span>
                        <span className="text-primary text-xs font-black uppercase tracking-widest mt-1">Severe Anaphylaxis</span>
                      </div>
                      <span className="material-symbols-outlined text-primary text-3xl">no_meals</span>
                    </div>
                    <div className="bg-white dark:bg-[#2a1d1e] border-l-4 border-slate-300 dark:border-slate-700 rounded-2xl p-5 shadow-md flex items-center justify-between text-left">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-black text-lg uppercase tracking-tight">Penicillin</span>
                        <span className="text-slate-500 dark:text-[#b99d9e] text-xs font-black uppercase tracking-widest mt-1">Contact Hives</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 text-3xl">medication_liquid</span>
                    </div>
                  </div>
                </Section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Section title="Current Medications" icon="pill">
                  <div className="bg-white dark:bg-[#2a1d1e] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5">
                    <MedicationItem name="Metformin" info="500mg • 1x Daily" />
                    <MedicationItem name="Albuterol Inhaler" info="90mcg • As needed" />
                    <MedicationItem name="Lisinopril" info="10mg • Daily" />
                  </div>
                </Section>

                <Section title="Health Providers" icon="stethoscope">
                  <div className="bg-white dark:bg-[#2a1d1e] rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                             <span className="material-symbols-outlined">person</span>
                          </div>
                          <div>
                             <p className="font-black uppercase tracking-tight text-gray-900 dark:text-white">Dr. Sarah Smith</p>
                             <p className="text-xs font-bold text-gray-500">Primary Physician</p>
                          </div>
                       </div>
                       <button className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined">call</span>
                       </button>
                    </div>
                  </div>
                </Section>
              </div>

              <div className="mt-4 p-8 rounded-3xl bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-white/5 text-center">
                <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-loose">
                  Official Medical Records Supplement <br/>
                  <span className="text-slate-500 dark:text-slate-400 mt-2 block">
                    Patient has a pacemaker installed 2018. Blood thinners are contraindicated without consultation.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string, value: string, unit?: string, color?: string, wide?: boolean }> = ({ label, value, unit, color, wide }) => (
  <div className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-6 bg-white dark:bg-[#392829] shadow-lg border border-gray-100 dark:border-white/5 ${wide ? 'w-full' : ''}`}>
    <p className="text-slate-500 dark:text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
    <p className={`${color === 'primary' ? 'text-primary' : 'text-slate-900 dark:text-white'} tracking-tighter text-3xl font-black uppercase`}>
      {value} {unit && <span className="text-lg font-bold text-slate-400 normal-case">{unit}</span>}
    </p>
  </div>
);

const Section: React.FC<{ title: string, icon: string, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="flex flex-col flex-1">
    <h3 className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
      {title}
    </h3>
    <div className="flex-1">{children}</div>
  </div>
);

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-[#392829] border border-gray-200 dark:border-white/5 px-5 shadow-sm">
    <p className="text-slate-900 dark:text-white text-sm font-black uppercase tracking-tight">{label}</p>
  </div>
);

const MedicationItem: React.FC<{ name: string, info: string }> = ({ name, info }) => (
  <div className="p-5 border-b last:border-b-0 border-gray-100 dark:border-white/5 flex justify-between items-center text-left group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
    <div>
      <p className="text-slate-900 dark:text-white font-black uppercase tracking-tight">{name}</p>
      <p className="text-slate-500 dark:text-[#b99d9e] text-xs font-bold mt-1 tracking-widest uppercase">{info}</p>
    </div>
    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
  </div>
);

export default ProfilePage;
