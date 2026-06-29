import React from 'react';

//brand, model, color
function Car2(props) {
    return (
        <div>
            <h2 style={{
                backgroundColor: props.color,
                color: props.color === "yellow" ? "black" : "white"
            }}>나는 {props.year}년도에 출고됨.
                휠이 -{props.wheel}-
                {props.brand} 브랜드의 {props.color} 색상인
                {props.model}이야</h2>
        </div>
    );
}

export default Car2;