import { useState } from "react";

const useOnMouse = () => {
  const [tabOpen, setTabOpen] = useState(false);

  const onMouseHandler = (isOpen) => {
    setTabOpen(isOpen);
  };

  return [tabOpen, onMouseHandler];
};

export default useOnMouse;
