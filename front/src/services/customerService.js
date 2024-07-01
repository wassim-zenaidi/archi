import axios from 'axios';

const getCustomers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/customers');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
    }
};

export default getCustomers;
