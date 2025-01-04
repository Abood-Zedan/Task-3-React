import React from 'react'
import Navbar from './assets/component/navbar/Navbar'
import Footer from './assets/component/footer/Footer'
import Header from './assets/component/header/Header'
import { Route, Routes } from 'react-router-dom'
import Category from './assets/component/category/Category'
import Create from './assets/component/create/Create'
import ProductsCategory from './assets/component/products_Category/productsCategory'
import Products from './assets/component/products/Products'
import ProductDetails from './assets/component/productDetalis/ProductDetails'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/category/products/:name' element={<ProductsCategory />}></Route>
        <Route path='/products/:name' element={<ProductsCategory />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/products/product/:id' element={<ProductDetails />}></Route>
        <Route path='/products/:name/product/:id' element={<ProductDetails />}></Route>
        <Route path='/category/products/:name/product/:id' element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
