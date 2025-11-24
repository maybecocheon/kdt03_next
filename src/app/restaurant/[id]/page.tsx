import TailButton from "@/component/TailButton";
import restInfo from "@/data/부산맛집.json"
import Link from "next/link";

interface RestaurantDetailProps {
    params: Promise<{ id: string }>;
}
export default async function RestaurantDetail({ params }: RestaurantDetailProps) {
    const { id } = await params;
    const restaurant = restInfo.find(item => item["UC_SEQ"] == Number(id))

    return (
        <div className="w-9/10 h-full overflow-y-auto p-5 flex flex-col gap-3">
            <p className="text-4xl font-extrabold">{restaurant?.MAIN_TITLE}</p>
            <p className="text-gray-600 text-lg">{restaurant?.GUGUN_NM}</p>
            <img src={restaurant?.MAIN_IMG_NORMAL} alt={restaurant?.MAIN_TITLE} className="rounded-2xl" />
            <div className="w-full flex flex-col items-center mt-5">
                <div className="w-9/10 flex flex-wrap mb-5">
                    <div className="w-1/2">
                        <p>주소</p>
                        <p>{restaurant?.ADDR1}</p>
                        <p className="font-extrabold">---------------------------------</p>
                    </div>
                    <div className="w-1/2">
                        <p>연락처</p>
                        <p>{restaurant?.CNTCT_TEL}</p>
                        <p className="font-extrabold">---------------------------------</p>
                    </div>
                    <div className="w-1/2">
                        <p>대표 메뉴</p>
                        <p>{restaurant?.RPRSNTV_MENU}</p>
                        <p className="font-extrabold">---------------------------------</p>
                    </div>
                    <div className="w-1/2">
                        <p>운영 시간</p>
                        <p>{restaurant?.USAGE_DAY_WEEK_AND_TIME}</p>
                        <p className="font-extrabold">---------------------------------</p>
                    </div>
                    <div>
                        <p>관련 링크</p>
                        <div className="flex gap-2 w-100">
                            <TailButton color="orange" caption="홈페이지" />
                            <TailButton color="yellow" caption="카카오맵으로 보기" />
                        </div>
                        <p className="font-extrabold">---------------------------------</p>
                    </div>
                    <div>
                        <p>상세 설명</p>
                        <div>{restaurant?.ITEMCNTNTS}</div>
                    </div>
                </div>
                <div className="w-30 h-15">
                    <Link href="/restaurant">
                        <TailButton color="blue" caption="목록으로" />
                    </Link>
                </div>
            </div>
        </div>
    );
}