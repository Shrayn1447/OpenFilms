import useSWR from "swr";
import {fetcher} from './fetcher'
export default function useInfoFilms(type) {
    const { data, error, isLoading } = useSWR(
        `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=20&type=${type}`,
        fetcher
      );
    return {
        data: data?.docs,
        error,
        isLoading
    }
}