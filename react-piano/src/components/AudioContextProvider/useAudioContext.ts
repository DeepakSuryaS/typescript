import { useRef } from "react";
import { Optional } from "../../domain/types";
import { accessContext } from "../../domain/audio";

function useAudioContext(): Optional<AudioContextType> {
  const AudioCtx = useRef(accessContext());
  return AudioCtx.current;
}

export default useAudioContext;
