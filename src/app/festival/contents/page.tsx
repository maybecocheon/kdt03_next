import FestivalContents from "./FestivalContents";
import { Suspense } from "react";

export default function FestivalContentsPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
        <FestivalContents/>
    </Suspense>
  )
}
