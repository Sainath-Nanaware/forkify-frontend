import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeCard from "./components/RecipeCard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { ToastContainer } from "react-toastify"
import ProtectedRoute from "./routes/ProtectedRoute"
import AdminDashboard from "./pages/admin/AdminDashboard"
import Unauthorized from "./pages/unauthorized"
import UserList from "./components/cards/UserList"
import UpdateUserRole from "./components/popups/UpdateUserRole"
import ExploreRecipes from "./pages/ExploreRecipes"
import ChefDashboard from "./pages/chef/ChefDashboard"
import RecipeDetails from "./pages/recipe/RecipeDetails"
import CreateRecipe from "./pages/chef/CreateRecipe"
import PreviewRecipe from "./pages/recipe/PreviewRecipe"



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/exploreRecipes" element={<ExploreRecipes/>}/>
          {/* Admin routes */}
           <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
           </Route>
          {/* Chef routes */}
          <Route element={<ProtectedRoute allowedRoles={['chef']} />}>
           <Route path="/chef/dashboard" element={<ChefDashboard/>} />
           <Route path="/recipeDetails/:id" element={<RecipeDetails/>} />
           <Route path="/create-recipe" element={<CreateRecipe/>} />
           <Route path="/previewRecipe" element={<PreviewRecipe/>} />
          </Route>
          <Route path="/recipeCards" element={<RecipeCard/>}/>
          <Route path="/userListCards" element={<UserList/>}/>
          <Route path="/rolePopup" element={<UpdateUserRole/>}/>
          <Route path="/unauthorized" element={<Unauthorized/>}/>
            {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

        </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
