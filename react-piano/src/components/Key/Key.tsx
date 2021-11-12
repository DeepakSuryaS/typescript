import { FunctionComponent } from "react";
import { NoteType } from "../../domain/note";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};

export default Key;
