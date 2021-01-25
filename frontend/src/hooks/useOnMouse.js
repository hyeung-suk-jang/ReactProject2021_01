import { useState } from "react";

const useOnMouse = (initState, initCategory) => {
  const [tabOpen, setTabOpen] = useState(initState);
  const [category, setCategory] = useState(initCategory);

  const onMouseHandler = (isOpen, categoryName) => {
    setTabOpen(isOpen);
    setCategory(categoryName);
  };

  return [{ open: tabOpen, category: category }, onMouseHandler];
};

export default useOnMouse;
