import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalType } from "../App";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  return (
    <ul>
      {goals.map(({ title, description, id }) => (
        <li key={id}>
          <CourseGoal id={id} title={title} onDelete={onDelete}>
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
