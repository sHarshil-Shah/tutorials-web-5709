import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const PR = lazy(() => import('./ProfileRegistration'));
const Profile = lazy(() => import('./Profile'));

// router added
const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<PR />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
