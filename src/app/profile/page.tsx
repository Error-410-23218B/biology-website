import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header  from "../header"

const teamMembers = [
  {
    name: "Constantin Tsarouchas",
    role: "Team Leader",
    bio: "Constantin Tsarouchas is a passionate young leader and dedicated student at Simon Langton Grammar School for Boys, where he has taken on the role of team leader for the Cambridge Biology Challenge . Since taking on the leadership role, Constantin Tsarouchas has worked tirelessly to expand his knowledge of biology and encourage his peers to develop a love for the natural sciences.",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "CT"
  },
  {
    name: "Ali Behilak",
    role: "Script Reviewer",
    bio: "Ali Behilak is a dedicated script reviewer for the Biology Team at Simon Langton Grammar School for Boys, where their keen eye for detail and passion for scientific accuracy significantly enhance the quality of presentations and educational content. In their role, Ali Behilak meticulously evaluates scripts, ensuring that each piece aligns with scientific standards and conveys complex biological concepts in an accessible, engaging manner.",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "AB"
  },
  {
    name: "Eddie Coupe",
    role: "Principal Investigator",
    bio: "As the Principal Investigator, Eddie Coupe oversees the team’s research projects, guiding the team through experimental design, data analysis, and scientific communication. By nurturing a collaborative environment, Eddie Coupe empowers team members to engage deeply with complex biological concepts and develop innovative solutions to challenging problems. Dedicated to excellence and lifelong learning, Eddie Coupe continues to mentor and inspire the next generation of biologists with a commitment to both science",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "EC"
  },
  {
    name: "Josh Paul",
    role: "Research Coordinator",
    bio: "As the Research Coordinator for a high school Biology Challenge team, Josh Paul plays a pivotal role in guiding and preparing students to excel in biology competitions. With a passion for the life sciences and a commitment to academic excellence, he brings a wealth of knowledge and organization to the team, ensuring that each member is well-prepared to tackle complex biological concepts and challenging scientific questions.",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "JP"
  },
  {
    name: "Calista-Jean Lategan",
    role: "Internal Communications Coordinator.",
    bio: "As the Internal Communications Coordinator for the high school Biology Challenge Team, Calista-Jean Lategan plays a crucial role in ensuring effective collaboration and seamless information flow among team members, coaches, and supporting faculty. With a strong foundation in biology and a commitment to fostering a collaborative learning environment, Calista-Jean Lategan is dedicated to enhancing the team’s performance through clear, structured communication and organizational skills.",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "CJL"
  },

  {
    name: "Rohan Jose",
    role: "Chief Website Engineer",
    bio: "Rohan Jose serves as the Chief Website Engineer for the Biology Challenge, bringing his technical expertise and innovative approach to ensure seamless functionality, accessibility, and user engagement for the platform. With a solid background in web development,he skillfully manages all aspects of the website's structure, design, and user interface, creating an experience that supports both participants and organizers.",
    imageUrl: "/placeholder.svg?height=150&width=150",
    initials: "RJ"
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