import './App.css'
import Product from "./Product"
import User from "./User"
import Header from "./Header"
import Post from './Post'
import Main1 from "./Main1"
import Footer from "./Footer"
import {nanoid} from "nanoid"
import { useState } from 'react'
import { useEffect } from 'react'
import Category from './Category'
import Card from './Card'
import AllCards from './AllCards';
import Calculator from './Calculator';
import Register from './Register';
import Login from './Login';
import Zadacha1 from "./Zadacha1";
import Zadacha2 from "./Zadacha2"

function App() {
  return (
    <div>
    <Zadacha1/>
    <Zadacha2/>
    </div>
  )
}

// function App() {

// const [showBlock, setShowBlock] = useState(false);

// useEffect(() => {
//   document.addEventListener("click", setShowBlock(false));
//   return () => document.removeEventListener("click", setShowBlock(false));
// },[]);

// return (
//   <div>
//     <a href="#" onClick={() => setShowBlock(true)}>Показать блок</a>
//     {showBlock && <div>Это скрытый блок</div>}
//   </div>
//  )
// }

// function App() {

//   const [color, setColor] = useState();

//   useEffect(() => {
//     document.addEventListener("click",() => setColor("red"));
//     return() => document.removeEventListener("click",() => setColor("red"));
//   },[]);

//   return (
//     <div style={{backgroundColor: color}}>
//       <h1>Нажмите где-нибудь <br /> 
//       чтобы поменять цвет <br />
//       этого блока</h1>
//     </div>
//   )
// }

// function App() {
//   const [color, setColor] = useState("green");

//   function handleEnter(event) {
//     if (event.keyCode === 13) {
//       setColor("blue");
//     }
//   }

//   function changeColor() {
//     setColor("orange");
//   }
  
//   useEffect(()=>{
//     document.body.style.backgroundColor=color;
//     window.addEventListener("keydown", handleEnter);
//     return () => {
//       window.removeEventListener("keydown", handleEnter)
//     };
//   },[color]);

//   return (
//     <div>
//       <h1>React App</h1>
//       <button onClick={changeColor}>Change</button>
//     </div>
//   );

// }

// function App() {
//   const [color, setColor] = useState('white');

//   useEffect(() => {
//     const changeColor = () => {
//       setColor('red');
//     };

//     document.addEventListener('click', changeColor);
//     return () => document.removeEventListener('click', changeColor);
//   }, []);

//   return (
//     <div style={{ backgroundColor: color }}>
//     </div>
//   );
// }


  // const[count,setCount]=useState(0);
  // useEffect(()=>{
  //   document.title=count;
  //   console.log("Новое значение: ", count);
  // },[count])
  // return (
  //   <div>
  //     <h1>Hello React</h1>
  //     <h2>{count}</h2>
  //     <button onClick={()=>setCount(count+1)}>Увеличить</button>
  //   </div>
//   );
// }

// function App() {
// return <div>
//   <select>
//     <option>text1</option>
//     <option>text2</option>
//     <option>text3</option>
//     <option>text4</option>
//   </select>
// </div>;
// }

// function App() {
//   const product={
//     name: "Hleb",
//     cost: 1000
//   }
//   return (
//     <div className="container">
//       <Card name={product.name} cost={product.cost}/>
//       <Card name="Планшет" cost={5000}/>
//       <Card name="Телефон" cost={2000}/>
//       </div>
//   );
// }

// function App() {
//   const [numbers, setNumbers] = useState(["A", "B", "C", "D", "E"]);

//   function addNumber() {
//     setNumbers([...numbers, numbers.length + 1]);
//   }

//   function deleteNumber() {
//     setNumbers([...numbers.slice(0, 2), ...numbers.slice(2)]);
//   }

//   return (
//     <div className="container">
//       <AllCards/>
//       {numbers.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//       <button onClick={addNumber}>add</button>
//       <button onClick={deleteNumber}>Delete</button>
//       <Calculator/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <AllCards />
//     </div>
//   );
// }

