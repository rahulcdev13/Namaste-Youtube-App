
const GOOGLE_API_KEY = "AIzaSyCh5Tf2ejjPEOuC8EHlDARKm6KlNdmf3sI";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";