import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data); //iss line se ek reponse aayega backend se 
        return response.data; // response ka data mil jayega
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}

