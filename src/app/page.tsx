//Left side
import RecommendedContent from "@/components/recommendedContent/RecommendedContent";
//Right side
import VideosContent from "@/components/videosContent/VideosContent";

export default function HomePage(){

  	return (
		<section className="grid grid-cols-7 h-screen">
			<RecommendedContent/>
			<VideosContent/>
		</section>
  	);
}