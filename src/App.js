import { Routes, Route }  from 'react-router-dom'
import  Layout  from './components/Layout'
import  DashLayout  from './components/DashLayout'
import  MainPage  from './components/MainPage'
import  Login  from './features/auth/Login'
import  WelcomeUser  from './features/auth/WelcomeUser'
import  UsersList  from './features/users/UsersList'
import  UserSetting  from './features/users/UserSetting'
import  UserActivities  from './features/activities/UserActivities'


function App() {
  return (
    <div className='h-lvh'>

   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      
      {/* <Route path='setting' element={<Setting />} /> */}
      <Route path='login' element={<Login />} />

      <Route path='dash' element={<DashLayout />}> {/* Protected Route Dash */}
        <Route index element={<WelcomeUser />} />
        <Route path='users' element={<UsersList />} />
        <Route path='user-setting' element={<UserSetting />} />

        <Route path='activities'>
          <Route index element={<UserActivities />} />
        </Route>
      </Route> {/* End Dash */}

    </Route>
   </Routes>
   </div>

  );
}

export default App;
