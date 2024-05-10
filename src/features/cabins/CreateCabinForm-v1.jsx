
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
// import { useEditCabin } from './useEditCabin';
import { Textarea } from '../../ui/Textarea';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { createCabins } from '../../services/apiCabins';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.
// Receives closeModal directly from Modal
function CreateCabinFormV1() {

  const { t } = useTranslation();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  // Function To Handle Submit
  const { isPending: isAdded, mutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("New Cabin Added Successfully")
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      })
      reset()
    },
    onError: err => toast.error(err.message)
  })

  function onSubmit(newCabin) {
    mutate({...newCabin , image : newCabin.image[0]})
  }

  function onError(errs) {
    console.log(errs)
  }

  

  
  return (
    <Form type='modal' onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={t("Cabin name")} error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isAdded}
          {...register("name", {
            required: "The Field Is Required",
            
          })}
        />
      </FormRow>

      <FormRow label={t("Maximum capacity")} error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isAdded}
          {...register("maxCapacity", {
            required: "The Field Is Required",
            min: {
              value: 1,
              message:"The Capacity must be at least 1"
            }
          })}

        />
      </FormRow>

      <FormRow label={t("Regular price")} error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isAdded}
          {...register("regularPrice", {
            required: "The Field Is Required"
          })}

        />
      </FormRow>

      <FormRow label={t("Discount")} error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isAdded}
          defaultValue={0}
          {...register("discount", {
            required: "The Field Is Required",
            validate: (value) => value <= getValues().regularPrice || "Discount must be less than regular price",
          })}

        />
      </FormRow>

      <FormRow
        label={t("Description for website")}
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          disabled={isAdded}
          defaultValue=''
          {...register("description", {
            required: "The Field Is Required"
          })}

        />
      </FormRow>

      <FormRow label={t("Cabin photo")}>
        <FileInput
          id='image'
          accept='image/*'
          type="file"
          disabled={isAdded}
          {...register("image", {
            required: "The Field Is Required"
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
        >
          {t("Cancel")}
        </Button>
        <Button >
          {t("Add Cabin")}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinFormV1;
