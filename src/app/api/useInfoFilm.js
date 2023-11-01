import useSWR from "swr";
import {fetcher} from './fetcher'
export function useInfoFilms(id) {
    const { data, error, isLoading } = useSWR(
        `https://api.kinopoisk.dev/v1.3/movie/${id}`,fetcher
    );
    return {
        data: {
            name:data?.name,
            poster:data?.poster?.url,
            trailers:data?.videos?.trailers[0]?.url,
            description:data?.description,
            movieLength:data?.movieLength,
            genres:data?.genres[0]?.name,
            countries:data?.countries?.name,    
        },
        error,
        isLoading
    }
}