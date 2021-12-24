import Constants from 'expo-constants';
import { useFetch } from '../../../hooks/useFetch';
import { useSearchTermStore } from '../../../store';

const GOOGLE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const useFetchResults = () => {
  const { searchTerm: q } = useSearchTermStore();
  const key = Constants.manifest.extra.googleApiKey;
  const url = `${GOOGLE_API_BASE_URL}/search?part=snippet&maxResults=25&q=${q}&key=$${key}`;
  return useFetch(url, { items: [] });
};
