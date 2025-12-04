"use client";

import RestaurantCard from "@/component/RestaurantCard"
import { RestaurantType } from "@/app/restaurant/RestaurantType";
import { useEffect, useState } from "react";
import TailButton from "@/component/TailButton";

export default function BusanFoodPage() {
    const [tdata, setTdata] = useState<RestaurantType[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);   // 더보기 버튼
    const [loading, setLoading] = useState(false);

    const fetchRestaurants = async (pageNum: number) => {
        // 더보기 버튼 눌렀는데 또 더보기 버튼 누르면 리턴
        if (loading) return;
        setLoading(true);

        try {
            const resp = await fetch(`/api/busanFood?page=${pageNum}`);
            if (!resp.ok){
                throw new Error("맛집 정보를 불러오는 데 실패했습니다.");
            }
            const { data, currentPage, totalPages } = await resp.json();
            setTdata(prev => [...prev, ...data]);   // 기존 1페이지와 현재의 data(2페이지) 합치기
            if (currentPage >= totalPages){
                setHasMore(false);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRestaurants(page);
    }, [page])

    const handleLoadMore = () => {
        // 로딩중이 아니면서 더 불러올 데이터 있을 때만 페이지 번호 증가
        if (!loading && hasMore){
            setPage(prevPage => prevPage + 1);
        }
    }

    return (
        <div className="w-8/10 h-auto overflow-y-scroll">
            <p className="text-center text-4xl font-extrabold p-10">부산 맛집 목록 (supabase)</p>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 p-5">
                {
                    tdata.map(item => <RestaurantCard key={item.UC_SEQ} infos={item} />)
                }
            </div>
                {
                    loading && (
                        <div className="text-center my-4">
                            <p>불러오는 중...</p>
                        </div>
                    )
                }
                {
                    hasMore && !loading && (
                        <div className="text-center my-8">
                            <div>
                                <TailButton caption="더보기" color="blue" onHandle={handleLoadMore}/>
                            </div>
                        </div>)
                }
                {
                    !hasMore && (
                        <div className="text-center my-8">
                            <p>더 이상 맛집이 없습니다.</p>
                        </div>
                    )
                }
        </div>
    );
}