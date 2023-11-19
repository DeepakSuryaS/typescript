import { ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalType } from "../App";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map(({ title, description, id }) => (
          <li key={id}>
            <CourseGoal id={id} title={title} onDelete={onDelete}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
