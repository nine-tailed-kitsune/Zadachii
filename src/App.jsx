import './App.css';
import Product from "./Product";
import User from "./User";
import Header from "./Header";
import Post from "./Post";
import Main1 from "./Main1";
import Footer from "./Footer";
import {nanoid} from "nanoid";
import { useCallback, useRef, useState, useTransition } from "react";
import { useEffect } from "react";
import Category from "./Category";
import Card from "./Card";
import AllCards from "./AllCards";
import Calculator from "./Calculator";
import Register from "./Register";
import Login from "./Login";
import Zadacha1 from "./Zadacha1";
import Zadacha2 from "./Zadacha2";
import Items from "./Items";
import Products from "./Products";
import ProductList from './ProductList';
import Profile from './Profile';
import { MyContext } from './MyContext';
import Parent from './Parent';

function App () {

  const user={
    age: 42
  }

  return (
    <MyContext.Provider value={user}>
      <div>
        <Parent/>
      </div>
    </MyContext.Provider>
  )
}




// function App() {
//   const user={
//     name: "Arara",
//     age: 20,
//     email: "arara@gmail.com"
//   }
//   return (
//     <MyContext.Provider value={user}>
//       <div>
//         <h1>App</h1>
//         <Profile/>
//         <Footer/>
//       </div>
//   </MyContext.Provider>
//   );
// }

// const products=[
//   "Хлеб",
//   "Молоко",
//   "Сыр",
//   "Кефир",
//   "Колбаса",
//   "Рис",
//   "Гречка",
//   "Бензин"
// ]

// const products=[];
// for(let i=1; i<=20000; i++) {
//   products.push("Product "+i)
// }

// function App() {
//   const [inputValue, setinputValue] = useState("");
//   const [filterItem, setfilterItem] = useState("");
//   const [isPending, startTransition] = useTransition();
//   const filterProducts=products.filter((product)=>
//   product.toLowerCase().includes(filterItem.toLowerCase()))

//   function updateFilterHandler(event) {
//     const value=event.target.value;
//     setinputValue(value);
//     startTransition(()=> {
//       setfilterItem(value);
//     });
//   }

//   return (
//     <div>
//       <h1>Поиск товара</h1>
//         <input type="text"
//         value={inputValue}
//         onChange={updateFilterHandler}
//         placeholder="Введите товар"/>
//         {isPending && <p>Список обновляется...</p>}
//         <ProductList product={filterProducts}/>
//     </div>
//   );
// }




// function App() {
//   const [text, setText] = useState("text");
//   const [producti, setProducti] = useState(["Молоко", "Кефир", "Хлеб"]);

//   const addNewProduct = useCallback(() => {
//     setProducti([...producti, "Ватрушка"]);
//   }, [producti]);

//   function AddZnak() {
//     setText(text + "!")
//   }

//   return (
//     <div>
//       <p onClick={AddZnak}>{text}</p>
//       <Products products={producti} addNewProduct={addNewProduct}/>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [items, setItems] = useState([]);
//   const addItem=useCallback(()=>{
//     setItems((prevItems)=>[...prevItems,"new items"]);
//   },[])

  // function addItem() {
  //   setItems([...items, "new item"]);
  // }
//   console.log("App render");

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={()=>setCount(count+1)}>
//         изменить count
//       </button>
//       <Items items={items} addItem={addItem}/>
//     </div>
//   );
// }

// function App() {

//   const textRef = useRef("");

//   const handleClick=() => {
//     textRef.current.focus();
//     textRef.current.value="";
//   };

//   return (
//     <div>
//       <input ref={textRef}/>
//       <button onClick={handleClick}>Очистить</button>
//     </div>
//   );
// }


// function App() {

//   const textRef=useRef("");

//   const znak=() => {
//     textRef.current=textRef.current + "!";
//   };

//   return (
//     <div>
//       <p>{textRef.current}</p>
//       <button onClick={znak}>Добавить !</button>
//     </div>
//   );
// }

// function App() {
//   const [state, setState] = useState(0);
//   const countRef=useRef(0);
//   function stateClick(){
//     setState(count+1);
//   }
//   function refClick(){
//     countRef.current++;
//     console.log(countRef.current);
//   }
//   return (
//     <div>
//       <h2>state count {count}</h2>
//       <button onClick={stateClick}>
//         state click
//       </button>
//       <h2>Ref: {countRef.current}</h2>
//       <button onClick={refClick}>
//         ref click
//       </button>
//     </div>
//   )
// }

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