import {useReducer,useEffect} from "react";

function Button({ positions, initalAlignment, setAlignment, initalEmail, initalPass }) {
const reducerFunction = (state , action) =>{

    if(action.type  === "CHECK_MAIL_PASS_BOX"){

        return action.payload.initalEmail === "" || action.payload.initalPass === ""
    }
    else{
        return state;
    }
}

    const [ value , dispatcher ]=useReducer(reducerFunction,[
        initalEmail,
        initalPass,
    ]);
    
    useEffect(() =>{
    dispatcher({
        type :"CHECK_MAIL_PASS_BOX",
        payload :{
            initalEmail,
            initalPass,
        }
    })
},[initalEmail,initalPass]);



const handleMouseEnter = () => {
    if(value){
    setAlignment((prev) => (prev + 1) % positions.length);
    }
};

const handleClick = () => {
    if(!value){
    console.log("Email:", initalEmail);
    console.log("Password:", initalPass);
    }
};

return (
    <div
    className="button-container"
    style={{ display: "flex", justifyContent: positions[initalAlignment] }}
    >
    <button {...( value ? {onMouseEnter : handleMouseEnter} : {onClick :handleClick})}>
        Log In
    </button>

    </div>
);
}

export default Button;

