import React, { useEffect, useState } from 'react';

function MyUseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCaculation] = useState(0);

    useEffect(() => {
        setCaculation(() => count * 2);
    }, [count])

    return (
        <div>
            <p>카운트 : {count}</p>
            <button
                onClick={() => setCount((c) => c + 1)}>
                +</button>
            <p>계산값 : {calculation}</p>
        </div>
    );
}

export default MyUseEffect;