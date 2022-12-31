import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const GamesPage = lazy(() => import('../pages/GamesPage/GamesPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage/PrivacyPage'));
const SupportPage = lazy(() => import('../pages/SupportPage/SupportPage'));
const TermsPage = lazy(() => import('../pages/TermsPage/TermsPage'));
const SwipeOrDiePage = lazy(() => import('../pages/SwipeOrDiePage/SwipeOrDiePage'));
const GrabTheKeyPage = lazy(() => import('../pages/GrabTheKeyPage/GrabTheKeyPage'));

const PagesRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/*" element={<GamesPage />} />
        <Route path="/games/swipe-or-die" element={<SwipeOrDiePage />} />
        <Route path="/games/grab-the-key" element={<GrabTheKeyPage />} />
        <Route path="/about-company" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
