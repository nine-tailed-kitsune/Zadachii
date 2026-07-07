import { useContext } from "react";
import { MyContext } from "./MyContext";
import Grandson from "./Grandson";

function Daughter() {
    const user=useContext(MyContext);
    return(
        <div>
        <h2>Возраст дочери: {user.age}</h2>
        <Grandson/>
        </div>
    )
}

export default Daughter;