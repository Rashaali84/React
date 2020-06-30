import React, { createContext, useContext, useState } from 'react';

// Exercise 1: Passing props
// TODO: Make all the buttons black
const BackContext = createContext('black');
const Ex1 = () => {

    // Pass the background color through to the components
    return (
        <div>
            <BackContext.Provider value='black'>
                <Toolbar />
                <ShoppingCart />
            </BackContext.Provider>
        </div>
    )
};

const Toolbar = () => {

    return (
        <div >
            <MyButton />
        </div>
    )
};

const ShoppingCart = () => {

    return (

        <div>
            <MyButton />
        </div>
    )
};

const MyButton = ({ backgroundColor }) => {

    const backgroundCol = useContext(BackContext);
    return <button style={{ backgroundColor: backgroundCol }} >Click</button>


};

// Exercise 2: Context
// TODO: Make all the buttons black

const ColorContext = createContext('pink');

const Ex2 = () => {
    return (
        <div>
            {/* Set a property value on the provider with as a value "black" */}
            <ColorContext.Provider value='black'>
                <OtherToolbar />
                <OtherShoppingCart />
            </ColorContext.Provider>
        </div>
    )
};

const OtherToolbar = () => {
    return (
        <div>
            <MyOtherButton />
        </div>
    )
};

const OtherShoppingCart = () => {
    return (
        <div>
            <MyOtherButton />
        </div>
    )
};

const MyOtherButton = () => {
    const backgroundColor = useContext(ColorContext);
    return <button style={{ backgroundColor: backgroundColor }}>Click</button>
};

// Exercise 3: Using state and context
// TODO: Use state as the context value

const Ex3 = () => {

    const [color, setColor] = useState('pink');

    return (
        <div>
            {/* Set a property value on the provider with as a value color */}
            <ColorContext.Provider value={color}>
                <button onClick={() => setColor('pink')}>Pink</button>
                <button onClick={() => setColor('blue')}>Blue</button>
                <button onClick={() => setColor('black')}>Black</button>
                <button onClick={() => setColor('yellow')}>Yellow</button>
                <OtherToolbar />
                <OtherShoppingCart />
            </ColorContext.Provider>

        </div>
    )
};

// Exercise 4: Fix the bug
// TODO: Fix the bug

const Ex4 = () => {

    const [color, setColor] = useState('pink');

    return (
        <div>
            {/* Set a property value on the provider with as a value color */}
            <ColorContext.Provider value={color}>

                <button onClick={() => setColor('pink')}>Pink</button>
                <button onClick={() => setColor('blue')}>Blue</button>
                <button onClick={() => setColor('black')}>Black</button>
                <button onClick={() => setColor('yellow')}>Yellow</button>
                <OtherToolbar />
                <OtherShoppingCart />
            </ColorContext.Provider>
        </div>
    )
};

// Exercise 5: a more complex context
// TODO: make sure the context works

const ThemeContext = createContext({
    color: 'white',
    backgroundColor: 'black'
});

const Ex5 = () => {

    {/* Set an appropriate theme */ }
    let colortheme = useContext(ThemeContext);
    colortheme.backgroundColor = 'pink';
    colortheme.color = 'blue';


    return (
        <div>
            <ColorContext.Provider value={colortheme}>
                <ThemedToolbar />
                <ThemedShoppingCart />
            </ColorContext.Provider>

        </div>
    )
};

const ThemedToolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedShoppingCart = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);

    return <button style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Click</button>
};


export { Ex1, Ex2, Ex3, Ex4, Ex5 };