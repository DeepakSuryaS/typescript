import { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
  };
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

  // return (
  //   <main>
  //     <Input type="text" ref={inputRef} />
  //   </main>
  // );

  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
