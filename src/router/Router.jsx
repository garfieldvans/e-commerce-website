import React, { useEffect, useState } from 'react'
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
import Products from '../components/screen/exploreScreen/Products/Products';

const Router = () => {

  const [query, setQuery] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const theQuery = (query) => {
    setQuery(query);
  }
  
  // const load = useEffect(() => {
  //   const lastSearchQuery = localStorage.getItem('lastSearchQuery');
  //   if (lastSearchQuery) {
  //     setSearchQuery(lastSearchQuery);
  //   }
  // }, []);

  return (
    <BrowserRouter>
    <div >
      <Sidebar/>
      <Navbar onSearch={handleSearch} query={theQuery} loads/>
            <Routes >
                <Route path='/'>
                  <Route index element={<ExploreScreen/>}/>
                <Route path='/products/find' element={<Products searchResults={searchResults} query={query} loads />}/>
                </Route>

                <Route path='/wishlist' element={<SavedScreen/>}/>
                <Route path='/cart' element={<CartScreen/>}/>
                <Route path='/history' element={<HistoryScreen/>}/>
                <Route path='/profile' element={<ProfileScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Router
