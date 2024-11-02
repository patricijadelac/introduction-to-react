import { observer } from 'mobx-react';
import React from 'react';
import store from '../store';
import PokemonRow from './PokemonRow';

const PokemonTable = () => (
  <table width="100%">
    <tbody>
      {/* Refactor: Shift the filtering logic from the UI component to the store for better separation of concerns and improved maintainability */}
      {store.filteredPokemon.slice(0, 20).map((pokemon) => (
        <PokemonRow
          pokemon={pokemon}
          onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
          key={pokemon.id}
        />
      ))}
    </tbody>
  </table>
);

export default observer(PokemonTable);
