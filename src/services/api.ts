import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPosts = async () => {
    try {
        const response = await apiClient.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching blog posts');
    }
};

export const getPost = async (id) => {
    try {
        const response = await apiClient.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching blog posts');
    }
};