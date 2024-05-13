// Monitoring utility - added error tracking and performance monitoring
import axios from 'axios';

const logError = async (error) => {
    try {
        await axios.post('/api/logs', { error });
    } catch (err) {
        console.error('Failed to log error:', err);
    }
};

export { logError };