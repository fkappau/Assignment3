function Button(props){
    return(
        <div >
        
        <button style={{background: props.color}}
        onClick = {props.onClickButton}>
        {props.text}
        
        </button>
        </div>
    )
}
export default Button