import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function MyUseContext(props) {
    const [user, setUser] = useState("Linus");
    return (
        <div>
            <UserContext.Provider value={user}>
                <h3>{`Hello ${user}!!!`}</h3>
                <Component2 />
            </UserContext.Provider>
        </div>
    );
}

function Component2() {
    return (<>
        <h3>컴포넌트 2</h3>
        <Component3 />
    </>);
}

function Component3() {
    const user = useContext(UserContext);
    return (<>
        <h3>컴포넌트 3</h3>
        <h3>{`Hello ${user}!@!`}</h3>
    </>);
}

export default MyUseContext;