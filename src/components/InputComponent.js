import {useState} from "react";

const InputComponent = () => {
    let [username, setUserName] = useState("홍길동");
    const handleClick = () => {
      console.log("클릭");
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setUserName(value);
        console.log(value);
    };
    return (
        <div>
            <b>{username}</b>
            <br/>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>입력</button>
        </div>
    );
}

export default InputComponent;