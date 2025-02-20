import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

export const Sports = () => {
    const sportsDatas = useLoaderData();  
    console.log(sportsDatas); 

    return (
        <ul className="container mx-auto mt-2 grid grid-cols-0.5 sm:grid-cols-2 md:w-[80%] md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 justify-center items-center">
            {sportsDatas.articles.map((curData, id) => (
                <Card key={id} curData={curData} />
            ))}
        </ul>
    );
};
