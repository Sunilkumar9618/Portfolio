import '@/styles/globals.css';

import { PropsWithChildren } from 'react';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const RootLayout = ({ children }: PropsWithChildren) => {
  const siteUrl = 'https://portfolio-omega-nine-94k6f0ikcc.vercel.app/'; // update later
  const logoPath = `${siteUrl}/favicon/logo.png`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sunil Kumar',
      jobTitle: 'Aspiring Full-Stack Developer',
      url: siteUrl,
      image: logoPath,
      sameAs: [
        'https://github.com/your-github-username',
        'https://www.linkedin.com/in/your-linkedin-username',
      ],
      description:
        'Sunil Kumar — Computer Science and Engineering student passionate about building clean, user-friendly web applications using modern web technologies.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Sunil Kumar | Full-Stack Developer Portfolio',
      url: siteUrl,
      publisher: {
        '@type': 'Person',
        name: 'Sunil Kumar',
        url: siteUrl,
        image: logoPath,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      image: logoPath,
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>Sunil Kumar | Full-Stack Developer in the Making</title>

        {/* Basic meta */}
        <meta
          name="description"
          content="Sunil Kumar — Computer Science and Engineering student exploring full-stack web development with React, Node.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Sunil Kumar, Full Stack Developer, React Developer, MERN Stack, Web Developer Portfolio, Computer Science Student"
        />
        <meta name="author" content="Sunil Kumar" />
        <meta name="theme-color" content="#0ea5a4" />

        {/* Favicons */}
        <link rel="icon" href="/favicon/logo.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sunil Kumar | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="A portfolio showcasing projects, skills, and learning journey of Sunil Kumar, a Computer Science engineering student and aspiring full-stack developer."
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={logoPath} />
        <meta
          property="og:site_name"
          content="Sunil Kumar Portfolio"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sunil Kumar | Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Computer Science student building modern web applications using React, Node.js, and the MERN stack."
        />
        <meta name="twitter:image" content={logoPath} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Preloads */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>

      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
