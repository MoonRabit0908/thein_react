import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Electronic(props) {
    return (
        <div>
            <h1>Electronic Page</h1>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/category/electronic/smp">Smart Phone</Link> |{" "}
                <Link to="/category/electronic/cmp">Computer</Link> |{" "}
                <Link to="/category/electronic/cmr">Camera</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Electronic;