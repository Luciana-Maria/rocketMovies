import { Routes, Route } from 'react-router-dom';
/*importar as páginas  */
import {Create} from '../pages/Create';
import {Home} from '../pages/Home';
import {Profile} from '../pages/Profile';
import {Movie} from '../pages/Movie';
/*renderizar */
export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/movie" element={<Movie/>} />
      
    </Routes>
  );
}