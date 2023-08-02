import axios from "axios";

const AxiosComponent = () => {
    const handleClick = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <div>
            <button onClick={handleClick}>send Request</button>
        </div>
    )
}

export default AxiosComponent;