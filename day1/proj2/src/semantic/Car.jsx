import React from 'react';

// prps.brand
function Car(props) {
    return (
        <div>
            <h1 className="rainbow-text">I am a {props.brand} Car!</h1>
        </div>
    );
}

export default Car;