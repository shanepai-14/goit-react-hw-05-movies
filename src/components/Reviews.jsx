import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './api';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getMovieReviews(movieId, page);
                setReviews(data.results);
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [movieId, page]);

    if (loading) return <div>Loading reviews...</div>;

    if (reviews.length === 0) return <div>No reviews available for this movie.</div>;

    return (
        <div className="reviews-list">
            <h3>Reviews</h3>
            {reviews.map((review) => (
                <div key={review.id} className="review">
                    <h4>{review.author}</h4>
                    <p>{review.content}</p>
                </div>
            ))}
            {totalPages > 1 && (
                <div className="pagination">
                    <button 
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span>Page {page} of {totalPages}</span>
                    <button 
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} 
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Reviews;