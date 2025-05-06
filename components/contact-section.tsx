"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contacto" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-proyecta-dark md:text-4xl">Contáctanos</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="flex flex-col items-center p-6 text-center">
            <MapPin className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Ubicación</h3>
            <p className="text-gray-600">Santiago, Chile</p>
          </Card>

          <Card className="flex flex-col items-center p-6 text-center">
            <Phone className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Teléfono</h3>
            <p className="text-gray-600">+56 9 1234 5678</p>
          </Card>

          <Card className="flex flex-col items-center p-6 text-center">
            <Mail className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <p className="text-gray-600">contacto@proyecta3d.cl</p>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto de tu mensaje"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 md:w-auto">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
