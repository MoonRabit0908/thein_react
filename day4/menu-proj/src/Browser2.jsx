import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import CarProducts from './CarProducts';
import BikeProducts from './BikeProducts';
import Contact from './Contact';

function Browser2(props) {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/products">Products</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />}>
                    <Route path="car" element={<CarProducts />} />
                    <Route path="bike" element={<BikeProducts />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Browser2;