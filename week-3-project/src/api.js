import React, { useEffect, useState } from "react";

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

class Pokedex extends React.Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        const fetchPokemons = () => {
            fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => { return response.json() })
                .then(json => {
                    this.setState({ pokemons: json.pokemon_entries })

                });

        };
        fetchPokemons();
    }

    render() {
        return (
            <div className={'pokedex'}>
                <h2>Pokedex</h2>
                {
                    this.state.pokemons.map(pokemon => <Pokemon key={pokemon.entry_number} {...pokemon} />)
                }
            </div>
        )
    }

}

class Pokemon extends React.Component {
    render() {
        return (
            <article>
                {this.props.pokemon_species.name}
            </article>
        )
    }
}

class InteractivePokedex extends React.Component {

    state = {
        pokemons: [],
        selectedPokemon: false,
        pokeFlv: []
    }

    onSelectHandler = (pokemon) => {
        const fetchPokemon = () => {
            fetch(pokemon.url)
                .then(response => { return response.json() }).then(
                    (data) => {
                        this.setState({
                            selectedPokemon: true,
                            pokeFlv: data.flavor_text_entries
                        })
                    });
        };
        fetchPokemon();
        /* Use the result of the fetchPokemon function */
        /* set the result using selectedPokemon, be sure to support the render below */
    };

    componentDidMount() {
        const fetchPokemons = () => {
            fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => { return response.json() })
                .then(json => {
                    this.setState({ pokemons: json.pokemon_entries })

                });

        };
        fetchPokemons();
    }

    render() {
        return (
            <div className={'pokedex'}>
                <h2>Interactive Pokedex</h2>
                {
                    this.state.selectedPokemon === false
                        ? (
                            this.state.pokemons.map(pokemon => <InterActivePokemon key={pokemon.entry_number} {...pokemon}
                                /* pass the onSelectHandler here a property */


                                onSelectHandler={this.onSelectHandler}

                            />)
                        )
                        : (
                            <DetailedPokemon  {...{ flavor_text_entries: this.state.pokeFlv }} />
                        )
                }
            </div>
        )
    }
}

class DetailedPokemon extends React.Component {
    render() {
        return (
            <article>
                {this.props.flavor_text_entries.map((entry, index) => <p key={index}>{entry.flavor_text}</p>)}
            </article>
        )
    }
}

class InterActivePokemon extends React.Component {

    onClick = () => {
        /* trigger the onSelectedHandler function with the pokemon_species */
        this.props.onSelectHandler(this.props.pokemon_species);
    };

    render() {
        return (
            <article>
                {/* Render the property here */
                    this.props.pokemon_species.name
                }
                <button onClick={this.onClick}>Learn more</button>
            </article>
        )
    }
}

export { Pokedex, InteractivePokedex };