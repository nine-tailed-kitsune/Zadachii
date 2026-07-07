import { useCallback, useRef, useState, useTransition } from "react";
import { MyContext } from './MyContext';
import Parent from './Parent';

function App () {

  const [age, setAge] = useState(50);

  const user={
    age: age
  }

  return (
    <MyContext.Provider value={user}>
      <div>
        <Parent/>
        <button onClick={() => setAge(age-2)}>Уменьшить возраст</button>
      </div>
    </MyContext.Provider>
  )
}