import React from 'react';

function MyApp() {
    const result = 23434 * 0.345;
    const items = []

    for (let i = 0; i < 200; i++) {
        items.push(<NewsArticle value={'article'} key={i} />)
    }
    return (
        <section>
            <h1>The Example App</h1>
            <h1>My First React App</h1>

            {items}
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}
function App() {
    const result = 23434 * 0.345;

    return (
        <section>
            <h1>The Example App</h1>
            <h1>My First React App</h1>
            <NewsArticle />

            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}
function NewsArticle(props) {
    return (
        <article>
            <h1>props.value</h1>
        </article>
    )
}

export { MyApp, App };