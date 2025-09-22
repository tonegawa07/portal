import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';
import SocialLinks from '@/components/SocialLinks';
import TalksSection from '@/components/TalksSection';
import ZennArticles from '@/components/ZennArticles';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-16 pb-12 flex-1">
        <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4 md:px-6">
          <ProfileCard />
          <SocialLinks />
          <TalksSection />
          <ZennArticles />
        </div>
      </main>
      <Footer />
    </div>
  );
}