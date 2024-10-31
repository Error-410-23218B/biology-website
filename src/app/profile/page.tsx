import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header  from "../header"

const teamMembers = [
  {
    name: "...",
    role: "...",
    bio: "bla bla bla",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "AJ"
  },
  {
    name: "...",
    role: "...",
    bio: "bla bla bla",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "BS"
  },
  {
    name: "...",
    role: "...",
    bio: "bla bla bla",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "CW"
  },
  {
    name: "...",
    role: "...",
    bio: "bla bla bla",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "DB"
  },
  {
    name: "...",
    role: "...",
    bio: "bla bla bla",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "EM"
  }
]

export default function AboutUs() {
  return (

    <div className="min-h-screen ">
          <Header/>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Summary</h2>
          <p className="text-lg text-muted-foreground">
            Our team has set out to create an interactive webpage to illustrate various aspects of dinosaur biology.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col h-full">
                <CardHeader className="flex items-center">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}