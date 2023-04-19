import {useState} from "react";


const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};


function CustomHook() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}
export default CustomHook
