// --- Computed values ---
// Computed values in MobX are derived values that automatically update when their underlying observable data changes
// They are used to compute values based on other observables, allowing for efficient and reactive programming
// For more information on computed values and their usage, visit the MobX documentation: https://mobx.js.org/computeds.html

import { makeObservable, observable, computed } from 'mobx';

class Store {
  pokemon = [];
  filter = '';
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

fetch('/introduction-to-react/pokemon.json')
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
