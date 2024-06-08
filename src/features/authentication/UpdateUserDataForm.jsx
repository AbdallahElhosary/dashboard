import { useState } from "react";
import { useUser } from "./useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";
import { useTranslation } from "react-i18next";

function UpdateUserDataForm() {
  // We don't need the loading state
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { t } = useTranslation()


  const [fullName, setFullName] = useState(currentFullName);
  const [avater, setAvater] = useState(null);

  const { updatedUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updatedUser(
      { fullName, avater },
      {
        onSuccess: () => {
          setAvater(null);
          // Reseting value
          // e.target.reset();
        },
      }
    );
  }




  function handleCancel(e) {
    // We don't even need preventDefault because this button was designed to reset the form (remember, it has the HTML attribute 'reset')
    setFullName(currentFullName);
    setAvater(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t('Email address')}>
        <Input value={email} disabled alt="email-address"/>
      </FormRow>

      <FormRow label={t('Full name')}>
        <Input
          type='text'
          value={fullName}
          alt="text"
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          aria-hidden="true"
          id='fullName'
        />
      </FormRow>
      
      <FormRow label={t("Avater image")}>
        <FileInput
          id="avater"
          accept="image/*"
          type="file"
          title="Choose an image"
          onChange={(e) => setAvater(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>


      <FormRow>
        <Button onClick={handleCancel} type='reset' variation='secondary'>
          {t("Cancel")}
        </Button>
        <Button onClick={handleSubmit}>{t("Update account")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
