import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeCard from "./components/RecipeCard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { ToastContainer } from "react-toastify"


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/recipeCards" element={<RecipeCard/>}/>
        </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
