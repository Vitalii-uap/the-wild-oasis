import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: (context) => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      context?.onSuccess?.();
    },

    // onError: (error) => {
    //   toast.error("Cabin could not be created");
    //   console.error(error);
    // },
    onError: (error) => {
      if (error.message === "Cabin name already exists") {
        toast.error(
          "Cabin name already exists. Please choose a different name."
        );
      } else {
        toast.error("Cabin could not be created");
      }
      console.error(error);
    },
  });

  return { createCabin, isCreating };
}
