import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi}  from "../../services/ApiAuth"
import { useNavigate } from "react-router-dom";
export function useLogout() {
    // Constants
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    // Mutation function
    const { mutate: logout, isPending: isLoading } = useMutation({
        mutationFn: () => logoutApi(),
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", { replace: true });
        },
    })

    return { logout , isLoading}
}