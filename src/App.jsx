
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashbroad from "./pages/Dashbroad";
import PostViewer from 
'././components/PostViewer'
import Search from "././components/Search"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashbroad />} />
    <Route path="/postviewer" element={<PostViewer />}/>
    <Route path="/search" element={<Search />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
