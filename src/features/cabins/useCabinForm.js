import { useForm, useWatch } from "react-hook-form";
import { useCheckCabinName } from "./useCheckCabinName";
import { useEffect } from "react";

export function useCabinForm({
  cabinToEdit = {},
  onSuccess,
  createCabin,
  editCabin,
}) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    setError,
    clearErrors,
    formState,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
    mode: "onBlur",
  });

  const { errors, isSubmitting } = formState;

  const nameValue = useWatch({ control, name: "name" });

  const shouldCheck =
    !isEditSession || (isEditSession && nameValue !== cabinToEdit.name);

  const { isUnique, isChecking } = useCheckCabinName(
    shouldCheck ? nameValue : ""
  );

  useEffect(() => {
    if (!shouldCheck || !nameValue || isChecking) return;

    if (!isUnique) {
      setError("name", {
        type: "unique",
        message: "Cabin name already exists",
      });
    } else if (errors.name?.type === "unique") {
      clearErrors("name");
    }
  }, [
    shouldCheck,
    nameValue,
    isUnique,
    isChecking,
    setError,
    clearErrors,
    errors.name,
  ]);

  const onSubmit = async (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const submitData = { ...data, image };

    if (isEditSession) {
      editCabin(
        { newCabinData: submitData, id: editId },
        {
          onSuccess: () => {
            reset();
            onSuccess?.();
          },
        }
      );
    } else {
      createCabin(submitData, {
        onSuccess: () => {
          reset();
          onSuccess?.();
        },
      });
    }
  };

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
    isWorking: isSubmitting,
    isChecking,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
}
