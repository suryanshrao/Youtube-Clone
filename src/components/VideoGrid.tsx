import exp from "constants"
import { VideoCard } from "./VideoCard"

const Videos = [{
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
},{
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
},{
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
},{
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}, {
    title : "Two Formula 1 Cars, 20 Years Apart.",
    image :  "/Video.jpg",
    author :  "RedBull",
    views :  "1M",
    thumbnail :  "Channel-Logo.jpg",
    timeStamp :  "2 days ago",
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard
            title = {video.title}
            image = {video.image}
            author = {video.author}
            views = {video.views}
            thumbnail = {video.thumbnail}
            timeStamp = {video.timeStamp}>
            </VideoCard>
        </div>)}
    </div>
}