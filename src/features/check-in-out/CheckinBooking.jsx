import { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/helpers';

import Spinner from '../../ui/Spinner';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Checkbox from '../../ui/Checkbox';

import BookingDataBox from '../../features/bookings/BookingDataBox';

import { useBooking } from '../../features/bookings/useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
// import { useCheckin } from './useCheckin';

import styled from 'styled-components';
import useCheckin from './useCheckin';
import { Toaster } from 'react-hot-toast';
import { useSettings } from '../settings/useSettings';
// import { box } from 'styles/styles';
// import { useSettings } from 'features/settings/useSettings';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useBooking();


  const {checkIn, isCheckingIn } = useCheckin();
  const moveBack = useMoveBack();
  const { isLoading: isLoadingSettings, settings } = useSettings();

  // Can't use as initial state, because booking will still be loading
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  // Return spinner While Loading
  if (isLoading || isLoadingSettings) return <Spinner />;


  // DEstructing the booking object
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    numNights,
  } = booking;

  const optionalBreakFast = settings.breakFastPrice * numGuests * numNights;


  function handleCheckin() {
    if (!confirmPaid) return

    if (addBreakfast) {
      checkIn({bookingId, breakfast: {
        hasBreakfast: true,
        extrasPrice: optionalBreakFast,
        totalPrice: totalPrice + optionalBreakFast
      },
      })
    }
    else {
      checkIn({bookingId , breakfast : {}})
    }
  }

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type='horizontal'>
        <Heading type='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {/* [Has BreakFast] */}
      <Box>
        <Checkbox
          checked={addBreakfast}
          onChange={() =>
          {
            setAddBreakfast((getBreakFast) => !getBreakFast)
            setConfirmPaid(false)
          }
          }
          if='breakfast'
        >
          Want to add breakfast for {formatCurrency(optionalBreakFast)}?
        </Checkbox>
      </Box>

      {/* [Confirm Paid] */}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid}
          if='confirm'
        >
          I confirmed that {guests.fullName} has paid the total amount of {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      

      <ButtonGroup>
        <Button
          onClick={handleCheckin}
          disabled={!confirmPaid || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      <Toaster />
    </>
  );
}

export default CheckinBooking;
