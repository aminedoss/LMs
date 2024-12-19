import axios from 'axios';

const API_BASE_URL = 'http://localhost:3300/api/v1/quiz'; // URL du Back-end

// Fonction pour obtenir le token
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Obtenir tous les quiz
export const getQuizzes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error.response?.data || error.message);
    throw error;
  }
};

// Créer un quiz
export const createQuiz = async (quizData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create-Quiz`, quizData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error creating quiz:', error.response?.data || error.message);
    throw error;
  }
};

// Mettre à jour un quiz
export const updateQuiz = async (id, quizData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update-Quiz`, { id, ...quizData }, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error updating quiz:', error.response?.data || error.message);
    throw error;
  }
};

// Supprimer un quiz
export const deleteQuiz = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/Delete-Quiz`, {
      ...getAuthHeaders(),
      data: { id }, // Envoi l'ID dans le corps de la requête
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting quiz:', error.response?.data || error.message);
    throw error;
  }
};
