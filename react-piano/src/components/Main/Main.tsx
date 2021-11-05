import Keyboard from "../Keyboard";
import NoAudioMessage from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

const Main = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};

export default Main;
