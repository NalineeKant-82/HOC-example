import HOC from "../HOC";
const AddButton = (props) => {
  const { increament, num } = props;

  return <button onClick={increament}>Add {num} click</button>;
};
export default HOC(AddButton, 2);
