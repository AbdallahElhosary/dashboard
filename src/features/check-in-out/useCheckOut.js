import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast";

const useCheckOut = () => {
    const QueryClient = useQueryClient();
    const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
        mutationFn: ({bookingId }) => updateBooking(bookingId, {
            status: "checked-out",
            
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked Out`);
            QueryClient.invalidateQueries({ active: true });
        },
        
        onError: () => toast.error("There was an error while checking in"),
    })
    
    return { checkOut, isCheckingOut }

}

export default useCheckOut
