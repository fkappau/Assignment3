import { Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Components/Home/Login/Login'
import Signup from './Components/Home/Login/SignUp/Signup'
import {AppProvider} from './Components/Home/Login/context/context'
function App() {
  return (
   

     <AppProvider>

       <Switch>
         <Route exact path="/" component={Login}/>
         
         <Route exact path="/signup" component={Signup} />
       </Switch>
       
     </AppProvider>
     
  );
}

export default App;
