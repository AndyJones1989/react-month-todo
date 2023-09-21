import Input from "../input";
import Button from "../button";
import { useState } from "react";

function Form ({addToDo}) {

    const [inputState, setInputState] = useState('');

    const onChange = (e) => {
        setInputState(e.target.value);
    }

    const onClick = () => {
        addToDo(inputState);
        setInputState('');
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '50%', margin: '0 auto', gap: '16px'}}>
        <Input onChange={onChange} />
        <Button onClick={onClick} text={'Submit'}/>
        </div>
    )
}

export default Form;