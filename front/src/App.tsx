import React from 'react';
import  Dashboard from './screens/Dashboard'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

import ViewUsers from './screens/ViewUsers';
import ViewProfile from './screens/ViewProfile';
import ProfileSettings from './screens/ProfileSettings';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
     
   <Router>
      <Routes>
        
        <Route path="/" Component={LoginScreen} />
        <Route path="/signup" Component={SignupScreen} />
     
          <Route path="/dashboard/view-users" element={<ViewUsers />} />
          <Route path="/dashboard/view-profile" element={<ViewProfile />} />
          <Route path="/dashboard/profile-settings" element={<ProfileSettings />} />
        
        
       
        
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </Router>

  </>

  );
}

export default App;
