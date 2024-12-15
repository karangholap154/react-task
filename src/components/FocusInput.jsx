import { useRef } from "react";


const FocusInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div className="app-container">
            <input ref={inputRef} type="text" placeholder="Enter Text" id="my-input" />
            <button onClick={handleClick}>Click To Focus</button>
        </div>
    );
};

export default FocusInput;