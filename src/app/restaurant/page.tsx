import RestaurantCard from "@/component/RestaurantCard"
import restInfo from "@/data/부산맛집.json"

const info = restInfo.map((item, idx) => <RestaurantCard key={idx + 1} infos={item["UC_SEQ"]}/>)

export default async function RestaurantPage() {
    return (
        <div className="w-8/10 h-auto overflow-y-scroll">
            <p className="text-center text-4xl font-extrabold p-10">부산 맛집 목록</p>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 p-5">
                {info}
            </div>
        </div>
    );
}