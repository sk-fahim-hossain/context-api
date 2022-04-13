import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipments from './Components/Shipments/Shipments';


export const CategoryContext = createContext();

function App() {
  const [category,setCategory] = useState('');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      
      <Shipments></Shipments>
    </CategoryContext.Provider>
  );
}

export default App;
