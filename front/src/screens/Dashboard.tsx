import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import ViewUsers from './ViewUsers';
import ProfileSettings from './ProfileSettings';
import ViewProfile from './ViewProfile';
import { User } from '../components/User';

type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps;

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('main');
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    if (location) {
      const searchParams = new URLSearchParams(location.search);
      const userParam = searchParams.get('user');
      const parsedUser = userParam ? JSON.parse(decodeURIComponent(userParam)) : null;
      setLoggedUser(parsedUser);
    }
  }, [location]);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'viewProfile':
        return <ViewProfile />;
      case 'profileSettings':
        return <ProfileSettings />;
      case 'viewusers':
        return <ViewUsers />;
      case 'main':
      default:
        return <Main user={loggedUser} />;
    }
  };

  return (
    <div className='flex space-x-1'>
      <Sidebar setSelectedComponent={setSelectedComponent} />
      <div className='flex-grow h-screen overflow-auto'>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Dashboard;
