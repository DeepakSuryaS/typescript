import { useState } from "react";
import Header from "./components/Header";
import CourseGoal from "./components/CourseGoal";
import goalImg from "./assets/goals.jpg";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "From the ground up!",
      };

      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <ul>
        {goals.map(({ title, description, id }) => (
          <li>
            <CourseGoal title={title} key={id}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
