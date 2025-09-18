import axios from "axios"

export const fetchDeteils = async (formData: FormData) => {
  const response = await axios.post("http://localhost:5000/api/adhaar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}
