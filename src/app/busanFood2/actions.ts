"use server";

import { supabase } from "@/supabase/client";
import { RestaurantType } from "@/app/restaurant/RestaurantType";

export async function fetchRestaurants(page: number) {
    const limit = 6;
    const offset = (page - 1) * limit;

    const { data, error, count } = await supabase
                                        .from("restaurants")
                                        .select("*", { count: "exact"})
                                        .order("UC_SEQ", { ascending: true })
                                        .range(offset, offset + limit - 1);

    if (error) {
        console.error("Error fetching restaurants: ", error);
        return { data: [], currentPage: page, totalPages: 0, error: error.message };
    }

    const totalPages = Math.ceil(count! / limit);

    // 키와 값의 변수명 같으면 키만 써 줘도 됨
    return ({
        data: data as RestaurantType[],
        currentPage: page,
        totalPages,
        error: null
    })
}