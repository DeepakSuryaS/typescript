import { type ReactNode, createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextType = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextType | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const ctx: TimersContextType = {
    timers: [],
    isRunning: false,
    addTimer: (timerData) => {
      // ctx.timers.push(timerData);
    },
    startTimers: () => {
      // ctx.isRunning = true;
    },
    stopTimers: () => {
      // ctx.isRunning = false;
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
