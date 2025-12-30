
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppPages } from './types';
import SOSPage from './pages/SOSPage';
import ContactsPage from './pages/ContactsPage';
import ProfilePage from './pages/ProfilePage';
import ResourcesPage from './pages/ResourcesPage';
import SettingsPage from './pages/SettingsPage';
import CrimeReportPage from './pages/CrimeReportPage';
import BloodCentersPage from './pages/BloodCentersPage';

const NavigationItems = [
  { id: AppPages.SOS, label: 'SOS', icon: 'sos' },
  { id: AppPages.CONTACTS, label: 'Contacts', icon: 'group' },
  { id: AppPages.RESOURCES, label: 'Resources', icon: 'menu_book' },
  { id: AppPages.PROFILE, label: 'Profile', icon: 'person' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname.substring(1) || AppPages.SOS;
    if (path === AppPages.CRIME_REPORT || path === AppPages.BLOOD_CENTERS) return AppPages.SOS;
    return path as AppPages;
  };

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-white/5 h-screen sticky top-0 left-0 z-50">
      <div className="p-6 border-b border-gray-200 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white">guardian</span>
          </div>
          <h1 className="text-xl font-black tracking-tight dark:text-white">GUARDIAN</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {NavigationItems.map((item) => {
          const isActive = getActiveTab() === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-400'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'fill-current' : ''}`}>{item.icon}</span>
              <span className="font-bold uppercase tracking-wider text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-white/5">
        <button 
          onClick={() => navigate('/settings')}
          className="flex items-center gap-4 w-full p-4 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-400 transition-all"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-bold uppercase tracking-wider text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
};

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname.substring(1) || AppPages.SOS;
    if (path === AppPages.CRIME_REPORT || path === AppPages.BLOOD_CENTERS) return AppPages.SOS;
    return path as AppPages;
  };

  return (
    <nav className="md:hidden fixed bottom-0 z-50 w-full bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/5 pb-safe pt-2 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-16">
        {NavigationItems.map((item) => {
          const isActive = getActiveTab() === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-primary' : 'text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-current' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
        <Sidebar />
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<SOSPage />} />
              <Route path="/sos" element={<SOSPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/crime-report" element={<CrimeReportPage />} />
              <Route path="/blood-centers" element={<BloodCentersPage />} />
            </Routes>
          </div>
          <BottomNav />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
