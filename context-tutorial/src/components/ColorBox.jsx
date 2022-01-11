import ColorContext from '../contexts/color';
import React, { useContext } from 'react';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '128px',
                    height: '128px',
                    background: state.color,
                }}
            />
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
