import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51TAZs22KlYlO68EqUOp0A6bn8a99bt7T1TG797pDWMfQnTmLZKVldHKoztcH3iVel5I1amWE5BVqEEv0cfGjVoMD00CCL1Vuox',
  );
  try {
    // 1) Get checkout session from API
    const res = await axios.get(`/api/v1/bookings/checkout-session/${tourId}`);

    const session = res.data.session;

    // 2) Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      showAlert('error', result.error.message);
    }
  } catch (err) {
    // Defensive: handle cases where err.response may not exist
    const message = err.response?.data?.message || 'Something went wrong!';
    showAlert('error', message);
  }
};
