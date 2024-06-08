import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi}  from "../../services/ApiAuth"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useLogin() {
    // Constants
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    // Mutation function
    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            navigate('/dashboard', { replace: true });
        },

        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provided email or password are incorrect');
        },
    })

    return {login , isLoading}
}