import './App.css';
import Landing from './components/landingPage/landing.jsx';
import Record from './components/RecordPage/record';
import Navigation from './routes/navigation/navigation';
import SignUp from './components/SignUp/signup.component';


import { Routes, Route} from 'react-router-dom'
import Login from './components/LogIn/login.component';
import LogedIn from './components/LogedInPage/LogedInLandingPage.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route  index element={<Landing/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
          <Route path='log-in' element={<Login/>}/>
        </Route>
        <Route path='/loged-in' element={<LogedIn/>}>
          <Route  index element={<Record/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
