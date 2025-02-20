export const getApiDatas = async ({ request }) => {
    const url = new URL(request.url);
    const category = url.pathname.replace("/", "") || "news"; 
    const searchQuery = url.searchParams.get("q") || category;

    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 7);
    const formattedFromDate = pastDate.toISOString().split("T")[0];
    
    const randomPage = Math.floor(Math.random() * 5) + 1;
    const apiKey = import.meta.env.VITE_API_KEY;
    

    const apiUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchQuery)}&from=${formattedFromDate}&page=${randomPage}&lang=en&country=us&max=10&apikey=${apiKey}`;

    try {
        console.log("Fetching data from:", apiUrl);

     
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch(apiUrl);
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", response.status, errorText);

       
            if (response.status === 401) {
                throw new Error("Unauthorized: Check your API key.");
            } else if (response.status === 403) {
                throw new Error("Forbidden: You do not have access to this resource.");
            } else if (response.status === 429) {
                throw new Error("Too many requests: API rate limit exceeded.");
            } else {
                throw new Error(`API Error ${response.status}: ${errorText}`);
            }
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        
        return { articles: [], error: error.message || "Unknown error occurred" };
    }
};
