export function getGenreNamesByIds(ids) {
    // Ensure ids is an array before processing
    if (!Array.isArray(ids)) return '';
  
    // Get the names of the first three genres
    const firstThreeNames = ids
      .slice(0, 2) // Take the first three ids
      .map(id => {
        const genre = genres.find(genre => genre.id === id);
        return genre ? genre.name : null;
      })
      .filter(name => name !== null);
  
    // If there are more than three ids, add 'Other' to the list
    if (ids.length > 3) {
      firstThreeNames.push('Other');
    }
  
    // Join the genre names with a comma and a space
    return firstThreeNames.join(', ');
  }

  export const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];