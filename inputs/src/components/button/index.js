
function Button ({text, onClick}) {
    return <button style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}} onClick={onClick}>{text}</button>
}

export default Button;