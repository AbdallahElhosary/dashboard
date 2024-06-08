import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPi } from "../../services/ApiAuth"
import toast from "react-hot-toast";
export function useSignup() {
    // Mutation function
    const { mutate: signup, isPending: isLoading } = useMutation({
        mutationFn: signUpAPi,
        onSuccess: () => {
            toast.success(
                "Account successfully created! Please verufy the new account from the user's email address."
            );
        },
    })

    return { signup, isLoading }
}