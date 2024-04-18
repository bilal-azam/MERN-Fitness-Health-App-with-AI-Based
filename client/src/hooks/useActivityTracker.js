import { useEffect } from 'react';

const useActivityTracker = () => {
    useEffect(() => {
        const logActivity = (event) => {
            // Placeholder: Log user activity for analytics
            console.log(`User activity: ${event.type}`);
        };

        // Listen to different user activities
        document.addEventListener('click', logActivity);
        document.addEventListener('keypress', logActivity);

        return () => {
            document.removeEventListener('click', logActivity);
            document.removeEventListener('keypress', logActivity);
        };
    }, []);
};

export default useActivityTracker;