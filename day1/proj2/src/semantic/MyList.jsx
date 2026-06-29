import React from 'react';

function MyList() {
    const data = [111111, 222222, 333333, 444444, 555555];

    return (
        <>
            <ul>
                {
                    data.map((number, index) =>
                        <li key={index}>Listitem {number}</li>
                    )
                }
            </ul>
        </>
    );
}

export default MyList;