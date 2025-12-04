"use client";

import RestaurantCard from "@/component/RestaurantCard"
import { RestaurantType } from "@/app/restaurant/RestaurantType";
import { useEffect, useRef, useState } from "react";
import TailButton from "@/component/TailButton";
import { fetchRestaurants } from "./actions";

export default function BusanFoodPage() {
    const [tdata, setTdata] = useState<RestaurantType[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);   // 더보기 버튼
    const [loading, setLoading] = useState(false);

    // 이 컴포넌트가 마운트되었는지 확인하기 위한 ref
    const isMounted = useRef(false);

    // 서버 액션을 호출하여 맛집 데이터를 가져오는 함수
    const loadRestaurants = async (pageNum: number) => {
        // 더보기 버튼 눌렀는데 또 더보기 버튼 누르면 리턴
        if (loading && pageNum > 1) return;
        setLoading(true);
        
        const { data, currentPage, totalPages, error } = await fetchRestaurants(pageNum);

        if (error) {
            console.error("Failed to load restaurnats: " + error)
            setLoading(false);
            return;
        }

        if (data.length > 0){
            if (pageNum == 1) {
                setTdata(data);
            } else {
                setTdata((prev) => [...prev, ...data]);
            }
        }

        if (currentPage >= totalPages) {
            setHasMore(false);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (isMounted.current || page === 1) {
            loadRestaurants(page);
        }
        if (!isMounted.current){
            isMounted.current = true;
        }
    }, [page])

    const handleLoadMore = () => {
        // 로딩중이 아니면서 더 불러올 데이터 있을 때만 페이지 번호 증가
        if (!loading && hasMore){
            setPage(prevPage => prevPage + 1);
        }
    }

    return (
        <div className="w-8/10 h-auto overflow-y-scroll">
            <p className="text-center text-4xl font-extrabold p-10">부산 맛집 목록 (서버 액션)</p>
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