import { Link } from 'react-router-dom';
import {useAppContext} from '../context/context'
import {useHistory} from 'react-router-dom'
import './Signup.css'
// import mypic from '../../images/img.jpg'
function Signup(){
    let history = useHistory ();
        
   
    const { Brandnam } = useAppContext()

    return(
        <div className="dashboard">

            
            
                <div className="top">

                    <div className="kofi">

                        <h1 className="signn" >
                        
                        {Brandnam}</h1>

                        <input className="inpute" placeholder="Username" type="text" />
                        <input className="inpute" placeholder="Email" type="email" />
                        <input className="inpute" placeholder="Password" type="password"  />
                        <input className="inpute" placeholder="Retype Password" type="password"/>
                    
                    
                        <div className="btndiv">
                    
                            <button className="btn" style={{backgroundColor:"red"}}>Cancel</button>
                            <button className="btn" onClick={()=>history.push('/Login')} > Signup</button>  
                         </div>

                          
                    </div>
                    
                </div>

                <div className="bottom">
                    <h1  className="branding">
                    
                    RUSHOUR
                    </h1>
                </div>
            
            
                 <Link to="/Signup" className="link">Already have an account? </Link> 
        </div>
    )
}

export default Signup;