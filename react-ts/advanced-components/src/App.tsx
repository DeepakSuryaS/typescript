import { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form, { FormHandleType } from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandleType>(null);

  const handleSave = (data: unknown) => {
    // const extractedData = data as { name: string; age: string };
    // console.log("Extracted data:", extractedData);
    // customFormRef.current?.clear();

    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
    customFormRef.current?.clear();
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
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
