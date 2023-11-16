import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalType } from "../App";

interface CourseGoalListProps {
  goals: CourseGoalType[];
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map(({ title, description, id }) => (
        <li>
          <CourseGoal title={title} key={id}>
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
