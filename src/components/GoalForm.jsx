import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal, updateGoal } from "../features/goals/goalSlice";

function GoalForm({ currentId, setCurrentId, setText, text }) {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createGoal({ text }));
    } else {
      dispatch(updateGoal({ currentId, text }));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(0);
    setText({
      text: "",
    });
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
