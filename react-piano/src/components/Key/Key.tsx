import { FunctionComponent, ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
};

const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;

  return (
    <button
      className={clsx(styles.key, styles[type])}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Key;
