import React, { useState } from 'react';

function Component1(props) {
    const [user, setUser] = useState("Linus");

    return (
        <div>
            <h1>Component 111</h1>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </div>
    );
}

function Component2({ user }) {
    return (
        <div>
            <h1>Component 222</h1>
            <h1>{`Hello ${user}!`}</h1>
            <Component3 user={user} />
        </div>
    );
}

function Component3({ user }) {
    return (
        <div>
            <h1>Component 333</h1>
            <h1>{`Hello ${user}!`}</h1>
        </div>
    );
}

export default Component1;