import { supabase } from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const perPage = parseInt(searchParams.get("perPage") || "6");
    const limit = perPage;

    const offset = (page - 1) * limit;

    const { data, error, count } = await supabase
                                        .from("restaurants")
                                        .select("*", { count: "exact"})
                                        .order("UC_SEQ", { ascending: true })
                                        .range(offset, offset + limit - 1);

    if (error) {
        console.error("Fetching 에러: ", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const totalPages = Math.ceil(count! / limit);

    // 키와 값의 변수명 같으면 키만 써 줘도 됨
    return NextResponse.json({
        data,
        currentPage: page,
        perPage,
        totalPages
    })
}