//   const products=[
//     {
//       id:nanoid(),
//       name:"Hleb",
//       cost:10000
//     },
//     {
//       id:nanoid(),
//       name:"Bulka",
//       cost:100
//     },
//     {
//       id:nanoid(),
//       name:"Moloko",
//       cost:1000
//     }
//   ]
//   return (
//     <div className="container">
//     {products.map(product=>(
//       <Card key={product.id} product={product}/>
//     ))}
//     </div>
//   )
// }



// function App() {
// const [checked, setChecked] = useState(true);
// const [checked2, setChecked2] = useState(true);
// const [checked3, setChecked3] = useState(true);

// let message;
// if (checked && checked2 && checked3) {
//   message = <p>Вы знаете HTML, CSS и JS</p>;
// } else if (checked && checked2) {
//   message = <p>Вы знаете HTML и CSS</p>;
// } else if (checked) {
//     message = <p>Вы знаете HTML</p>;
// } else if (checked2) {
//     message = <p>Вы знаете CSS</p>;
// } else if (checked3) {
//     message = <p>Вы знаете JS</p>;
// } else {
//     message = <p>Вы ничего не знаете</p>;
// }

// return <div>
//     <p>HTML: {checked ? "Знает" : "Не знает"}</p>
//     <p>CSS: {checked2 ? "Знает" : "Не знает"}</p>
//     <p>JS: {checked3 ? "Знает" : "Не знает"}</p>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
//     <span>HTML</span>
//     <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
//     <span>CSS</span>
//     <input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} />
//     <span>JS</span>
//     <div>{message}</div>
// </div>;
// }



    
  // const [values, setValues]=useState([0, 0, 0, 0, 0]);

  // function znacheniye(index, newValue){
  //   const newValues=[...values];
  //   newValues[index]=Number(newValue);
  //   setValues(newValues);
  // }

  // function perevod() {
  //   let sum=0;
  //   for (let i=0; i<values.length; i++) {
  //     sum+=values[i]
  //   }
  //   return sum/values.length;
  // }

  // const[result,setResult]=useState("");
  // const[value,setValue]=useState("");

  // const number=[1,2,3];
  // const number1="100";
  // const prods=[
  //   {id: nanoid(), name: "stst", const: 1000},
  //   {id: nanoid(), name: "stst2", const: 3000},
  //   {id: nanoid(), name: "stst3", const: 3000},
  // ]
    // function func(event) {
    //     console.log(event.target);
    // }
    // return <div>
    //     <button onClick={func}>act</button>
    // </div>;

  // const arr = [];
  // for (let i = 0; i <= 9; i++) {
  //   arr.push(<p>{i}</p>);
  // } 
  // return <div>
  //   {arr}
  // </div>;

  // function getDigitsSum(stroka){
  //   let sum=0;
  //   let str=String(stroka)
  //   for (let index=0; index<str.length; index++){
  //     sum+=Number(str[index]);
  //     }
  //     return sum
  //   }

  // function abboba(arr){
  //   return(
  //     <div>
  //       {arr.map((num)=>(
  //       <p key={num}>{num}</p> 
  //       ))}
  //     </div>
  //   )
  // }



  {/* return (
    <div className="container"> */}
      {/* {values.map((chislo, index) => (
        <div key={index}>
          <input 
            type="number"
            value={chislo}
            onChange={(e) => znacheniye(index, e.target.value)}/>
        </div>
      ))
    }

    <p>{perevod()}</p> */}
    {/* <Header/>
    <div className="post-category">
    <Post/>
    <Category/></div>
    <Footer/> */}

      {/* <br />
      <input 
      value={value} 
      onChange={(e)=>setValue(e.target.value)}/>
      <p>{value}</p> */}


      {/* <ul>
        {prods.map(prods=>(
          <li key={prods.id}>
            {prods.id}
            {prods.name}
            {prods.const}
          </li>
        ))
        }
      </ul> */}

{/*   
      {getDigitsSum(123)} */}
      {/* <Header/>
      <Main1/>
      <Footer/>
      {abboba(number)} number {number1} */}
      {/* <Product/>
      <User/>
      <table border={1} style={{color:"red",}}>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table> */}
    // </div>
  // );
// }

  export default App;