import { useContext } from "react";
import { MyContext } from "./MyContext";

function Grandson() {
    const user=useContext(MyContext);
    return(
        <div>
        <h2>Возраст внука: {user.age/2}</h2>
        </div>
    )
}

export default Grandson;