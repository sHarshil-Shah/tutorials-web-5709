// router.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Always lazy load all components/modules
const Login = lazy(() => import('./login'));
const Users = lazy(() => import('./users'));
const UserProfile = lazy(() => import('./userprofile'));


const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/users/:id" Component={UserProfile} />
          <Route path="/users" Component={Users} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
