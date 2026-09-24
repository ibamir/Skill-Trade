import FrequentAskedQuestions from '@/components/Home/f&q/f&q'
import Features from '@/components/Home/features/feature-section'
import Footer from '@/components/Home/footer/footer'
import HeroSection from '@/components/Home/hero-section/hero-section'
import HowItWorks from '@/components/Home/how-it-works/how-it-works'
import { Header } from '@/components/Home/navbar/header'
import Newsletter from '@/components/Home/newsletter'
import { InterestFormSection } from '@/components/Home/form/form'

export default function Home() {
    return (
        <div className="w-full h-full bg-background flex flex-col items-center justify-center gap-8">
            <Header />
            <HeroSection />
            <Features />
            <HowItWorks />
            <FrequentAskedQuestions />
            <Newsletter />
            <InterestFormSection />
            <Footer />
        </div>
    )
}
