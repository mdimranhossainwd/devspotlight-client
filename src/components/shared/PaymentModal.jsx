import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckOutForm from "../form/CheckOutForm";
import Modal from "./Modal";
const stripePromise = loadStripe(import.meta.env.VITE_DEVSPOTLIGHT_PK_KEY);

const PaymentModal = ({ isOpen, setIsOpen, amount }) => {
  const price = 10;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Subscribtions Payment Now"
      >
        <p className="mt-3">
          You're one step away from exploring exclusive content and features.
          Complete your subscription to join our growing community of
          developers!
        </p>

        <Elements stripe={stripePromise}>
          <CheckOutForm price={amount} />
        </Elements>
      </Modal>
    </div>
  );
};

export default PaymentModal;
