import Modal from "./Modal";

const PaymentModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Subscribtions Payment Now"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
          ratione exercitationem, voluptates odio obcaecati expedita,
          repellendus itaque magni omnis aliquid vero at nemo, voluptatibus a
          debitis necessitatibus deserunt ipsa!
        </p>
      </Modal>
    </div>
  );
};

export default PaymentModal;
