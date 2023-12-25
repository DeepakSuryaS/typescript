import { type ReactNode, createContext, useContext, useReducer } from "react";

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

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

const TimersContext = createContext<TimersContextType | null>(null);

export const useTimersContext = () => {
  const ctx = useContext(TimersContext);

  if (ctx === null) {
    throw new Error("TimersContext is null - this should not be the case!");
  }

  return ctx;
};

const timersReducer = (state: TimersState, action: Action): TimersState => {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    case "START_TIMERS":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextType = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer: (timerData) => {
      // ctx.timers.push(timerData);
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers: () => {
      // ctx.isRunning = true;
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers: () => {
      // ctx.isRunning = false;
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
