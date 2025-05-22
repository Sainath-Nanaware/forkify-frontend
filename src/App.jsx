import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeCard from "./components/RecipeCard"


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipeCards" element={<RecipeCard/>}/>
        </Routes>
        
    </>
  )
}

export default App
