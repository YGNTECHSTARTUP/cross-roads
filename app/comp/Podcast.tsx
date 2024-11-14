import Image from "next/image"
import { FaMicrophone, FaCalendarAlt, FaUser } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";

interface ep {
  
    title: string;
    date:string;
    guestSpeaker: string;
    occupation: string;
    episodeTopic: string;
    guestImage: string;
    highlights: string[];
    spotifylink:string;

}
export default function PodcastTemplate({title, date,guestSpeaker, occupation, episodeTopic, guestImage, highlights,spotifylink}:ep) {
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
              src={"/"+guestImage}
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
        <div className="flex space-x-4 mt-4 ">
          <div> <div className=" flex items-center justify-center ">
      <Modal >
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Join the Talk!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          🎧
          </div>
        </ModalTrigger>
        <ModalBody>
       
          
          <ModalContent>
          <Card className="min-w-full bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
      <CardHeader className="pb-4">
        <div className="w-20 h-20 rounded-md overflow-hidden mb-4">
          <Image
            alt="Podcast cover"
            className="object-cover w-full h-full"
            height="80"
            src={"/"+guestImage}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <CardTitle className="text-4xl font-bold leading-tight">{title}</CardTitle>
        <CardDescription className="text-neutral-400 text-xl">{episodeTopic}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
      <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2">{guestSpeaker}</h2>
            <p className="text-muted-foreground flex items-center">
              <FaUser className="mr-2" />
              {occupation}
            </p>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t border-neutral-700">
        <div className="flex justify-center items-center mr-[50%] md:mr-0">
        <iframe  src={spotifylink} width="624" height="351"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
     

      </CardFooter>
    </Card>
          
          </ModalContent>
        
        </ModalBody>
      </Modal>
    </div></div>
    <Modal >
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Check Out the Blog!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✍️
          </div>
        </ModalTrigger>
        <ModalBody>
       
          
          <ModalContent className="min-w-full">
          <iframe src="https://v2-embednotion.com/13ec5c15897080bc9d5ddaf051caa84f" className="w-full h-[500px] border-2 border-[#ccc] rounded-lg p-0"></iframe>
     
   
          
          </ModalContent>
        
        </ModalBody>
      </Modal>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Talk Show Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((i,index) => (
              <Image
                key={index}
                src={i}
                alt={`Podcast Image ${index}`}
                width={350}
                height={350}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}