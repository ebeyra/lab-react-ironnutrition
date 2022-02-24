import React from 'react';
import foods from '../foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const Search = (props) => {
  const [nameParam, setNameParam] = React.useState('');

  let filteredFoods = (input) => {
    setNameParam(input);
    let searchResults = foods.filter((foodItem) => {
      return foodItem.name.includes(input);
    });
    props.setFoodsArr(searchResults);
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={nameParam}
        type="text"
        onChange={(e) => {
          filteredFoods(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
