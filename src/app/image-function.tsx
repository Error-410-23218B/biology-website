'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import trexPic from './/Constantin_Tsarouchas_detailed_fossil,_beige_+_dark_ancient_background_a_5b119a69-4f03-468d-889c-77cd3a012896_upscaled.png'

const sections = [
  { 
    title: "Section 1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at augue aliquam, aliquam felis et, fermentum arcu. Donec a elit felis. Curabitur eget purus eget sem blandit elementum. Integer sed dolor nunc. Quisque eget quam at nisl finibus cursus. Aliquam molestie augue risus, a tincidunt nunc rutrum non. Donec pellentesque, est nec tristique consectetur, dolor nisi dignissim tortor, nec scelerisque dolor eros a dui. Etiam sem dui, tempor dapibus augue ac, feugiat efficitur augue. Praesent rutrum dui eros, et posuere eros vulputate vitae. Nullam vel iaculis tortor. Cras nisl risus, sodales in tincidunt ut, porttitor sit amet quam. Curabitur vitae auctor ligula. Nulla facilisi. Nam elit risus, dictum vitae libero in, luctus cursus elit. Ut eleifend consequat elementum. Donec dapibus lacus eros, rhoncus porttitor mauris tempus id. Vivamus pellentesque, purus quis imperdiet ullamcorper, magna ante consectetur orci, non mollis sem mi congue sem. Sed sed ligula hendrerit, sodales quam a, finibus quam. Quisque ultrices rutrum dignissim. Curabitur eget gravida magna. Fusce enim est, tempor eget massa et, tempus tempus felis. Nulla bibendum consequat leo vitae feugiat. Morbi tincidunt pulvinar auctor. Aliquam erat volutpat.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+1"
  },
  { 
    title: "Section 2", 
    description: "Here's what section 2 is all about.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+2"
  },
  { 
    title: "Section 3", 
    description: "Section 3 has some interesting information.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+3"
  },
  { 
    title: "Section 4", 
    description: "Let's explore what section 4 has to offer.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+4"
  },
  { 
    title: "Section 5", 
    description: "Section 5 brings something unique to the table.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+5"
  },
  { 
    title: "Section 6", 
    description: "And finally, we have section 6.", 
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+6"
  },
]

export default function ImageSections() {
  const [openSection, setOpenSection] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative aspect-[3/2] w-full max-w-3xl mx-auto">
        <Image
          src={trexPic}
          alt="Clickable sections"
          layout="fill"
          className="object-cover"
        />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              onClick={() => setOpenSection(index)}
              aria-label={`Open ${section.title}`}
            />
          ))}
        </div>
      </div>

      {sections.map((section, index) => (
        <Dialog key={index} open={openSection === index} onOpenChange={() => setOpenSection(null)}>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{section.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] sm:aspect-square">
                <Image
                  src={section.imageUrl}
                  alt={`Image for ${section.title}`}
                  layout="fill"
                  className="object-cover rounded-md"
                />
              </div>
              <DialogDescription className="mt-2 sm:mt-0">
                {section.description}
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}