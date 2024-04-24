// Integrate social sharing into RecommendationsPage
import useSocialSharing from '../hooks/useSocialSharing';

const { shareRecommendation, shared } = useSocialSharing();

<button onClick={() => shareRecommendation('platform', recommendation)}>
    Share
</button>
{shared && <p>Recommendation shared!</p>}