import { ChangeEvent } from "react";
import { InstrumentName } from "soundfont-player";
import { useInstrument } from "../../state/Instrument/Context";
import { options } from "./options";
import styles from "./InstrumentSelector.module.css";

const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);

  return (
    <select
      className={styles.instrument}
      onChange={updateValue}
      value={instrument}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default InstrumentSelector;
