import { useState } from "react";

export function useInput(defaultValue,validateFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);


    const isNotValid=validateFn(enteredValue);

    function handleChange(event) {
        const value = event.target.value;
        setEnteredValue(value);
        setDidEdit(false);
    }

    function handleFocus() {
        setDidEdit(true);
    }

    return {
        value:enteredValue,
        handleChange,
        handleFocus,
        hasError:didEdit&&!isNotValid
    }

}