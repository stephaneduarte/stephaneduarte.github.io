import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Stéphane Duarte</h1>
            <p className="text-lg text-slate-600 font-medium">Engineering Manager</p>
            <p className="text-slate-500">Reachdesk</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <Link
              href="mailto:stephaneoduarte@gmail.com"
              className="flex items-center justify-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">stephaneoduarte@gmail.com</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/stephaneduarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn Profile</span>
            </Link>

            {/* Location */}
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Lisbon, Portugal</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white">
              <Link href="mailto:stephaneoduarte@gmail.com">Get in Touch</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
