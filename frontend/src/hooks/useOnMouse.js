import { useState } from "react";

const useOnMouse = () => {
  const [tabOpen, setTabOpen] = useState(false);
  const [category, setCategory] = useState();

  const onMouseHandler = (isOpen, categoryName) => {
    setTabOpen(isOpen);
    setCategory(categoryName);
  };

  return [{ open: tabOpen, category: category }, onMouseHandler];
};

export default useOnMouse;
