import React from "react";
import { useLocation } from "react-router-dom";
import DetailStyle, {
  DetailImg,
  NutrientsDiv,
  IngredientsDiv,
} from "./Details.styled";
import Navbar from "../../components/navbar/Navbar";

const Details = ({ detailData }) => {
  const { state: food } = useLocation();
  //   console.log("state", food);
  // console.log("Detailsdata", detailData);
  const { digest, calories, totalWeight, image, ingredients } = food.recipe;
  return (
    <>
      <Navbar />
      <DetailStyle>
        <NutrientsDiv>
          <ul>
            <li>Nutrients</li>
            <li>
              Protein: {Math.ceil(digest[2].total)}
              {digest[2].unit}
            </li>
            <li>
              Calcium: {digest[5].daily.toFixed(1)}
              {digest[5].unit}
            </li>
            <li>
              Carbs: {digest[1].total.toFixed()}
              {digest[1].unit}
            </li>
            <li>
              Cholesterol: {digest[3].total.toFixed()} {digest[3].unit}
            </li>
            <li>
              Potassium: {digest[7].total.toFixed()} {digest[7].unit}{" "}
            </li>
            <li>{totalWeight}</li>
            <li>Calories: {Math.ceil(calories)}</li>
            <li>Fat: {Math.ceil(digest[0].total)}</li>
          </ul>
        </NutrientsDiv>
        <div>
          <DetailImg src={image} alt="img" />
        </div>
        <IngredientsDiv>
          <ol>
            {ingredients.map((item, index) => (
              <li key={index}>{item.text} </li>
            ))}
          </ol>
        </IngredientsDiv>
      </DetailStyle>
    </>
  );
};

export default Details;
