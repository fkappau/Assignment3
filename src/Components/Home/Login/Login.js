import './Login.css'
import {useAppContext} from './context/context'
import mypic from './images/emoji.png'
import {useState} from 'react'

function Form(){
    
    const {Brandnam,goTo,} = useAppContext();
    function goToSign () {
        goTo('/signup')
    }
    const [values,setValues] = useState();
    function update(e){
        setValues({...values,[e.target.name] : e.target.value})
        console.log(update)
    }
    

    return(
        
            
    <form className="maincontainer">

        
        <div className="formcontainer">

            
            <div className="headerdiv">
                
                <h1>{Brandnam}</h1>
            </div>

            
            <div className="imagediv">
                 <img src={mypic} className="imge" alt="emoji"/> 
               
            </div>


           
            <div className="inputdiv">

                
                <input  name="username" id="username" type="name" placeholder="Username" class="myinputfields" onChange={update}/>

                 <input name="mail" id="email" type="Email" placeholder="Email" class="myinputfields"onChange={update}/>
                
                <input name="pass" id="password" type="password" placeholder="Password" class="myinputfields"onChange={update}/>

                <input name="cpass" id="passworde" type="password" placeholder="confirmPassword" class="myinputfields"onChange={update}/>

            </div>


                
            <div className="buttondiv">
                <button id="button" onClick={goToSign} >Login</button>
                <button id="buttone">Cancel</button>
            </div>

            
            <div class="footerdiv">
               Forget Username/Password?
            </div>
        </div>

    </form>
            

    )
}
export default Form