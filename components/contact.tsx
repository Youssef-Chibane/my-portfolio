import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chib4ne.youssef@gmail.com",
      href: "mailto:chib4ne.youssef@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 631 208 094",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Youssef-Chibane",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/youssef-chibane/",
    },
  ];

  return (
    <section id="contact" className="py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">
            Let&apos;s discuss your next project or opportunity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{contact.label}</p>
                      <a
                        href={contact.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s Connect</CardTitle>
              <CardDescription>
                Follow me on social media or send me a message
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button key={index} variant="outline" size="icon" asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <a href="mailto:chib4ne.youssef@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
