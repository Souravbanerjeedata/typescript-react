import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

const Person = ({ name, age, isMarried }: Person) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  //   const [nums, setNums] = useState<number[] | null>(null);  union type

  function clickHandler() {
    setShowInfo(!showInfo);
  }
  return (
    <div>
      <button onClick={clickHandler}>
        {!showInfo ? "Show Info" : "Hide Info"}
      </button>
      {showInfo && (
        <>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>This person is {isMarried ? "married" : "not married"}</p>
        </>
      )}
    </div>
  );
};

export default Person;
