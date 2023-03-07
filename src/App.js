

import Fottar from './Componatis/Fottar/Fottar';
import Heading from './Componatis/Heading/Heading';
import Home from './Componatis/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Product from './Componatis/Product/Product';
import Login from './Componatis/Login/Login';
import SignOut from './Componatis/SignOut/SignOut';
function App() {
  return (
    <div className="App">
      <Heading></Heading>
      
      <Routes>
        <Route path='/' element={ <Home></Home>}/>
        <Route path='/product' element={<Product></Product>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/SignOut' element={<SignOut></SignOut>}/>
      </Routes>
  
    <Fottar></Fottar>
    </div>
  );
}

export default App;
