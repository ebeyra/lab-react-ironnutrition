import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const AddFoodForm = (props) => {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [calories, setCalories] = React.useState('');
  const [servings, setServings] = React.useState('');

  const addFood = (e) => {
    e.preventDefault();
    let foodArrayCopy = [...props.foodsArr];
    foodArrayCopy.unshift({
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    });
    props.setFoodsArr(foodArrayCopy);
  };

  return (
    <div>
      <form onSubmit={addFood}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Calories</label>
        <Input
          value={calories}
          type="text"
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Servings</label>
        <Input
          value={servings}
          type="text"
          onChange={(e) => setServings(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
