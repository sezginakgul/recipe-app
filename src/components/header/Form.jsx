import React, { useState, useEffect } from "react";
import RecipeCard from "../../pages/home/RecipeCard";
import axios from "axios";

import { Input, Button, Options, Select, FormDiv } from "./Header.styled";

const Form = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [data, setData] = useState([]);
  console.log("query:", query);
  console.log("meal:", meal);

  const getFoods = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=29e1b965&app_key=d36f57f6f46ee8cfaffc07daa4a40dad&mealType=${meal}`;
    const { data } = await axios(url);
    setData(data.hits);
  };
  console.log("data", data);
  // getFoods();

  const search = () => {
    if (query && meal) {
      return getFoods();
    } else {
      alert("Please Enter a keys.");
    }
  };

  return (
    <FormDiv>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={search}>SEARCH</Button>
      <Select
        name="aa"
        id=""
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
      >
        <Options value="" selected disabled>
          Select
        </Options>
        <Options value="breakfast">Breakfast</Options>
        <Options value="lunch">Lunch</Options>
        <Options value="dinner">Dinner</Options>
        <Options value="snack">Snack</Options>
        <Options value="teatime">Teatime</Options>
      </Select>
      {data && <RecipeCard data={data} />}
    </FormDiv>
  );
};

export default Form;
