import TailButton from "@/component/TailButton";
import restInfo from "@/data/부산맛집.json"
import Link from "next/link";
import { notFound } from "next/navigation";

interface RestaurantDetailProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const restaurants = restInfo;
    return restaurants.map(restaurant => ({
        id: String(restaurant.UC_SEQ)
    }))
}

export default async function RestaurantDetail({ params }: RestaurantDetailProps) {
    const { id } = await params;
    const restaurant = restInfo.find(item => item["UC_SEQ"] == Number(id))
    if (!restaurant) {
        notFound();
    }

    const description = restaurant?.ITEMCNTNTS?.replace(/\\n/g, '\n') || '상세 설명이 없습니다.';
    const usageTime = restaurant?.USAGE_DAY_WEEK_AND_TIME?.replace(/\\n/g, '\n') || '운영 시간 정보가 없습니다.';

    return (
        <div className="w-1/2 h-full overflow-y-auto p-5 flex flex-col gap-3">
            <p className="text-4xl font-extrabold">{restaurant?.MAIN_TITLE}</p>
            <p className="text-gray-600 text-lg">{restaurant?.GUGUN_NM}</p>
            <img src={restaurant?.MAIN_IMG_NORMAL || undefined} alt={restaurant?.MAIN_TITLE} className="rounded-2xl" />
            <div className="w-full flex flex-col items-center justify-center mt-5">
                <div className="w-full flex flex-wrap items-end mb-5">
                    <div className="w-100 mr-2">
                        <p className="text-gray-500">주소</p>
                        <p>{restaurant?.ADDR1}</p>
                        <p className="w-9/10 border-b border-gray-300 my-3 border-2"></p>
                    </div>
                    <div className="w-100">
                        <p className="text-gray-500">연락처</p>
                        <p>{restaurant?.CNTCT_TEL}</p>
                        <p className="w-full border-b border-gray-300 my-3 border-2"></p>
                    </div>
                    <div className="w-100 mr-2">
                        <p className="text-gray-500">대표 메뉴</p>
                        <p>{restaurant?.RPRSNTV_MENU}</p>
                        <p className="w-9/10 border-b border-gray-300 my-3 border-2"></p>
                    </div>
                    <div className="w-100">
                        <p className="text-gray-500">운영 시간</p>
                        <p>{usageTime}</p>
                        <p className="w-full border-b border-gray-300 my-3 border-2"></p>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-500">관련 링크</p>
                        <div className="flex gap-2 w-100">
                            {   
                                restaurant?.HOMEPAGE_URL ?
                                    <a href={restaurant?.HOMEPAGE_URL} className="w-100"><TailButton color="orange" caption="홈페이지" /></a>
                                : ""
                            }
                            <TailButton color="yellow" caption="카카오맵으로 보기" />
                        </div>
                        <p className="w-full border-b border-gray-300 my-3 border-2"></p>
                    </div>
                    <div>
                        <p className="text-gray-500">상세 설명</p>
                        <div>{description}</div>
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