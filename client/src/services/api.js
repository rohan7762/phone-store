const API_URL = "http://localhost:5000";

export const getServerStatus = async () => {
    const response = await fetch(`${API_URL}/`);

    if (!response.ok) {
        throw new Error("Failed to connect to the server");
    }

    return response.json();
;}