export const TMDB_CONFIG = {
  BaseUrl: "",
  API_KEY: process.env.EXPO_PUBLIC_URL,
  header: {
    accept: "application",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_URL}`,
  },
};
