import { MODAL_PROPS } from "@/interfaces/types";

const Modal = ({ setShowModal, photos }: MODAL_PROPS) => {
  console.log(photos);
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 left-[5%] top-10 bg-opacity-95 flex justify-center items-center w-[90%] h-[90vh] bg-black text-white rounded-xl "
    >
      <div className="flex flex-wrap justify-center items-center w-full gap-5 overflow-y-scroll no-scrollbar scroll-smooth max-h-[90vh] py-4">
        {photos.photos.map((photo, idx) => (
          <div
            key={idx}
            className="w-[200px] h-[200px] border-[1px] rounded-md border-gray-400 overflow-hidden p-1"
          >
            <img src={photo.url} alt={photo.title} className="rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
