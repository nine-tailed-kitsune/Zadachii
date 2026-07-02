import "./App.css";
import { useState } from "react";
import { useEffect } from "react"

function Zadacha1() {

    const [color, setColor] = useState();

    useEffect(() => {
    document.addEventListener("click",() => setColor("red"));
    return() => document.removeEventListener("click",() => setColor("red"));
    },[]);

    return (
    <div style={{backgroundColor: color}}>
        <h1>Нажмите где-нибудь <br /> 
        чтобы поменять цвет <br />
        этого блока</h1>
    </div>
    )
}

export default Zadacha1