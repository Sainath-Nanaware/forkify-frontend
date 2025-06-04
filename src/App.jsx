import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeCard from "./components/RecipeCard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { ToastContainer } from "react-toastify"
import ProtectedRoute from "./routes/ProtectedRoute"
import AdminDashboard from "./pages/admin/AdminDashboard"
import Unauthorized from "./pages/unauthorized"



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          {/* Admin routes */}
           <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
           </Route>
          <Route path="/recipeCards" element={<RecipeCard/>}/>
          <Route path="/unauthorized" element={<Unauthorized/>}/>
        </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
