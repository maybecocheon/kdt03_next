'use client'

import { useState } from "react"

export default function ErrorButton() {
    const [error, setError] = useState(false);

    if (error){
        throw new Error("강제로 발생시킨 에러입니다.")
    }

    return (
        <div>
            <button onClick={() => setError(true)} className="mt-5 p-2 bg-red-500 hover:cursor-pointer hover:bg-red-200 text-white rounded-md">
                에러 발생시키기
            </button>
        </div>
    )
}

