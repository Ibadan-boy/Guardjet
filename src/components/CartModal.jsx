import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className="p-0 w-full max-w-xl rounded-2xl shadow-2xl bg-white backdrop:bg-black/50 
                 open:flex open:items-center open:justify-center"
    >
      {/* Modal content wrapper */}
      <div className="p-6 w-full">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

        {/* Cart in modal */}
        <div className="max-h-[60vh] overflow-y-auto">
          <Cart />
        </div>

        {/* Actions */}
        <form method="dialog" className="mt-6 flex justify-end space-x-3">
          {actions}
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
