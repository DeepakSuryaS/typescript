import { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  // return (
  //   <main>
  //     <Input id="name" label="Your name" type="text" />
  //     <Input id="age" label="Your age" type="number" />
  //   </main>
  // );

  // return (
  //   <main>
  //     <p>
  //       <Button el="button"> A button</Button>
  //     </p>
  //     <p>
  //       <Button el="anchor" href="#">
  //         A link
  //       </Button>
  //     </p>
  //   </main>
  // );

  return (
    <main>
      <Input type="text" ref={inputRef} />
    </main>
  );
}

export default App;
