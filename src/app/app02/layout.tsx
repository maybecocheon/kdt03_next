import { myFont } from "@/app/fonts";
import Link from "next/link";

export default function App02Layout({ children, }: {children: React.ReactNode;}) {
    return (
        <div className={`flex flex-col w-full h-full ${myFont.className}`}>
            <aside className="w-full flex justify-between items-center h-20 bg-blue-50 p-10">
                <h1 className="font-bold text-2xl mr-10">맛집 카테고리</h1>
                <nav>
                    <ul className="flex gap-2 text-lg">
                        <li className="hover:text-gray-300 hover:bg-gray-50 hover:cursor-pointer rounded-lg p-3 w-20 text-center">
                            <Link href="/app02/junggu">중구</Link>
                        </li>
                        <li className="p-3 text-center">|</li>
                        <li className="hover:text-gray-300 hover:bg-gray-50 hover:cursor-pointer rounded-lg p-3 w-20 text-center">서구</li>
                        <li className="p-3 text-center">|</li>
                        <li className="hover:text-gray-300 hover:bg-gray-50 hover:cursor-pointer rounded-lg p-3 w-20 text-center">동구</li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1 pl-10">
                {children}
            </div>
        </div>
    );
}