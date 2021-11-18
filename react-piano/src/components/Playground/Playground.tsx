import { InstrumentContextProvider } from "../../state/Instrument/Provider";
import InstrumentSelector from "../InstrumentSelector/InstrumentSelector";
import KeyboardWithInstrument from "../Keyboard/WithInstrument";

const Playground = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};

export default Playground;
