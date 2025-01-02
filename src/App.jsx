import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashbroad";  // Fixed typo (Dashbroad to Dashboard)
import PostViewer from "./components/PostViewer";  // Fixed import path
import Search from "./components/Search";
import Nav from "./Nav";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Products from "./pages/Products";
import PostDetails from "./pages/PostDetails";  // PostDetails component

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<PageNotFound />} />  {/* 404 Page */}
          <Route path="/" element={<Home />} />  {/* Home Page */}
          <Route path="/products/:id" element={<Products />} />  {/* Dynamic Route */}
          <Route path="/dashboard" element={<Dashboard />}>  {/* Nested Routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/postviewer" element={<PostViewer />} />  {/* Post Viewer */}
          <Route path="/search" element={<Search />} />  {/* Search Page */}
          <Route path="/postdetails/:id" element={<PostDetails />} />  {/* Dynamic Post Page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
