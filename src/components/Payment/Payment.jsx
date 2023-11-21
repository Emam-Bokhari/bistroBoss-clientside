import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div className="my-10 p-4" >
            <SectionTitle heading="Payment" subHeading="Please Payment" />

            <Elements stripe={stripePromise} >
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;