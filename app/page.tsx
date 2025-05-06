import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ClientsCarousel from "@/components/clients-carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <ClientsCarousel />
      <Footer />
    </main>
  )
}
