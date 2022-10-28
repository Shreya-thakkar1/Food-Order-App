import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <Input
          input={{
            label: "Amount",
            type: "number",
            id: "amount_" + props.id,
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>

      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
