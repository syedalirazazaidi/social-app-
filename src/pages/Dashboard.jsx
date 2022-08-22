import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../components/Spinner";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItems";

const Dashboard = () => {
  const [currentId, setCurrentId] = useState(0);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading } = useSelector((state) => state.goals);
  const { goals } = useSelector((state) => state.goals);

  // const goals = useSelector((state) =>
  //   currentId ? state.goals.goals.find((g) => g._id === currentId) : null
  // );

  // const goals = useSelector((state) =>
  //   currentId ? state.goals.goals.find((g) => g._id === currentId) : null
  // );
  // console.log(newgoal, "newgoalnewgoal");
  // useEffect(() => {
  //   if (newgoal) setText(newgoal.text);
  // }, [newgoal, setText]);

  useEffect(() => {
    if (isError) {
      console.log(message, "MESSAGE");
    }
    if (!user) {
      navigate("/login");
    }

    // if (goals) {
    //   setText(text);
    // }

    // if (memory) setPostData(memory);
    // if (goals) setText(goals);

    dispatch(getGoals());
    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, message, isError, dispatch, currentId]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm
        currentId={currentId}
        setCurrentId={setCurrentId}
        text={text}
        setText={setText}
        goal={goals}
      />
      <section className="content">
        {goals && goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem
                key={goal._id}
                goal={goal}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>{" "}
    </>
  );
};

export default Dashboard;
