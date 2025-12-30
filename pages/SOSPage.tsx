
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface CallingOverlayProps {
  service: string;
  onEndCall: () => void;
}

const CallingOverlay: React.FC<CallingOverlayProps> = ({ service, onEndCall }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getServiceData = () => {
    switch (service) {
      case 'POLICE':
        return { icon: 'local_police', color: 'bg-blue-600' };
      case 'MEDICAL':
        return { icon: 'medical_services', color: 'bg-red-600' };
      case 'FIRE':
        return { icon: 'local_fire_department', color: 'bg-orange-600' };
      default:
        return { icon: 'phone', color: 'bg-gray-600' };
    }
  };

  const data = getServiceData();

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-between py-20 px-6 animate-in fade-in duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Emergency Line</span>
        </div>
        <h2 className="text-white text-4xl font-black tracking-tight mt-4">{service}</h2>
        <p className="text-white/40 text-sm font-medium">{formatTime(timer)}</p>
      </div>

      <div className="relative">
        <div className={`absolute inset-0 rounded-full ${data.color} opacity-20 animate-ping`}></div>
        <div className={`absolute inset-0 rounded-full ${data.color} opacity-10 animate-pulse scale-150`}></div>
        <div className={`relative z-10 flex size-32 items-center justify-center rounded-full ${data.color} shadow-2xl border-4 border-white/10`}>
          <span className="material-symbols-outlined text-white text-6xl">{data.icon}</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-12">
        <div className="grid grid-cols-3 gap-8 w-full max-w-[280px]">
          <CallActionButton icon="mic_off" label="Mute" />
          <CallActionButton icon="dialpad" label="Keypad" />
          <CallActionButton icon="volume_up" label="Speaker" />
          <CallActionButton icon="add_call" label="Add" />
          <CallActionButton icon="videocam" label="Video" />
          <CallActionButton icon="contacts" label="Contacts" />
        </div>

        <button 
          onClick={onEndCall}
          className="flex size-20 items-center justify-center rounded-full bg-primary shadow-2xl shadow-primary/40 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-white text-4xl transform rotate-[135deg]">call</span>
        </button>
      </div>
    </div>
  );
};

const CallActionButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-2 group">
    <div className="flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/5 group-active:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-white text-2xl">{icon}</span>
    </div>
    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

