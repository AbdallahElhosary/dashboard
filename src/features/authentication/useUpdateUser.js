import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  updateCurrentUser } from "../../services/ApiAuth"
import toast from "react-hot-toast";
export function useUpdateUser() {

    const queryClient = useQueryClient();
    // Mutation function
    const { mutate: updatedUser, isPending: isUpdating } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            toast.success("User account successfully updated");
            queryClient.setQueryData(["user"], user);
        },

        onError: (err) => toast.error(err.message),
    })

    return { updatedUser, isUpdating }
}