import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabins } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export const useDeleteCabin = () => {
    const queryClient = useQueryClient();


    const { isPending: isDeleting, mutate:deleteCabin } = useMutation({
        mutationFn: (id) => deleteCabins(id),
        onSuccess: () => {
            toast.success("Cabin Delected Successfully")
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            })
        },
        onError: err => toast.error(err.message)
    })

    return { deleteCabin  , isDeleting}
}

