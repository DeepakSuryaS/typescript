import { useState } from "react";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import CourseGoalList from "./components/CourseGoalList";
import goalImg from "./assets/goals.jpg";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
