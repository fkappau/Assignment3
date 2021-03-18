import './Login.css'
import React, { useState } from 'react'
import mypic from './images/emoji.png'
function Form(){
 
    return(
        
            
    <div className="maincontainer">

        
        <div className="formcontainer">

            
            <div className="headerdiv">
                <h1>KENTEGUY</h1>
            </div>

            
            <div className="imagediv">
                 <img src={mypic} className="imge" alt="emoji"/> 
               
            </div>


           
            <div className="inputdiv">

                
                <input id="username" type="name" placeholder="Username" class="myinputfields"/>

                 <input id="email" type="Email" placeholder="Email" class="myinputfields"/>
                
                <input id="password" type="password" placeholder="Password" class="myinputfields"/>

                <input id="passworde" type="password" placeholder="confirmPassword" class="myinputfields"/>

            </div>


            
            <div className="buttondiv">
                <button id="button">Login</button>
                <button id="buttone">Cancel</button>
            </div>

            
            <div class="footerdiv">
               Forget Username/Password?
            </div>
        </div>

    </div>
            

    )
}
export default Form