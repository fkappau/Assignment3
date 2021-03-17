 import React, { useState } from 'react'
function Login(){
  
 return(
        <form className="form-group">
            <div >
                <label htmlfor="">Username</label>
                <input type="text"   class="form-control"/>
            
            
            </div>
            <div className="forms">
                <label htmlfor="">Password</label>
                <input type="text"   class="form-control"/>
            </div>
            <button class="login-btn">Login</button>
            <button class="cancel-btn">Cancel</button>
        
        </form>
    )
}
export default Login