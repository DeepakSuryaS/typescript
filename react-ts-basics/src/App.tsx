import Header from "./components/Header";
import CourseGoal from "./components/CourseGoal";
import goalImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>From the ground up</p>
      </CourseGoal>
    </main>
  );
}
