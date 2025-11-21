"use server";

import ErrorButton from "./ErrorButton";

async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return { name: "맛있는 파스타 집" };
}

export default async function App01Page() {
    const restaurant = await getData();

    return (
        <div className="w-full h-full pt-5">
            <h1 className="font-extrabold text-4xl p-2">오늘의 맛집 추천</h1>
            <div className="p-2 mb-5">여기에 추천 맛집 목록이 표시됩니다.</div>
            <div className="w-1/2 border bg-gray-50 rounded-md p-5">
                <p className="font-extrabold text-4xl p-2">{restaurant.name}</p>
                <p className="p-2">방금 추천받은 따끈따끈한 맛집!</p>
            </div>
            <ErrorButton />
        </div>
    );
}