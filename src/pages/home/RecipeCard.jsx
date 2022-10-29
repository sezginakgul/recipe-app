import CardStyle, { Button, CardImg, Cards, CardTitle } from "./Home.styled";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <Cards>
        {data.map((item, index) => {
          const { recipe } = item;
          return (
            <CardStyle key={index}>
              <CardTitle>{recipe.label}</CardTitle>
              <div>
                <CardImg src={recipe.image} alt="" />
              </div>

              <Button
                id={index}
                onClick={(e) =>
                  navigate("/details", { state: data[e.target.id] })
                }
              >
                View More
              </Button>
            </CardStyle>
          );
        })}
      </Cards>
    </>
  );
};

export default RecipeCard;
