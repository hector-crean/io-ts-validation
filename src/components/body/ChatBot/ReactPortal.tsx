import React from 'react'
import { createPortal } from 'react-dom'

// assuming in your html file has a div with id 'modal-root';

const Modal: React.FC<{}> = ({ children }) => {
  // Emulate the class component's instance variable with a ref
  const el = React.useRef(document.createElement("div"));

  React.useEffect(() => {
    // We assume `modalRoot` exists with '!'
    const modalRoot = document.querySelector("#modal-root") as HTMLElement;
    modalRoot!.appendChild(el.current);
    return () => void modalRoot!.removeChild(el.current);
  }, []);

  // Instead of `el`, the container is the `ref.current`
  return createPortal(children, el.current);
};

export default Modal; 
