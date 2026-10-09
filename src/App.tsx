import Person from "./Person";

const App = () => {
  // Type Annotation (or Explicit Typing)
  let name: string = "Sourav";
  let age: number = 30;
  let isMarried: boolean = false;
  let nums: number[] = [1, 2, 3, 4, 5];

  return <Person name={name} age={age} isMarried={isMarried} />;
};

export default App;
