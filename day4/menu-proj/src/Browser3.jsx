import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import CarProducts from './CarProducts';
import BikeProducts from './BikeProducts';
import Contact from './Contact';
import Category from './Category';
import ServiceCenter from './ServiceCenter';
import Food from './Food';
import Clothes from './Clothes';
import Electronic from './Electronic';
import SmartPhone from './SmartPhone'
import Camera from './Camera'
import Computer from './Computer'

function Browser3(props) {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/category">Category</Link> |{" "}
                <Link to="/service-center">Sevice Center</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />}>
                    <Route path="food" element={<Food />} />
                    <Route path="clothes" element={<Clothes />} />
                    <Route path="electronic" element={<Electronic />} >
                        <Route path="smp" element={<SmartPhone />} />
                        <Route path="cmp" element={<Computer />} />
                        <Route path="cmr" element={<Camera />} />
                    </Route>
                </Route>
                <Route path="/service-center" element={<ServiceCenter />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Browser3;