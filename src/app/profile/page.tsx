import Header from "../header"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutMe() {
  return (
  <div>
    <Header />

    <div className="max-w-2xl mx-auto p-8">
      <div className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-muted-foreground mb-4">Biology Dude</p>
        <p className="mb-6">
          Stuff
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Skills</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>My Skills</DialogTitle>
                <DialogDescription>
                  Here are some of the stuff I do:
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc list-inside">
                    <li>smth</li>
                    <li>smth</li>
                    <li>smth</li>
                    <li>smth</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside">
                    <li>smth</li>
                    <li>smth</li>
                    <li>smth</li>
                    <li>smth</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Contact</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Feel free to reach out through any of these channels:
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col space-y-4">
                <a href="mailto:jane.doe@example.com" className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>jane.doe@example.com</span>
                </a>
                <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>github.com/janedoe</span>
                </a>
                <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/janedoe</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
    </div>
  )
}