const SOSPage: React.FC = () => {
  const navigate = useNavigate();
  const [sliderPos, setSliderPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCall, setActiveCall] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const handleWidth = 56;
  const padding = 4;

  const handleDrag = (clientX: number) => {
    if (!trackRef.current || !isDragging) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const maxTravel = rect.width - handleWidth - (padding * 2);
    const relativeX = clientX - rect.left - (handleWidth / 2);
    const pos = Math.min(Math.max(0, relativeX), maxTravel);
    
    setSliderPos(pos);
    if (pos >= maxTravel * 0.98) {
      triggerSOS();
    }
  };

  const triggerSOS = () => {
    setIsDragging(false);
    setSliderPos(0);
    setShowSnackbar(true);
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 30, 100, 30, 100]);
    }
    setTimeout(() => setShowSnackbar(false), 5000);
  };

  const startCall = (service: string) => {
    setActiveCall(service);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-40 md:pb-32">
      {showSnackbar && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-[100] animate-in slide-in-from-top-10 duration-300">
          <div className="bg-primary rounded-2xl p-4 shadow-2xl border border-white/20 flex items-start gap-4">
            <div className="bg-white/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-white animate-pulse">campaign</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-black text-sm uppercase tracking-wide">SOS Response Sent</h4>
              <p className="text-white/90 text-xs mt-1 leading-relaxed">
                Emergency units have been notified. Help is on the way. Keep your phone nearby.
              </p>
            </div>
            <button onClick={() => setShowSnackbar(false)} className="text-white/50 hover:text-white">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>
      )}

      {activeCall && (
        <CallingOverlay service={activeCall} onEndCall={() => setActiveCall(null)} />
      )}

      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-6 pt-4 pb-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <button onClick={() => navigate('/profile')} className="flex size-10 md:hidden items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white transition active:scale-95">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </button>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 md:text-left">Emergency Assistance</h2>
          <div className="flex items-center gap-4">
             <button className="hidden md:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">construction</span> System Test
             </button>
             <button className="text-[#b99d9e] text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors">Support</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col">
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-surface-dark/10 dark:bg-surface-dark p-4 md:p-6 border border-primary/10 dark:border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[20px]">my_location</span>
                <span className="text-xs font-black tracking-widest uppercase">Current Location</span>
              </div>
              <p className="text-gray-900 dark:text-white text-base font-bold leading-normal text-center md:text-left">
                123 Main St, New York, NY 10001
              </p>
            </div>
            <button className="text-primary text-sm font-bold hover:underline">View Map</button>
          </div>
        </div>

        <div className="pb-8 text-center md:text-left">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight uppercase">
            Emergency Dispatch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Connect instantly with specialized response units</p>
        </div>

        <div className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={() => startCall('POLICE')}
              className="group relative flex w-full h-44 md:h-52 items-center overflow-hidden rounded-3xl bg-blue-900 dark:bg-blue-950 p-6 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{backgroundImage: `url('https://picsum.photos/seed/police/800/400')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 dark:from-blue-950/90 dark:to-blue-900/80"></div>
              <div className="relative z-10 flex flex-1 items-center justify-between">
                <div className="flex items-center gap-6 text-left">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
                    <span className="material-symbols-outlined text-white text-[32px]">local_police</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-black text-white tracking-wide uppercase">Police</h3>
                    <span className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">Law Enforcement</span>
                  </div>
                </div>
                <div className="size-12 rounded-full border-2 border-white/20 flex items-center justify-center animate-pulse">
                   <span className="material-symbols-outlined text-white text-[28px]">call</span>
                </div>
              </div>
            </button>

            <button 
              onClick={() => startCall('MEDICAL')}
              className="group relative flex w-full h-44 md:h-52 items-center overflow-hidden rounded-3xl bg-primary dark:bg-red-900 p-6 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{backgroundImage: `url('https://picsum.photos/seed/medical/400/400')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/90 to-red-600/80 dark:from-red-900/90 dark:to-red-800/80"></div>
              <div className="relative z-10 flex flex-1 items-center justify-between">
                <div className="flex items-center gap-6 text-left">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
                    <span className="material-symbols-outlined text-white text-[32px]">medical_services</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-black text-white tracking-wide uppercase">Medical</h3>
                    <span className="text-red-100 text-xs font-bold uppercase tracking-widest mt-1">Ambulance</span>
                  </div>
                </div>
                <div className="size-12 rounded-full border-2 border-white/20 flex items-center justify-center animate-pulse">
                   <span className="material-symbols-outlined text-white text-[28px]">call</span>
                </div>
              </div>
            </button>

            <button 
              onClick={() => startCall('FIRE')}
              className="group relative flex w-full h-44 md:h-52 items-center overflow-hidden rounded-3xl bg-orange-700 dark:bg-orange-900 p-6 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] lg:col-span-1 md:col-span-2 lg:md-auto"
            >
              <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{backgroundImage: `url('https://picsum.photos/seed/fire/400/400')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-700/90 to-orange-600/80 dark:from-orange-900/90 dark:to-orange-800/80"></div>
              <div className="relative z-10 flex flex-1 items-center justify-between">
                <div className="flex items-center gap-6 text-left">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
                    <span className="material-symbols-outlined text-white text-[32px]">local_fire_department</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-black text-white tracking-wide uppercase">Fire</h3>
                    <span className="text-orange-100 text-xs font-bold uppercase tracking-widest mt-1">Fire & Rescue</span>
                  </div>
                </div>
                <div className="size-12 rounded-full border-2 border-white/20 flex items-center justify-center animate-pulse">
                   <span className="material-symbols-outlined text-white text-[28px]">call</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="pb-10">
          <h4 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">Advanced Safety Modules</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceButton icon="report_problem" title="Crime Report" desc="Instant anonymous reporting" color="amber" onClick={() => navigate('/crime-report')} />
            <ServiceButton icon="bloodtype" title="Blood Centers" desc="Find live donation banks" color="red" onClick={() => navigate('/blood-centers')} />
            <ServiceButton icon="inventory_2" title="Evidence Vault" desc="Encrypted safety cloud" color="slate" />
            <ServiceButton icon="assignment" title="File GD" desc="Formal non-emergency reports" color="blue" />
            <ServiceButton icon="videocam" title="Live Stream" desc="Share feed with contacts" color="red" />
            <ServiceButton icon="diversity_3" title="Nearby Help" desc="Community assist network" color="purple" />
            <ServiceButton icon="security" title="Safe Zones" desc="Verified local safety map" color="emerald" />
          </div>
        </div>

        <div className="pb-24 md:pb-32">
          <h4 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">Device Tools</h4>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <ToolButton icon="share_location" label="Share Loc" />
            <ToolButton icon="flashlight_on" label="Flashlight" />
            <ToolButton icon="campaign" label="Alarm" />
            <ToolButton icon="wifi_calling_3" label="Wifi Call" />
            <ToolButton icon="vibration" label="Pulse" />
            <ToolButton icon="visibility" label="Night" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-40">
        <div 
          ref={trackRef}
          className="relative w-full h-20 rounded-full bg-surface-dark border border-gray-700 dark:border-white/5 overflow-hidden shadow-2xl select-none"
          onMouseMove={(e) => handleDrag(e.clientX)}
          onTouchMove={(e) => handleDrag(e.touches[0].clientX)}
          onMouseUp={() => { setIsDragging(false); setSliderPos(0); }}
          onTouchEnd={() => { setIsDragging(false); setSliderPos(0); }}
          onMouseLeave={() => { setIsDragging(false); setSliderPos(0); }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <p className="text-white/40 text-sm font-black tracking-[0.3em] animate-pulse">SLIDE FOR GLOBAL SOS</p>
          </div>
          <div 
            className={`absolute top-2 left-2 bottom-2 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg z-10 cursor-ew-resize touch-none ${!isDragging ? 'transition-all duration-300 ease-out' : ''}`}
            style={{ transform: `translateX(${sliderPos}px)` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <span className="material-symbols-outlined text-white text-3xl animate-pulse">sos</span>
          </div>
          <div className="absolute right-6 top-0 bottom-0 flex items-center text-white/20 pointer-events-none">
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
            <span className="material-symbols-outlined text-3xl -ml-4 opacity-60">chevron_right</span>
            <span className="material-symbols-outlined text-3xl -ml-4 opacity-30">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceButton: React.FC<{ icon: string, title: string, desc: string, color: string, onClick?: () => void }> = ({ icon, title, desc, color, onClick }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    slate: 'bg-slate-100 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400'
  };

  return (
    <button onClick={onClick} className="group flex flex-col gap-3 rounded-2xl bg-white dark:bg-white/5 p-5 active:bg-gray-100 dark:active:bg-white/10 transition-all border border-gray-100 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm text-left">
      <div className="flex items-center justify-between w-full">
        <div className={`p-3 rounded-xl ${colorClasses[color] || colorClasses.blue} group-hover:scale-110 transition-transform`}>
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-[20px] group-hover:text-primary transition-colors">arrow_forward</span>
      </div>
      <div>
        <span className="block text-base font-black text-gray-900 dark:text-white">{title}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-1 line-clamp-2">{desc}</span>
      </div>
    </button>
  );
};

const ToolButton: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-gray-100 dark:bg-surface-dark p-4 active:bg-gray-200 dark:active:bg-surface-dark-lighter transition-all hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 shadow-sm">
    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">{icon}</span>
    <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">{label}</span>
  </button>
);

export default SOSPage;
