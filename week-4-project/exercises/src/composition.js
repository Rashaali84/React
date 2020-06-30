import React, { createContext, useContext, useState } from 'react';

// Composition 1: The children props
// TODO: use the children prop in the correct location



const ColoredSection = ({ children }) => {
    // Move the children props to the correct location
    return (
        <div>
            <div style={{ backgroundColor: 'pink' }}>
                {children}
            </div>
            <div style={{ backgroundColor: 'yellow' }}>

            </div>

        </div>
    )
};
const Comp1 = () => {
    return (
        <section>
            <ColoredSection>
                <p>Foobar</p>
            </ColoredSection>
        </section>
    )
};
// Compostion 2: Adding functionality with composition
// TODO: change the order, make sure the buttons are first

const Comp2 = () => {
    return (
        <ul>

            <ListItem item={'foo'}>
                <button>Edit</button>
                <button>Delete</button>
            </ListItem>
            <ListItem item={'bar'}>
                <button>Edit</button>
                <button>Delete</button>
            </ListItem>
        </ul>
    );
};

const ListItem = ({ item, children }) => {
    return (
        <li>
            {children}
            {item}

        </li>
    )
};


export { Comp1, Comp2 };