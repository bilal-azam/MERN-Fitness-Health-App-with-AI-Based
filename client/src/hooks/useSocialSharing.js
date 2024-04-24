import { useState } from 'react';

const useSocialSharing = () => {
    const [shared, setShared] = useState(false);

    const shareRecommendation = (platform, recommendation) => {
        const shareData = {
            title: 'Check out this recommendation!',
            text: recommendation.name,
            url: window.location.href
        };

        try {
            navigator.share(shareData).then(() => setShared(true));
        } catch (err) {
            console.error('Error sharing:', err);
            setShared(false);
        }
    };

    return { shareRecommendation, shared };
};

export default useSocialSharing;