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
      <main className="pt-16 pb-12 flex-1">
        <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4 md:px-6">
          <section id="about">
            <ProfileCard />
            <SocialLinks />
          </section>
          <section id="output" className="mt-8 md:mt-12">
            <h2 className="text-2xl font-semibold mb-6 md:mb-10 text-center">Output</h2>
            <TalksSection />
            <DecksSection />
            <ArticlesSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}