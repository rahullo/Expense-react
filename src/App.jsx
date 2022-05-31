import './App.css';
import Landing from './components/landingPage/landing.jsx';
import Record from './components/RecordPage/record';
import Navigation from './routes/navigation/navigation';
import SignUp from './components/SignUp/signup.component';


import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route  index element={<Landing/>}/>
          <Route  path='record' element={<Record/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
