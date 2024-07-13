import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoCard
    title ={"Two Formula 1 Cars, 20 Years Apart."}
    image = {"/Video.jpg"}
    author = {"RedBull"}
    views = {"1M"}
    thumbnail = {"Channel-Logo.jpg"}
    timeStamp = {"2 days ago"}>
    </VideoCard>
   </div>
  );
}
