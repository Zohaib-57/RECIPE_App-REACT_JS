
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashbroad from "./pages/Dashbroad";
import PostViewer from 
'././components/PostViewer'
import Search from "././components/Search";
import Nav from "./Nav";
import PageNotFound from "./pages/PageNotFound";

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="*" element={<PageNotFound />}/>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashbroad />} />
    <Route path="/postviewer" element={<PostViewer />}/>
    <Route path="/search" element={<Search />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
