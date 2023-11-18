import { type FC, type PropsWithChildren, type ReactNode } from "react";

// the "type" keyword before the imported items serves as a decorator for the build tools
// it says that the imported items are just type definitions and that the browser won't be able to do anything with it
// so it can be safely ignored while bundling

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

// below is another way
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  const handleDelete = () => onDelete(id);

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
