import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

export const Politics = () => {
    const politicsDatas = useLoaderData();
    console.log(politicsDatas);

    return (
        <ul className="container  mx-auto mt-2 grid grid-cols-1 place-items-center sm:grid-cols-2 md:w-[80%] md:grid-cols-3  gap-5 p-8">
            {politicsDatas.articles.map((curData, id) => (
                <Card key={id} curData={curData} />
            ))}
        </ul>
    );
};
