// import Average from './Average';
import Info from './Info';
import React, { useState } from 'react';
const App = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(!visible);
    };
    return (
        <div>
            <button onClick={onClick}>Visible</button>
            {visible && <Info />}
        </div>
    );
};

export default App;
