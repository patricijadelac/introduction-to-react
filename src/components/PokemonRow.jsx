import Button from '@mui/material/Button';
import React from 'react';
import PokemonType from '../PokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button variant="contained" onClick={() => onClick(pokemon)}>
        More information
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
