import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';
import SocialLinks from '@/components/SocialLinks';
import TalksSection from '@/components/TalksSection';
import DecksSection from '@/components/DecksSection';
import ArticlesSection from '@/components/ArticlesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4 md:px-6">
          <section id="about">
            <ProfileCard />
            <SocialLinks />
          </section>
        </div>
        <section id="output" className="mt-8 md:mt-12 bg-secondary/50 py-8 md:py-12">
          <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4 md:px-6">
            <div className="mb-6 md:mb-10 text-center">
              <h2 className="text-2xl font-semibold">Output</h2>
              <div className="mt-3 mx-auto w-12 h-0.5 bg-primary/30 rounded-full" />
            </div>
            <TalksSection />
            <DecksSection />
            <ArticlesSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}