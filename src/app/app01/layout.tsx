import { myFont } from "@/app/fonts";
import Link from "next/link";

export default function App01Layout({ children, }: {children: React.ReactNode;}) {
    return (
        <div className={`flex w-full h-full ${myFont.className}`}>
            <aside className="w-65 bg-blue-50 mr-10 pt-5 pl-10">
                <h1 className="font-bold text-2xl mb-5">맛집 카테고리</h1>
                <nav>
                    <ul className="flex flex-col gap-1 text-lg pl-5">
                        <li className="hover:text-gray-200 hover:cursor-pointer">
                            <Link href="/app01/junggu">중구</Link>
                        </li>
                        <li className="hover:text-gray-200 hover:cursor-pointer">
                            <Link href="/app01/seogu">서구</Link>
                        </li>
                        <li className="hover:text-gray-200 hover:cursor-pointer">
                            <Link href="/app01/donggu">동구</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}