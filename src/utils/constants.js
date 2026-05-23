export const BASE_URL =
  location.hostname === "localhost"
    ? "" // Vite proxy handles routing to localhost:8000
    : "https://devmatch-backend-2rit.onrender.com";
