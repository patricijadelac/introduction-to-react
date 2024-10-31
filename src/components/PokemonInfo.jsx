import React, { useContext } from 'react';

import PokemonContext from '../PokemonContext';

const PokemonInfo = () => {
  const { selectedPokemon } = useContext(PokemonContext);

  return selectedPokemon ? (
    <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

// PropTypes are primarily used to validate props passed directly to a component.
// Since `selectedPokemon` is now provided through context rather than as a direct prop, PropTypes in `PokemonInfo` are not effective for validation in this case.
// Validation for context values like `selectedPokemon` should be handled at the context provider level if needed.

// PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
