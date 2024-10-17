'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import trexPic from './Constantin_Tsarouchas_detailed_fossil,_beige_+_dark_ancient_background_a_5b119a69-4f03-468d-889c-77cd3a012896_upscaled.png'

type Section = {
  id: number
  title: string
  content: string
  imageUrl: string
}




const sections: Section[] = [
  { id: 1, title: "Section 1", content: "khjfsdguihsfhdjkhjkfsdlhjkfsdasadas ", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 2, title: "Section 2", content: "This is the content for section 2.", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 3, title: "Section 3", content: "This is the content for section 3.", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 4, title: "Section 4", content: "This is the content for section 4.", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 5, title: "Section 5", content: "This is the content for section 5.", imageUrl: "/placeholder.svg?height=200&width=200" },
  { id: 6, title: "Section 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at augue aliquam, aliquam felis et, fermentum arcu. Donec a elit felis. Curabitur eget purus eget sem blandit elementum. Integer sed dolor nunc. Quisque eget quam at nisl finibus cursus. Aliquam molestie augue risus, a tincidunt nunc rutrum non. Donec pellentesque, est nec tristique consectetur, dolor nisi dignissim tortor, nec scelerisque dolor eros a dui. Etiam sem dui, tempor dapibus augue ac, feugiat efficitur augue. Praesent rutrum dui eros, et posuere eros vulputate vitae. Nullam vel iaculis tortor. Cras nisl risus, sodales in tincidunt ut, porttitor sit amet quam. Curabitur vitae auctor ligula. Nulla facilisi. Nam elit risus, dictum vitae libero in, luctus cursus elit. Ut eleifend consequat elementum. Donec dapibus lacus eros, rhoncus porttitor mauris tempus id. Vivamus pellentesque, purus quis imperdiet ullamcorper, magna ante consectetur orci, non mollis sem mi congue sem. Sed sed ligula hendrerit, sodales quam a, finibus quam. Quisque ultrices rutrum dignissim. Curabitur eget gravida magna. Fusce enim ", imageUrl: "/placeholder.svg?height=200&width=200" },
]






export default function Component() {
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 })
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleSectionClick = (sectionId: number, event: React.MouseEvent<HTMLDivElement>) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
    const rect = event.currentTarget.getBoundingClientRect()
    setDialogPosition({
      top: rect.top + window.scrollY + rect.height / 2,
      left: rect.left + window.scrollX + rect.width / 2,
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setActiveSection(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto">
        <Image
          src={trexPic}
          alt="Main image divided into sections"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative cursor-pointer overflow-hidden group"
              onClick={(e) => handleSectionClick(section.id, e)}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
      {activeSection !== null && (
        <div
          ref={dialogRef}
          className="fixed z-10 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-[90vw] max-h-[80vh] overflow-y-auto"
          style={{
            top: `${dialogPosition.top}px`,
            left: `${dialogPosition.left}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <button
            onClick={() => setActiveSection(null)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-start">
              <Image
                src={sections[activeSection - 1].imageUrl}
                alt={`Image for ${sections[activeSection - 1].title}`}
                width={200}
                height={200}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">{sections[activeSection - 1].title}</h3>
              <p className="text-base">{sections[activeSection - 1].content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}