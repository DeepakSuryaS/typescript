import { type FC } from "react";
import CourseGoal from "./CourseGoal";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

interface CourseGoalListProps {
  goals: CourseGoal[];
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
