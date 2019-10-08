import React, {useState} from 'react';
import './App.css';
import Item from './components/items';

const initList = [
  {name:'tomato', calories:20}, 
  {name: 'rice', calories:30},
  {name:'candy', calories:100}
];
function App() {
  const [list, setList] = useState(initList)

  const reset = (e)=>{
    const resetList = [...initList]
    setList(resetList)
  }
  const removeItemHandler = (e) =>{
    const stateList = [...list]
    const removeFilter = stateList.filter(val => val.name !== e.target.name)
    setList(removeFilter)

  }
  return (
    <div className="App">
      <header className="App-header">
      <h2>Grocery List</h2>
      {list.map((val, key)=>{
        return <Item key={`${val.name}${val.calories}${key}`} item={val} onClick={removeItemHandler}/>
      })}
      <button className='remove-button' onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
