import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import PopularRecipeHome from '../components/PopularRecipeHome'
import ChefCard from '../components/layouts/ChefCard'
import Footer from '../components/layouts/Footer'

function Home() {
  localStorage.clear()
  return (
    <>
        <Header/>
        <Main/>
        <PopularRecipeHome/>
        <ChefCard/>
        <Footer/>
    </>
  )
}

export default Home
