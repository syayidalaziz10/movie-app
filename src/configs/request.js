const API_KEY = process.env.NEXT_PUBLIC_API_KEY 
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL 


export const getTrendingMovies = async () => {
   const res = await fetch(`${BASE_URL}/trending/movie/day?languange=en-US&api_key=${API_KEY}`)
   const data = await res.json();
   return data.results
}


export const getMovies = async (query) => {
   const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
   const data = await res.json();
   return data.results
}