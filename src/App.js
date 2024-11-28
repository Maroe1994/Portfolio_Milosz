
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Landingpage } from './components/Landingpage';
function App() {
  return (
    <BrowserRouter basename='Portfolio_Milosz'>
    <Routes>
    <Route path="/" element={<Landingpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
  
export default App;
