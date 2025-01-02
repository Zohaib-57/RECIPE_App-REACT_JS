
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashbroad from "./pages/Dashbroad";
import PostViewer from 
'././components/PostViewer'
import Search from "././components/Search";
import Nav from "./Nav";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Products from "./pages/Products";

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="*" element={<PageNotFound />}/>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<Products/>}/> {/* Dynamic Routes*/}
    <Route path="/dashboard" element={<Dashbroad />}>
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />}/>
     </Route>
    <Route path="/postviewer" element={<PostViewer />}/>
    <Route path="/search" element={<Search />}/>

    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
