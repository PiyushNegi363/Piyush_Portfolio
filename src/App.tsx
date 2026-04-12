import { useState, useCallback } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ServicesCarousel } from '@/components/ServicesCarousel'
import { AboutSection } from '@/components/AboutSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { SectionIndicator } from '@/components/SectionIndicator'

function AppContent() {
  const [loading, setLoading] = useState(true)
  const onLoadComplete = useCallback(() => setLoading(false), [])

  return (
    <div className="app">
      {loading && <LoadingScreen onComplete={onLoadComplete} />}
      <ScrollProgress />
      <Navbar />
      <SectionIndicator />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AnimateOnScroll animation="scale-up">
          <ServicesCarousel />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up">
          <AboutSection />
        </AnimateOnScroll>
        <AnimateOnScroll animation="scale-up" stagger>
          <ProjectsSection />
        </AnimateOnScroll>
        <AnimateOnScroll animation="slide-left">
          <ExperienceSection />
        </AnimateOnScroll>
        <AnimateOnScroll animation="slide-right">
          <TestimonialsSection />
        </AnimateOnScroll>
        <AnimateOnScroll animation="pop-in">
          <ContactSection />
        </AnimateOnScroll>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
