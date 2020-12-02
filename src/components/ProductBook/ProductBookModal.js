import { useState } from "react";
import { Modal, ModalTitle, ModalClose, ModalBody } from "../Modal";
import Button from "../Button";
import ProductBookForm from "./ProductBookForm";

function ProductBookModal({ product }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenSuccess, setIsOpenSuccess] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setIsOpenSuccess(false);
  }

  return (
    <>
      <Button primary onClick={openModal}>
        Забронировать
      </Button>
      <Modal isOpen={modalIsOpen}>
        <ModalTitle>
          {!modalIsOpenSuccess ? "Забронировать номер" : "Спасибо за заявку!"}
        </ModalTitle>
        {modalIsOpenSuccess && (
          <p style={{ textAlign: "center" }}>
            Мы свяжемся с вами в ближайшее время
          </p>
        )}
        {modalIsOpenSuccess && (
          <div style={{ textAlign: "center" }}>
            <Button primary onClick={closeModal}>
              Ок
            </Button>
          </div>
        )}
        <ModalClose onClick={closeModal} />
        {!modalIsOpenSuccess && (
          <ModalBody>
            <ProductBookForm
              product={product}
              onSubmitted={() => {
                setIsOpenSuccess(true);
              }}
            />
          </ModalBody>
        )}
      </Modal>
    </>
  );
}

export default ProductBookModal;
