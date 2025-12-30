
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
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex md:hidden size-10 items-center justify-center rounded-full">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center md:text-left md:pl-0 pr-10">Location Sharing</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 gap-6 max-w-4xl mx-auto w-full">
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
            <SettingsContact name="Mom" email="Martha.j@example.com" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNpKzfFHf8j9yXHGZqwOjVqXQvtl0w3ciHFQTkiSkyO-wDHHBX4cQl7fGeIcgNBhG2puBU4t6E32YYdksYSY2W4v2VM4vpQQZb0Tj4wxWhaHfCn13I8_nZW83ClO28gNg4u-y5WTMLlf5J0L-zAV8bh-I3gD6qngJxJlMmGlhT7HvaJcq6snQ9mfNJdVus9BNLGHxOY1jpmKo9Xl92VWMZzVVyPC_0g5nNb5TbTz1gPlGWGuLCCO0dBZc7gFHqdRXdCQfQxxLWbs" />
            <SettingsContact name="Partner" email="+1 (555) 012-3456" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJkL0UHyZQGSXaB8eItCUvMMxAf0B0YXL2LHFZMU9mMsRU_nNfArCSeZtGFJhuV1rkWnWLZFe0TDDZi326uSmqM6RKPUKss6wmlVTUXZ-UifxRHONXeaf8uxRDIUJ1pFaZJtn94DuKYHk4FOCKGDfQs3w8zjutFFrnjT0k0mI4-dGP1KmPDzXPFsm9y-9b6Sg812kROvUigIZIEgg3mvP8r2x1U0wYzNTRK62T3ynfVbaHF7rG749XVyxz0YDv2561KMYcpX9FB0" />
            <button className="w-full flex items-center justify-center gap-2 py-4 text-primary hover:bg-primary/5 transition-colors font-medium text-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person_add</span>
              Add New Contact
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-text-secondary px-1 text-left">Trusted contacts will receive alert notifications during an SOS event.</p>
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

        <button className="mt-2 w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-surface-dark/30 border border-gray-200 dark:border-white/5 shadow-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>history</span>
            </div>
            <span className="text-sm font-semibold">View Sharing History</span>
          </div>
          <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '20px' }}>chevron_right</span>
        </button>

        <div className="mt-4 mb-8 text-center px-6">
          <p className="text-[10px] text-slate-400 dark:text-white/30 leading-relaxed">
            Your location data is end-to-end encrypted. 
            <a className="underline hover:text-primary transition-colors ml-1" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const Toggle: React.FC<{ checked: boolean, onChange: (v: boolean) => void }> = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer shrink-0">
    <input checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" type="checkbox" />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-black/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  </label>
);

const SettingsContact: React.FC<{ name: string, email: string, image: string }> = ({ name, email, image }) => (
  <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group text-left">
    <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 shrink-0 border border-white/10" style={{ backgroundImage: `url('${image}')` }} />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold truncate">{name}</p>
      <p className="text-xs text-slate-500 dark:text-text-secondary truncate">{email}</p>
    </div>
    <button className="shrink-0 text-slate-400 hover:text-primary transition-colors p-2 rounded-full">
      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
    </button>
  </div>
);

export default SettingsPage;
