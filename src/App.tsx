import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  return (
    <div className="shell">
      <ScrollToTop />
      <SiteHeader />
      <main className="shell-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
