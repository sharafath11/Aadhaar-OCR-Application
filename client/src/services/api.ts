import axios from "axios"

export const fetchDeteils = async (formData: FormData) => {

  const URL = import.meta.env.VITE_API_URL
  
  const response = await axios.post(`${URL}/api/adhaar`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}
