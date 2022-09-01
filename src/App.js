import './App.css';
import Them_pet from './components/Them_pet';
import Danh_sach_pet from "./components/Danh_sach_pet";
import Cap_nhat_pet from "./components/Cap_nhat_pet";
import Danh_sach_chua_ban from "./components/Danh_sach_chua_ban";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Trang_chu from './components/Trang_chu';
import Bieu_do from './components/Bieu_do';
function App() {
  return (
    <>
    <div className='main'>
      
    <h2>Pets</h2>
    <BrowserRouter className="main"> 
      <Routes>
        
        <Route path="/" element={<Trang_chu/>} />
        <Route path="/thempet" element={<Them_pet />} />
        <Route path="/danhsachpet" element={<Danh_sach_pet />} />
        <Route path="/capnhatpet" element={<Cap_nhat_pet />} />
        <Route path='/danhsachlocpet' element={<Danh_sach_chua_ban />}/>
        <Route path="/bieudo" element={<Bieu_do/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
    
  );
}
export default App;
