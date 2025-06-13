import axios from "axios";

window.axios = axios;

// Set default headers
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Enable cookies for cross-origin requests (important for Sanctum)
window.axios.defaults.withCredentials = true;

// Optional: Set base URL for your local backend
window.axios.defaults.baseURL = "http://event-planner.test";
