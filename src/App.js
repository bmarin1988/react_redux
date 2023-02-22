import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/detail';
import InitialBoard from './pages/initialboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<InitialBoard/>}/>
            <Route exact path='/detail' element = {<Detail/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
