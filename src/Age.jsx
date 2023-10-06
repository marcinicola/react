export function Age({ age }) {
  return <>{age > 18 && age < 65 && <p>Your age is {age}</p>}</>;
}
