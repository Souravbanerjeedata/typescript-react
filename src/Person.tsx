interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

const Person = ({ name, age, isMarried }: Person) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>This person is {isMarried ? "married" : "not married"}</p>
    </div>
  );
};

export default Person;
