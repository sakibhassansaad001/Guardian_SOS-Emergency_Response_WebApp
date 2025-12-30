
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
        <div className="size-32 flex items-center justify-center rounded-full bg-primary shadow-2xl border-4 border-white/10">
          <span className="material-symbols-outlined text-white text-6xl">call</span>
        </div>
      </div>
      <button 
        onClick={onEndCall}
        className="flex size-20 items-center justify-center rounded-full bg-primary shadow-2xl active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined text-white text-4xl transform rotate-[135deg]">call</span>
      </button>
    </div>
  );
};

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
    if (pos >= maxTravel * 0.99) {
      triggerSOS();
    }
  };

  const triggerSOS = () => {
    setIsDragging(false);
    setSliderPos(0);
    setShowSnackbar(true);
    if ('vibrate' in navigator) navigator.vibrate([100, 30, 100, 30, 100]);
    setTimeout(() => setShowSnackbar(false), 5000);
  };

  const getProgress = () => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const maxTravel = rect.width - handleWidth - (padding * 2);
    return sliderPos / maxTravel;
  };

  const progress = getProgress();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-40 md:pb-32">
      {showSnackbar && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-[100] animate-in slide-in-from-top-10 duration-300">
          <div className="bg-primary rounded-xl p-4 shadow-2xl border border-white/20 flex items-start gap-4">
            <div className="bg-white/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-white animate-pulse">sos</span>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm uppercase">Emergency Response Sent</h4>
              <p className="text-white/90 text-xs mt-1">First responders and emergency contacts have been notified of your location.</p>
            </div>
          </div>
        </div>
      )}

      {activeCall && <CallingOverlay service={activeCall} onEndCall={() => setActiveCall(null)} />}

      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 pt-4 pb-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate('/profile')} className="flex md:hidden size-10 items-center justify-center rounded-full bg-gray-200 dark:bg-white/10">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </button>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center md:text-left">Emergency Assistance</h2>
          <button className="text-[#b99d9e] text-xs font-bold uppercase tracking-wider hover:text-primary">Test</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col">
        <div className="py-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-surface-dark/10 dark:bg-surface-dark p-3 border border-primary/10 dark:border-primary/20">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px]">my_location</span>
              <span className="text-xs font-bold tracking-wider uppercase">Current Location</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium text-center">123 Main St, New York, NY</p>
          </div>
        </div>

        <div className="pb-4">
          <h1 className="text-gray-900 dark:text-white text-2xl font-black leading-tight text-center md:text-left tracking-tight">WHO TO CALL?</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center md:text-left text-xs mt-1">Tap to connect immediately</p>
        </div>

        <div className="pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <button 
              onClick={() => setActiveCall('POLICE')}
              className="group relative flex w-full items-center overflow-hidden rounded-2xl bg-blue-900 dark:bg-blue-950 p-4 shadow-lg transition-all active:scale-[0.98] h-32 md:h-44"
            >
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCh_rrwTq_TDrsnEdOBkJB-i6pluR1fqGTv37UZG_KBVR_mZx6OW3uLhxLje9BDuYeqyCFS82huUhwRuil6lFlGaWva9T2A7Wqc61kM0Ds91qsljIaYYXeNPtCVD8BzWzK6lMTm3OEDVCewAQwbAAQIUJB6mc6JNEae5euv0H4-Nh9OcwlqZjM-ZFFY2DLd35cg8zzwcBZ6qC8pYH1EFSSVjoEz5ptYnJSO2BPpBZg-bp2oD23pOapQAsgrmW_OOqafmxpxzYlBm6A')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 dark:from-blue-950/90 dark:to-blue-900/80"></div>
              <div className="relative z-10 flex flex-1 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-10 md:size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white text-[24px] md:text-[32px]">local_police</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-wide">POLICE</h3>
                    <span className="text-blue-200 text-[10px] md:text-xs font-medium uppercase">Law Enforcement</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/50">call</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveCall('MEDICAL')}
              className="group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-primary dark:bg-red-900 p-4 shadow-lg transition-all active:scale-[0.98] h-32 md:h-44"
            >
              <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLXz78XsgcQcvdydxnqinmgDqpGbEBwfUTtB6KYEHILftWrRVlfWTPe5UAImDjNXd2F_f7H2tl2-QPv90Mb2uQubQdS7KMZq7ypx26MZvKOJKEaYGyUN_RxWMoJVZPYQr4LXf3IMhm7PJJQ7Q1Ov2IXayZSBpkIcvn1IYaXIUwtay9Nkw75n4oexaqEyclf5kQYr0kDWzd0-x2T5_GC5XseK6HB2EGDBHoCz-OvbHxCeNJnN5F0HS0UJX_4gl_Qoh39OtNL17688A')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/90 to-red-600/80 dark:from-red-900/90 dark:to-red-800/80"></div>
              <div className="relative z-10 w-full flex justify-between items-start">
                <div className="flex size-10 md:size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-inner">
                  <span className="material-symbols-outlined text-white text-[24px] md:text-[32px]">medical_services</span>
                </div>
              </div>
              <div className="relative z-10 mt-auto text-left">
                <h3 className="text-lg md:text-xl font-black text-white tracking-wide">MEDICAL</h3>
                <span className="text-red-100 text-[10px] md:text-xs font-medium block">Ambulance</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveCall('FIRE')}
              className="group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-orange-700 dark:bg-orange-900 p-4 shadow-lg transition-all active:scale-[0.98] h-32 md:h-44"
            >
              <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3Snak0BRntPQJB9mTCCJ0v0hbHulChip0pDqRyYLRwBO4RBbfiK2_uMp6bktyRZGvcLBXfMmf_45JPMYsXH36dlAHv89i9ITyOjN7_3wgXO51rIyoGUWwxSN6rHH3oYEjN6fqTdRA8cimUqsg66P60Y9QmEONoHvt0F3CTSnToo6LeIrAtppRF05kWSI1TLgrWWoj2xIqlekJqohBXy0YJrspYURsdDDikne7tCiH0VN6YiK2M3Xi8gtkCUEmUgkTC1rVLTmm6ag')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-700/90 to-orange-600/80 dark:from-orange-900/90 dark:to-orange-800/80"></div>
              <div className="relative z-10 w-full flex justify-between items-start">
                <div className="flex size-10 md:size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-inner">
                  <span className="material-symbols-outlined text-white text-[24px] md:text-[32px]">local_fire_department</span>
                </div>
              </div>
              <div className="relative z-10 mt-auto text-left">
                <h3 className="text-lg md:text-xl font-black text-white tracking-wide">FIRE</h3>
                <span className="text-orange-100 text-[10px] md:text-xs font-medium block">Fire & Rescue</span>
              </div>
            </button>
          </div>
        </div>

        <div className="pb-4">
          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1">Advanced Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AdvancedButton icon="report_problem" label="Crime Report" color="amber" onClick={() => navigate('/crime-report')} />
            <AdvancedButton icon="bloodtype" label="Blood Centers" color="red" onClick={() => navigate('/blood-centers')} />
            <AdvancedButton icon="assignment" label="File GD" color="blue" />
            <AdvancedButton icon="videocam" label="Live Stream" color="red" />
            <AdvancedButton icon="diversity_3" label="Nearby Help" color="purple" />
            <AdvancedButton icon="security" label="Safe Zones" color="emerald" />
          </div>
        </div>

        <div className="pb-12">
          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1">Quick Tools</h4>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
            <ToolButton icon="share_location" label="Share Loc" />
            <ToolButton icon="flashlight_on" label="Flashlight" />
            <ToolButton icon="campaign" label="Alarm" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-40">
        <div 
          ref={trackRef}
          className="relative w-full h-16 rounded-full bg-surface-dark border border-gray-700 dark:border-white/5 overflow-hidden shadow-2xl select-none"
          onMouseMove={(e) => handleDrag(e.clientX)}
          onTouchMove={(e) => handleDrag(e.touches[0].clientX)}
          onMouseUp={() => { setIsDragging(false); setSliderPos(0); }}
          onTouchEnd={() => { setIsDragging(false); setSliderPos(0); }}
        >
          {/* Animated Background Fill */}
          <div 
            className="absolute inset-y-0 left-0 bg-primary/40 transition-all duration-75 ease-out"
            style={{ width: `${sliderPos + handleWidth}px` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30 animate-pulse"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] transition-opacity duration-200" style={{ opacity: 1 - progress * 1.5 }}>
              SLIDE FOR GENERAL SOS
            </p>
            <p className="absolute text-white/80 text-[10px] font-black tracking-[0.2em] transition-opacity duration-200" style={{ opacity: progress > 0.3 ? (progress < 0.8 ? 1 : 0) : 0 }}>
              KEEP SLIDING TO SEND
            </p>
            <p className="absolute text-white text-[10px] font-black tracking-[0.2em] animate-pulse" style={{ opacity: progress >= 0.8 ? 1 : 0 }}>
              RELEASE TO ACTIVATE
            </p>
          </div>

          <div 
            className={`absolute top-1 left-1 bottom-1 w-14 rounded-full bg-primary flex items-center justify-center shadow-lg z-10 cursor-ew-resize touch-none ${!isDragging ? 'transition-all duration-300 ease-out' : ''}`}
            style={{ transform: `translateX(${sliderPos}px)` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <span className="material-symbols-outlined text-white animate-pulse">sos</span>
          </div>

          <div className="absolute right-4 top-0 bottom-0 flex items-center text-white/20">
            <span className="material-symbols-outlined">chevron_right</span>
            <span className="material-symbols-outlined -ml-3 opacity-60">chevron_right</span>
            <span className="material-symbols-outlined -ml-3 opacity-30">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvancedButton: React.FC<{ icon: string, label: string, color: string, onClick?: () => void }> = ({ icon, label, color, onClick }) => (
  <button onClick={onClick} className="flex flex-col gap-2 rounded-xl bg-gray-100 dark:bg-white/5 p-4 active:bg-gray-200 dark:active:bg-white/10 transition-colors border border-transparent dark:border-white/5 text-left">
    <div className="flex items-center justify-between w-full">
      <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 dark:text-${color}-400`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <span className="material-symbols-outlined text-gray-400 text-[16px]">arrow_forward</span>
    </div>
    <span className="block text-sm font-bold text-gray-900 dark:text-white truncate">{label}</span>
  </button>
);

const ToolButton: React.FC<{ icon: string, label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-200 dark:bg-surface-dark p-3 active:bg-gray-300 transition-colors">
    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">{icon}</span>
    <span className="text-[10px] font-bold uppercase text-gray-600 dark:text-gray-400">{label}</span>
  </button>
);

export default SOSPage;
