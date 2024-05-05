import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { itemsList } from './helpers/expensiveCompute';
import { Item } from './interface/Item';
import { Button } from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState<Item[]>(itemsList);


  // Without use Memo, function is calle each time the app component is re-rendered, as it is an expensive computation, it calls the function again and again. but as wrap this function un useMemo with empty dependecy array, it computes the function only once
  // const selectedItem: Item | undefined = useMemo(() => { 
  //   console.log("initialted again")
  //   return items.find((element) => element.isSelected)}, [items]);

  const selectedItemButton : JSX.Element  = useMemo(() => {
    const requiredItem : Item | undefined = items.find((element) => element.isSelected)
    return <Button>{requiredItem ? requiredItem.id : "Loading"}</Button>
  }, [items]);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        {/* <Button>{selectedItem ? selectedItem.id : "Loading"}</Button> */}
        {selectedItemButton}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
