import ReactModal from "react-modal";

ReactModal.setAppElement("body");

export function Modal({ children, ...props }) {
  return (
    <ReactModal className="modal" overlayClassName="modal-overlay" {...props}>
      {children}
    </ReactModal>
  );
}

export function ModalTitle({ children, ...props }) {
  return (
    <div className="modal-title" {...props}>
      {children}
    </div>
  );
}

export function ModalBody({ children, ...props }) {
  return (
    <div className="modal-body" {...props}>
      {children}
    </div>
  );
}

export function ModalClose(props) {
  return (
    <button className="modal-close" {...props}>
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l14 14m0-14L1 15"
          stroke="#1A212F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
