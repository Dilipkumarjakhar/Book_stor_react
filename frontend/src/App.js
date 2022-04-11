
import './App.css';
import { Book } from "./components/Book";
import { Order } from './components/Order';
import Register  from './components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<Book />}></Route>
     <Route path='order' element={<Order />}></Route>
     <Route path='/res' element={<Register />}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




