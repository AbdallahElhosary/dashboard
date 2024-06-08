import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import Spinner from '../../ui/Spinner';
// import ConfirmDelete from '../../ui/ConfirmDelete';

// import { useBooking } from '../../features/bookings/useBooking';
// import { useDeleteBooking } from './useDeleteBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
// import { useCheckout } from '../../features/check-in-out/useCheckout';
import ButtonText from '../../ui/ButtonText';
// import Empty from '../../ui/Empty';
import { useTranslation } from 'react-i18next';
import { useBooking } from './useBooking';
import BookingDataBox from './BookingDataBox';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking  , isLoading} = useBooking();

  console.log(booking)
  const { t } = useTranslation();
  // const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  // const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  // if (!booking) return <Empty resource='booking' />;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const { id: bookingId, status } = booking;

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading type='h1'>{t("Booking")} #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; {t("Back")}</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            {t("Check in")}
          </Button>
        )}

        {status === 'checked-in' && (
          {/* <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            {t("Check out")}
          </Button> */}
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">{t("Delete booking")}</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            {/* <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
            /> */}
          </Modal.Window>
        </Modal>

        <Button variation='secondary' onClick={moveBack}>
          {t("Back")}
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
