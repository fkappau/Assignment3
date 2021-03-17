import Button from './Button'
function Navbar(props){
    return(

        
        <div className='Navbar'>
        
            <nav 
                
                style={{backgroundColor:props.color}}>
                {props.text}
                
            
                <Button text='ABOUT US' color="red"/>
                <Button text="CONTACT" color="yellow"/>
                <Button text="HISTORY" color="pink"/>
                <Button text="PLACE AN ORDER" color="orange"/>
            </nav>
            
        
                
        </div>
        
    )
}
export default Navbar