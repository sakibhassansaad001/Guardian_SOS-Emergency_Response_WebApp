
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [autoShare, setAutoShare] = useState(true);
  const [preciseLoc, setPreciseLoc] = useState(true);
  const [batteryStatus, setBatteryStatus] = useState(true);
  const [duration, setDuration] = useState('Until Safe');

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-24">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-4 justify-between border-b border-gray-200 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Location Sharing</h2>
      </div>

      <div className="flex-1 flex flex-col p-4 gap-6">
        <div className="rounded-xl bg-white dark:bg-surface-dark/30 border border-gray-200 dark:border-white/5 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4 text-left">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>sos</span>
                <p className="text-base font-bold leading-tight">Auto-Share on SOS</p>
              </div>
              <p className="text-slate-500 dark:text-text-secondary text-sm font-normal leading-normal">Automatically send live location when you trigger an alert.</p>
            </div>
            <Toggle checked={autoShare} onChange={setAutoShare} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between px-1">
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em]">Trusted Contacts</h3>
            <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Manage Groups</span>
          </div>
          <div className="rounded-xl bg-white dark:bg-surface-dark/30 border border-gray-200 dark:border-white/5 overflow-hidden divide-y divide-gray-100 dark:divide-white/5 shadow-sm">
            <SettingsContact name="Mom" email="Martha.j@example.com" image="https://picsum.photos/seed/mom/100" />
            <SettingsContact name="Partner" email="+1 (555) 012-3456" image="https://picsum.photos/seed/partner/100" />
            <button className="w-full flex items-center justify-center gap-2 py-4 text-primary hover:bg-primary/5 transition-colors font-medium text-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
              Add New Contact
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-text-secondary px-1 text-left">Trusted contacts will receive an SMS and push notification with your live location during an SOS event.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-1 text-left">Privacy & Duration</h3>
          <div className="rounded-xl bg-white dark:bg-surface-dark/30 border border-gray-200 dark:border-white/5 p-5 flex flex-col gap-6 shadow-sm">
            <div className="flex flex-col gap-3 text-left">
              <label className="text-sm font-semibold text-slate-700 dark:text-gray-200">Share Duration</label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 dark:bg-black/40 rounded-lg">
                {['Until Safe', '1 Hour', '4 Hours'].map((d) => (
                  <button 
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`py-2 px-1 text-xs font-medium rounded-md transition-all text-center ${
                      duration === d ? 'bg-white dark:bg-primary text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-100 dark:border-white/5 text-left">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Precise Location</p>
                <p className="text-xs text-slate-500 dark:text-text-secondary">Allows contacts to see your exact coordinates.</p>
              </div>
              <Toggle checked={preciseLoc} onChange={setPreciseLoc} />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-100 dark:border-white/5 text-left">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Share Battery Status</p>
                <p className="text-xs text-slate-500 dark:text-text-secondary">Includes battery % in alerts.</p>
              </div>
              <Toggle checked={batteryStatus} onChange={setBatteryStatus} />
            </div>
          </div>
        </div>

        <button className="mt-2 w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-surface-dark/30 border border-gray-200 dark:border-white/5 shadow-sm group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>history</span>
            </div>
            <span className="text-sm font-semibold">View Sharing History</span>
          </div>
          <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all" style={{ fontSize: '20px' }}>chevron_right</span>
        </button>

        <div className="mt-4 mb-8 text-center px-6">
          <p className="text-[10px] text-slate-400 dark:text-white/30 leading-relaxed">
            Your location data is end-to-end encrypted and only shared with selected contacts during active SOS events. 
            <a className="underline hover:text-primary transition-colors ml-1" href="#">Read Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const Toggle: React.FC<{ checked: boolean, onChange: (v: boolean) => void }> = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer shrink-0">
    <input checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" type="checkbox" />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-black/40 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  </label>
);

const SettingsContact: React.FC<{ name: string, email: string, image: string }> = ({ name, email, image }) => (
  <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group text-left">
    <div 
      className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 shrink-0 border border-white/10"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold truncate">{name}</p>
      <p className="text-xs text-slate-500 dark:text-text-secondary truncate">{email}</p>
    </div>
    <button className="shrink-0 text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
    </button>
  </div>
);

export default SettingsPage;
