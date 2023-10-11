
import './App.css';
import { BlogHome } from './Components/BlogHome'
import { Createblog } from './Components/Createblog'
import { ViewDetail } from "./Components/ViewDetail";
import { useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const more = useSelector((state)=> state.Blog)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BlogHome />}></Route>
        <Route path='/createBlog' element={<Createblog />}></Route>
        <Route path='/view' element={< ViewDetail blog={more}/>}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;
