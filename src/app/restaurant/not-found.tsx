import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <h2 className="text-4xl font-extrabold">맛집 오류</h2>
            <p className="text-xl">해당 맛집을 찾을 수 없습니다.</p>
            <Link href="/restaurant" className="mt-5 p-3 bg-blue-500 hover:cursor-pointer hover:bg-blue-200 text-white rounded-md">맛집 목록</Link>
        </div>
    );
}