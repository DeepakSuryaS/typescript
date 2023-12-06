import { type FC, type ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningBoxProps {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;
// the above union is called discriminated union

// const InfoBox: FC<InfoBoxProps> = ({ mode, severity, children }) => {
// the above throws an error because severity is not always available.
// to tackle this, we'll accept props and destructure in different zones.
// Reason for diff zones:
// 1. After the if condition for "hint" we're returning something.
// So it means, whatever is after that condition will be executed only if that condition is false.
// So, destructuring "severity" after the condition will not throw an error because TS understands that at that zone that prop might be available.
// Because the only other option for mode is "warning" and WarningBoxProps has "severity".

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
