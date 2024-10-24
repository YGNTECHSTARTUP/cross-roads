import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { visionaries } from "../constant"

export default function Visionaries(){
  
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12">Our Dream Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionaries.map((visionary, index) => (
            <BackgroundGradient key={index} className=" min-w-fit max-w-lg bg-white dark:bg-zinc-900">
 <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={visionary.image}
                  alt={visionary.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{visionary.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{visionary.title}</p>
                <p className="text-sm">{visionary.description}</p>
              </CardContent>
            </Card>
            </BackgroundGradient>
           
          ))}
        </div>
      </div>
    </section>
  )
}