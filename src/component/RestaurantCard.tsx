import restInfo from "@/data/부산맛집.json"
import Link from "next/link";

export default function RestaurantCard({ infos }: { infos: number; }) {
    const data = restInfo.filter(item => item["UC_SEQ"] == infos).map((item, idx) =>
        <Link key={idx + 1} href={`/restaurant/${item["UC_SEQ"]}`}>
            <div className="border rounded-xl w-100 h-96 overflow-hidden">
                <img src={item["MAIN_IMG_THUMB"] || undefined} alt={item["MAIN_TITLE"]} className="h-60 w-full object-cover pb-5" />
                <p className="pl-4 font-bold text-2xl">{item["MAIN_TITLE"]}</p>
                <p className="pl-4 text-gray-600">{item["GUGUN_NM"]}</p>
                <p className="pl-4 pb-5 pr-4 text-gray-800">대표메뉴: {item["RPRSNTV_MENU"]}</p>
            </div>
        </Link>)

    return (
        <div>
            {data}
        </div>
    )
}
