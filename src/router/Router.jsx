import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ExploreScreen from '../components/screen/exploreScreen/ExploreScreen';
import SavedScreen from '../components/screen/savedScreen/SavedScreen';
import CartScreen from '../components/screen/cartScreen/CartScreen';
import HistoryScreen from '../components/screen/history/HistoryScreen';
import ProfileScreen from '../components/screen/profile/ProfileScreen';

const Router = () => {
  return (
    <BrowserRouter>
    <div >
      <Sidebar/>
      <Navbar/>
            <Routes >
                <Route path='/' element={<ExploreScreen/>}/>
                <Route path='/saved' element={<SavedScreen/>}/>
                <Route path='/cart' element={<CartScreen/>}/>
                <Route path='/history' element={<HistoryScreen/>}/>
                <Route path='/profile' element={<ProfileScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Router
