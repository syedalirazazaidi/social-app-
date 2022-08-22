import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGoal, updateGoal } from "../features/goals/goalSlice";

function GoalForm({ currentId, setCurrentId, setText, text, goal }) {
  const dispatch = useDispatch();
  // const goals = useSelector((state) =>
  // );
  const newgoal = currentId ? goal.find((g) => g._id === currentId) : null;
  console.log(newgoal, "newgoalnewgoal");
  useEffect(() => {
    if (newgoal) setText(newgoal.text);
  }, [newgoal, setText]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createGoal({ text }));
    } else {
      dispatch(updateGoal({ _id: currentId, text }));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(0);
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
