import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import "./CheckoutForm.css";
const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  useEffect(() => {
    if (price) {
      getClientSecret(price);
    }
  }, [price]);

  const getClientSecret = async (price) => {
    try {
      const { data } = await axios.post("/create-payment-intent", { price });
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email,
        name: user?.displayName,
      },
    });
    if (error) {
      console.log("Payment Error", error);
    } else {
      console.log(paymentMethod);
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      console.log("confirmErr", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          email: user?.email,
          name: user?.displayName,
          status: "verified",
          transId: paymentIntent.id,
        };
        try {
          const { data } = await axios.post("/payment", paymentInfo);
          console.log(data);
          toast.success("Payment Successfully !");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-10 mt-5 items-center justify-center">
      <form onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ed56f] focus-visible:ring-offset-2"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
