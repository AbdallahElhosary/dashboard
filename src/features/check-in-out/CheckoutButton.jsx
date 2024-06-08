import Button from '../../ui/Button';
import  useCheckout  from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { isLoading, mutate: checkout } = useCheckout();

  return (
    <Button
      variation='primary'
      size='small'
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
      aria-hidden="true"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
