import "./App.css";
import { useState } from "react";
import { useEffect } from "react"

function Zadacha2() {

    const [showBlock, setShowBlock] = useState(false);

    useEffect(() => {
    document.addEventListener("click", setShowBlock(false));
    return() => document.removeEventListener("click", setShowBlock(false));
    },[]);

    return (
    <div>
        <a href="#" onClick={() => setShowBlock(true)}>Показать блок</a>
        {showBlock && <div>Это скрытый блок</div>}
    </div>
    )
}

export default Zadacha2