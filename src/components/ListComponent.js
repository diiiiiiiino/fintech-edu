import {useState} from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
    let [users, setUsers] = useState([
        {username: "훙길동", age : 12, major: "경영학"},
        {username: "KIM", age : 22, major: "Science"}
    ]);

    return (
        <div>{
            users.map((user) => {
                return <Welcome userName={user.username} age={user.age}></Welcome>
            })
        }
        </div>
    );
}

export default ListComponent;