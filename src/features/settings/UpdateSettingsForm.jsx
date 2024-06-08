
import { useTranslation } from 'react-i18next';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

import { useSettings } from './useSettings';
import { useUpdateSettings } from './useUpdateSettings';

function UpdateSettingsForm() {
  const { t } = useTranslation();
  const { isUpdating, updateSetting } = useUpdateSettings();
  const { isLoading,
    settings: {
    minBookingLength,
    maxBookingLength,
    maxGeustsPerBooking,
    breakFastPrice,
    }={},
  } = useSettings();



  if (isLoading) return <Spinner />

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label={t('Minimum nights/booking')}>
        <Input
          type='number'
          id='min-nights' 
          defaultValue={minBookingLength}
          disabled={isUpdating}
          aria-hidden="true"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label={t('Maximum nights/booking')}>
        <Input
          type='number'
          id='max-nights'
          disabled={isUpdating}
          aria-hidden="true"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label={t('Maximum guests/booking')}>
        <Input
          type='number'
          id='max-guests'
          disabled={isUpdating}
          aria-hidden="true"
          defaultValue={maxGeustsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGeustsPerBooking")}
        />
      </FormRow>
      <FormRow label={t('Breakfast price')}>
        <Input
          type='number'
          id='breakfast-price'
          disabled={isUpdating}
          aria-hidden="true"
          defaultValue={breakFastPrice}
          onBlur={(e) => handleUpdate(e, "breakFastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
