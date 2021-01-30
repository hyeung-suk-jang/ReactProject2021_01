import { useState } from "react";
import { debounce } from "lodash";

const useModal = (initState) => {
  const [open, setOpen] = useState(initState);

  const openModal = debounce(() => {
    setOpen(true);
  }, 500);

  const closeModal = () => {
    setOpen(false);
  };

  return [open, openModal, closeModal];
};

export default useModal;
