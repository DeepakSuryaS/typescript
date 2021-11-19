import useAudioContext from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../adapters/Soundfont/useSoundfont";
import Keyboard from "./Keyboard";
import { useInstrument } from "../../state/Instrument/Context";
import { useEffect } from "react";
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProvider";

const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  // const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

  /* useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);

  return <Keyboard loading={loading} play={play} stop={stop} />; */

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};

export default KeyboardWithInstrument;
