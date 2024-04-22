import { useState, useEffect } from 'react';

const useAdvancedFilters = (recommendations, filters) => {
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        const applyFilters = () => {
            let results = recommendations;

            if (filters) {
                if (filters.difficulty) {
                    results = results.filter(rec => rec.difficulty === filters.difficulty);
                }
                if (filters.duration) {
                    results = results.filter(rec => rec.duration <= filters.duration);
                }
                if (filters.type) {
                    results = results.filter(rec => rec.type === filters.type);
                }
            }

            setFilteredResults(results);
        };

        applyFilters();
    }, [recommendations, filters]);

    return filteredResults;
};

export default useAdvancedFilters;