import { useRef, useImperativeHandle, forwardRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  // Expose open/close methods
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return (
    <dialog
      ref={dialogRef}
      className="
        fixed inset-0 z-50 m-auto p-0
        bg-transparent
      "
    >
      <div
        className="
          bg-white rounded-2xl shadow-2xl p-6 relative
          w-[90%] sm:w-full max-w-sm sm:max-w-md md:max-w-lg
          max-h-[90vh] overflow-y-auto
        "
      >
        {/* <button
          onClick={() => dialogRef.current?.close()}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
        >
          &times;
        </button> */}
        {children}
      </div>
    </dialog>
  );
});

// style the backdrop directly
const style = document.createElement("style");
style.innerHTML = `
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;
document.head.appendChild(style);

export default Modal;
