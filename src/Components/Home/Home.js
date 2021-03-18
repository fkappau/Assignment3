import './Home.css'
import Button from './Button'
import Navbar from './Navbar'
import Login from './Login'
import Checkbox from './Checkbox'
import Radiobutton from './RadioButton'
import Typography from './Typography'
import Selectoption from './Selectoption'
function Home() {
    
    
    
    return(
        <div className='Maindiv'>
        
        <Navbar text="KENTEGUYS SERVICES" /> 
        <div>
        
            <h1>WHAT DO U WANT</h1>
            <Login/>
        </div>
        <div>
        
            <Radiobutton/>
            <Typography text="look here"/>
            <Checkbox/>
        
        </div>
            <p><Selectoption/></p>
        </div>
    )
    }
export default Home