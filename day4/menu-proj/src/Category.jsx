import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Category(props) {
    return (
        <div>
            <h1>Category Page</h1>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/category/food">음식</Link> |{" "}
                <Link to="/category/clothes">옷</Link> |{" "}
                <Link to="/category/electronic">전자기기</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Category;