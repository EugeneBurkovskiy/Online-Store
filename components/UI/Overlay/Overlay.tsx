import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: ReactNode;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Overlay = ({ children, show, setShow }: IProps) => {
  const handleShow: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return show
    ? createPortal(
        <div
          className="fixed w-full h-full top-0 left-0 bg-overlay z-50 flex justify-center items-center"
          onMouseDown={handleShow}
        >
          {children}
        </div>,
        document.getElementById('root-overlay') as HTMLElement,
      )
    : null;
};

export { Overlay };
