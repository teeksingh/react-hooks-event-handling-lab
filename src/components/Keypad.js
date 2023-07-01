// Code Keypad Component Here
function eventChange(event) {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div><input type="password" onChange={eventChange} /></div>
    )
}

export default Keypad;