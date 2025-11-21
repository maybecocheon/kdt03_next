import Image from "next/image";
import loadingGif from "@/assets/loadingImg.gif";

export default function Loading() {
    return <div className="p-5 text-4xl flex justify-center items-center">
                <Image src={loadingGif} alt="로딩중" width={300} height={300}/>
            </div>
}