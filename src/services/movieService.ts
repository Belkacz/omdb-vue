const API_KEY = "5abb4eb6";
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (searchPhrase: string) => {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchPhrase}&page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dataJson = await response.json();
        if (dataJson.Response === 'True') {
            return dataJson.Search;
        } else {
            throw dataJson.Error || 'Unknown error';
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

// // Funkcja do pobierania danych o filmach
// const fetchMovieData = async () => {
//     isLoading.value = true;
//     errorMessage.value = '';
//     try {
//       const url = `http://www.omdbapi.com/?s=${searchPhrase.value}&apikey=${APIKEY}`;
//       const response = await fetch(url);
//       const dataJson = await response.json();
  
//       if (dataJson.Response === 'True') {
//         movieData.value = dataJson.Search;  // Przechowujemy listę filmów
//       } else {
//         errorMessage.value = dataJson.Error || 'Unknown error';
//       }
//     } catch (error) {
//       console.log(error);
//       errorMessage.value = 'Failed to fetch data';
//     } finally {
//       isLoading.value = false;
//     }
//   };


export const getMovieByID = async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataJson = await response.json();
      if (dataJson.Response === 'True') {
        return dataJson;
    } else {
        throw dataJson.Error || 'Unknown error';
    }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  };