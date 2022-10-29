
import './App.css';
import LoginComp from './components/misc/login/loginComp';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Dashboard from './components/dashboard/dashboardComp';
import CategoryComp from './components/category/categoryComp';
import CarsComp from './components/cars/carsComp';
import SidebarComp from './components/misc/sidebar/sidebarComp';
import { useState } from 'react';
function App() {
  const [loggedIn, setloggedIn] = useState(false)

  const LoggedIn =  (isLogged) => {
    if (isLogged !== loggedIn) {
      setloggedIn(isLogged );
    }
  };

  return (
   <div>
	<Router>
  {  loggedIn===false ? (
    < LoginComp setLogin={(isLogged) => LoggedIn(isLogged)}  />):null}
  <div
            className="d-flex"
         
          >
            <div className="d-inline">
              {loggedIn===true?(
               <SidebarComp/>

              ):null}
            </div>
            
            <div
              className={`d-inline w-100`}
            >
               {loggedIn===true?(
	<Routes>   
 
     <Route exact path='/' element={< Dashboard />}></Route>
     <Route exact path='/category' element={< CategoryComp />}></Route> 
     <Route exact path='/cars' element={< CarsComp />}></Route> 
</Routes>
               ):null}
</div>
</div>
</Router>
   </div>
  );
}

export default App;
