import axios from 'axios';

const API_BASE_URL = 'http://localhost:3300/api/v1/quiz'; // URL du Back-end

export const getQuizzes = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/All`,{
    headers: {
        Authorization: `Bearer ${token}`, 
    }
});
    return response.data;
};

export const createQuiz = async (quizData) => {
    const response = await axios.post(`${API_BASE_URL}/create-Quiz`, quizData);
    return response.data;
};

export const updateQuiz = async (id, quizData) => {
    const response = await axios.put(`${API_BASE_URL}/update-Quiz/${id}`, quizData);
    return response.data;
};

export const deleteQuiz = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/Delete-Quiz/${id}`);
    return response.data;
};
