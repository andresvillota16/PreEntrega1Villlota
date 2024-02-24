import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'



function App(){
  return(
    <>
    <Navbar/>
    <ItemListContainer greeting="Tienda Trajes De Baño"/>
    </>
  )
}
export default App

