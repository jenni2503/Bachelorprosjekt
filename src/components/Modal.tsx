type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode; //anything between the modal component, render that children
};

const Modal = ({ open, onClose, children }: Props) => {
  return (
    open && (
      // Black overlay behind the white content box/modal that covers the whole screen
      <div className="w-full h-full fixed top-0 left-0 bg-black/40 overflow-y-auto">
        {/* make the white content box/modal come to the middle of the black overlay */}
        <div className="w-full flex justify-center mt-10">
          {/* info content box */}
          <div className="bg-white/100 rounded-lg p-6 w-[300px] md:w-[600px] relative">
            {/* close button */}
            <button
              className="absolute top-2 right-2 py-1 px-2 border
           border-neutral-200 rounded-md text-gray-400 bg-white
           hover:bg-gray-50 hover:text-gray-600"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
