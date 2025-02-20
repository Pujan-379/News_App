import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { Card } from "../Components/UI/Card";


export const SearchResults = () => {
    const location = useLocation();
    const { articles } = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearchQuery(params.get("q") || "news"); 
    }, [location.search]);

    return (
        <div className="container mx-auto  md:px-0.5">
            <h2 className="text-2xl font-bold text-center my-4">
                Search Results for: <span className="text-blue-500">{searchQuery}</span>
            </h2>

            {articles.length > 0 ? (
                <ul className="container mx-auto mt-2 grid grid-cols-1 place-items-center sm:px-0.5 sm:mx-auto sm:grid-cols-2 md:w-[80%] md:grid-cols-3   gap-4 p-4 ">
                    {articles.map((article, index) => (
                        <Card key={index} curData={article} />
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No results found.</p>
            )}
        </div>
    );
};
