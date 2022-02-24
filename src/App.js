import React from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = React.useState(foods);

  const foodList = foodsArr.map((items) => {
    return (
      <div>
        <FoodBox food={items} foodsArr={foodsArr} setFoodsArr={setFoodsArr} />
      </div>
    );
  });

  return (
    <div className="App">
      <div style={{ width: '400px' }}>
        <Search foodsArr={foodsArr} setFoodsArr={setFoodsArr} />
      </div>

      <div style={{ width: '400px' }}>
        <AddFoodForm foodsArr={foodsArr} setFoodsArr={setFoodsArr} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {foodList}
      </div>
    </div>
  );
}

export default App;
