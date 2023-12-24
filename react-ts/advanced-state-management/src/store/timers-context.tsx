import { type ReactNode, createContext, useContext } from "react";

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

type TimersContextProviderProps = {
  children: ReactNode;
};

const TimersContext = createContext<TimersContextType | null>(null);

export const useTimersContext = () => {
  const ctx = useContext(TimersContext);

  if (ctx === null) {
    throw new Error("TimersContext is null - this should not be the case!");
  }

  return ctx;
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
