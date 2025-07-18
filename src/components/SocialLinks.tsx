'use client';

import Image from 'next/image';

export default function SocialLinks() {
  const socials = [
    {
      name: "X",
      href: "https://twitter.com/tonegawa07",
      icon: (
        <Image 
          src="/x-logo.svg" 
          alt="X" 
          width={32}
          height={32}
          className="dark:brightness-0 dark:invert object-contain"
        />
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/tonegawa07",
      icon: (
        <Image 
          src="/github-logo.svg" 
          alt="GitHub" 
          width={32}
          height={32}
          className="dark:brightness-0 dark:invert object-contain"
        />
      )
    },
    {
      name: "SpeakerDeck",
      href: "https://speakerdeck.com/tonegawa07",
      icon: (
        <Image 
          src="/speakerdeck-logo.svg" 
          alt="Speaker Deck" 
          width={32}
          height={32}
          className="object-contain"
        />
      )
    },
    {
      name: "Zenn",
      href: "https://zenn.dev/tonegawa07",
      icon: (
        <Image 
          src="/zenn-logo.svg" 
          alt="Zenn" 
          width={32}
          height={32}
          className="object-contain"
        />
      )
    },
    {
      name: "note",
      href: "https://note.com/tonegawa07",
      icon: (
        <Image 
          src="/note-logo.svg" 
          alt="note" 
          width={32}
          height={32}
          className="dark:brightness-0 dark:invert object-contain"
        />
      )
    }
  ];

  return (
    <div className="mb-6 flex justify-center">
      <div className="grid grid-cols-5 gap-3 max-w-3xl">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 aspect-square flex flex-col items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
            aria-label={social.name}
          >
            <div className="relative w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors">
              {social.icon}
            </div>
            <span className="text-sm font-medium text-foreground/80">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
