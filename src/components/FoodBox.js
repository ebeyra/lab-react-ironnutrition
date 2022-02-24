import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = (props) => {
  let totalCalories = props.food.calories * props.food.servings;

  const deleteFood = (foodToRemove) => {
    let remainingFood = props.foodsArr.filter((foodItem) => {
      return foodItem.name !== foodToRemove;
    });
    props.setFoodsArr(remainingFood);
  };

  return (
    <div>
      <Col>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>Calories: {props.food.calories}</p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {totalCalories}</b> kcal
          </p>
          <Button onClick={() => deleteFood(props.food.name)} type="primary">
            {' '}
            Delete{' '}
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default FoodBox;
