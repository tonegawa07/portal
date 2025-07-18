import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 pb-12">
        <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4 md:px-6">
          <ProfileCard />
          <SocialLinks />
        </div>
      </main>
    </div>
  );
}