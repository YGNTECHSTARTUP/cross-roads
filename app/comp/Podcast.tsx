import Image from "next/image"
import { FaMicrophone, FaCalendarAlt, FaUser } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
interface ep {
  
    title: string;
    date:string;
    guestSpeaker: string;
    occupation: string;
    episodeTopic: string;
    guestImage: string;
    highlights: string[];

}
export default function PodcastTemplate({title, date,guestSpeaker, occupation, episodeTopic, guestImage, highlights}:ep) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <div className="flex items-center text-muted-foreground">
            <FaCalendarAlt className="mr-2" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Image
              src={guestImage}
              alt="Guest Profile"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2">{guestSpeaker}</h2>
            <p className="text-muted-foreground flex items-center">
              <FaUser className="mr-2" />
              {occupation}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FaMicrophone className="mr-2" />
            Episode Topic
          </h3>
          <p className="text-muted-foreground">
            {episodeTopic}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Podcast Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((i,index) => (
              <Image
                key={index}
                src={i}
                alt={`Podcast Image ${index}`}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}