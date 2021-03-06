import dynamicAPI from '../dynamicAPI'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const url = '/api/pregnancy-care/setting/vaccinations'

const queryKey = 'vaccinations'

export default function useVaccinationsHook(props) {
  const { page = 1, q = '', limit = 25 } = props
  const queryClient = useQueryClient()

  const getVaccinations = useQuery(
    queryKey,
    async () =>
      await dynamicAPI('get', `${url}?page=${page}&q=${q}&limit=${limit}`, {}),
    { retry: 0 }
  )

  const updateVaccination = useMutation(
    async (obj) => await dynamicAPI('put', `${url}/${obj._id}`, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  const deleteVaccination = useMutation(
    async (id) => await dynamicAPI('delete', `${url}/${id}`, {}),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  const postVaccination = useMutation(
    async (obj) => await dynamicAPI('post', url, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  return {
    getVaccinations,
    updateVaccination,
    deleteVaccination,
    postVaccination,
  }
}
