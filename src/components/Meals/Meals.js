import AvailableMeals from "./AvailableMeals";
import Classes from "./Meals.module.css";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <AvailableMeals />
      <MealsSummary />
    </Fragment>
  );
};
export default Meals;
