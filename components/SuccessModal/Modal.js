import React, {useState} from 'react';

const Modal = () => {
  

  const [closeModal, setCloseModal] = useState()

  handleClose = () => {
    setCloseModal(true)
  }

  if (!closeModal) {
    return (
      <div>
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          {/* modal */}
          <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            {/* modal header  */}
            <div className="border-b px-4 py-2 flex justify-between items-center">
              <h3 className="font-semibold text-lg">Success!</h3>
              <button className="text-black close-modal">X</button>
            </div>
            {/* module body */}
            <div className="p-3">
              You've successfully minted an NFT for your asset!
            </div>
            <div className="flex justify-between items-center w-100 border-t p-3">
              <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={handleClose}>Close</button>
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Modal;