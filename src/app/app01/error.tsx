'use client';

export default function Error({ error, reset }: {error: Error, reset: () => void}) {
    return (
        <div>
            <h2 className="font-extrabold text-4xl text-red-500 mb-5 mt-5">에러 발생</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()} className="mt-5 p-2 bg-red-500 hover:cursor-pointer hover:bg-red-200 text-white rounded-md">재시도</button>
        </div>
    );
}