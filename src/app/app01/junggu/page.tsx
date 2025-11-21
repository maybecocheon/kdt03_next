"use client";

export default function App01Page() {
    return (
        <div className="w-full h-full pt-5">
            <h1 className="font-extrabold text-4xl p-2">중구 맛집</h1>
            <div className="p-2 mb-5">여기에 추천 맛집 목록이 표시됩니다.</div>
            <div className="w-1/2 border bg-gray-50 rounded-md p-5">
                <p className="font-extrabold text-4xl p-2">맛있는 중국집</p>
                <p className="p-2">방금 추천받은 따끈따끈한 맛집!</p>
            </div>
        </div>
    );
}