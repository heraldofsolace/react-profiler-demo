import React, { forwardRef, useEffect } from 'react';
import './_dialog.scss';

const Dialog = forwardRef(({ children, onClose }, ref) => {
  // Close the modal using the backdrop
  const closeModal = (event) => {
    const dialog = ref.current;
    const rect = dialog.getBoundingClientRect();

    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialog?.close?.();
      onClose?.();
    }
  };

  useEffect(() => {
    ref.current && ref.current.addEventListener('click', closeModal);

    return () => {
      ref.current && ref.current.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <dialog ref={ref} className="dialog">
      <div className="dialog__body">{children}</div>
    </dialog>
  );
});

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  size: 'sm'
};

export default Dialog;
