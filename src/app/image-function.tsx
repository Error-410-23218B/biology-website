'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import trexPic from './/Constantin_Tsarouchas_detailed_fossil,_beige_+_dark_ancient_background_a_5b119a69-4f03-468d-889c-77cd3a012896_upscaled.png'
import herd from ".//herd.jpeg"
import predation from ".//predation.png"
import huh from ".//unnamed (10).png"

const sections = [
  { 
    title: "Social", 

    description: (
      <div className="space-y-4">
        <p>
          The discovery of a population of an ancient relative of marsupials from around 64 million years ago provides evidence that mammals lived in groups through the discovery of a large number of fossils in a small space of a few square metres.
        </p>
        <p>
          This is further emphasised through the appearance of walkways in dinosaur footprints which have fossilised, demonstrating their tendency to stick to a herd.
        </p>
        <p>
          Furthermore, dinosaurs have been known to care for their young, portraying their maternal and paternal characteristics through the discovery of fossilised eggs of the Maiasaura, from around 80 million years ago; parents may have provided food and protection from threats.
        </p>
        <p>
          These parental behaviours are developed through the location of the ‘Citipati osmolskae’ fossil, picturing a mother brooding over her eggs. Scientists theorise that she may have been protecting her eggs from a sandstorm or mudslide and became buried - sacrificial behaviour showing the protection of young.
        </p>
      </div>
    ), 
    imageUrl: huh
  },
  { 
    title: "Predator and prey", 
    description: (
      <div className="space-y-4">
        <p>
          During the late Ediacaran period, evidence of predation significantly reshaped the dynamics of early marine ecosystems.
        </p>
        <p>
          Researchers found circular holes in the fossils of Cloudina, a coral-like worm, indicating that an unknown predator targeted these organisms. This suggests that predation was becoming a common ecological interaction, marking a pivotal shift in how organisms related to one another.
        </p>
        <p>
          As predation intensified, many early life forms developed strategies for survival. Some organisms, for instance, created U-shaped burrows in the seabed. These burrows likely served as escapes, offering protection from predators.
        </p>
        <p>
          The ability to dig and inhabit these burrows illustrates an early behavioural adaptation to predation, allowing organisms to avoid becoming a meal.
        </p>
      </div>
    ),

    imageUrl: predation
  },
  { 
    title: "Mating Behaviour in Fossils", 
    description: (
      <div className="space-y-4">


<p>

The study of mating behavior in fossils relies on evolutionary principles introduced by Charles Darwin, specifically intrasexual competition (the "Law of Battle") and intersexual selection. Intrasexual competition, where males fight for access to females, is evidenced by fossilized traits like antlers or horns and suggests that only the strongest individuals reproduced. Modern research shows this competition can affect both sexes, particularly when resources are scarce.
</p>

<p>
Intersexual selection, or female choice, involves females selecting mates based on traits indicating genetic fitness, impacting future genetic diversity. Fossils displaying sexually dimorphic features, such as elaborate male ornaments, support this selection process.


</p>

<p>
Recently, "scrape marks" found in Cretaceous rock formations reveal courtship displays by theropod dinosaurs, reminiscent of modern ground-nesting bird behaviors. These marks, likely from "nest-scrape displays," provide the first physical evidence of dinosaur courtship behavior, showing an evolutionary link between dinosaur and bird mating strategies.

</p>
      </div>
    ),
    imageUrl: "/placeholder.svg?height=300&width=400&text=Section+3"
  },
  { 
    title: "Herd", 
    description: (
    <div className='space-y-4'>
      <p>
      Herd behaviour refers to the way livestock and other animals travel, live and act as a group.
Within a herd, individuals learn behaviours by observing others. This idea of observational
learning allows species to adapt and pass on behaviours across generations. This ensures that
the beneficial characteristics are repeated, helping the species to survive in a modern
environment. Their inability to adapt threatens their survival, such that Darwin’s theory of
“Survival of the fittest” is evident and fits into the idea that adaptability is the key to survival.
Thus some behavioural traits that once may have been needed, can disappear if they are no
longer useful.
      </p>

    <p>
    The African Elephant is the largest land animal on earth; their adaptability of traits over time has
been a key to their survival. Elephants travel in herds, which can range up to one hundred. The
mammals live in matriarchal societies, where the oldest and most experienced female leads the
group. The behaviour that she has developed over time can be passed onto her herd who will
eventually learn what is the best way to fit into the group.
    </p>
    </div>), 
    imageUrl: herd
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
              <DialogDescription className="mt-2 sm:mt-0 text-foreground">
  {typeof section.description === 'string' 
    ? section.description 
    : section.description}
</DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}