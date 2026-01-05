'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Section Title */}
      <SectionHeading heading="About Me" />

      {/* About Description */}
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">
          Hi, I'm <strong>Sunilkumar</strong> — a Computer Science engineering student who enjoys
          turning ideas into clean, functional web applications.
        </p>

        <p className="mb-4">
          I primarily work with <strong>JavaScript, React, Next.js, and Node.js</strong>, and I like
          building full-stack features that focus on clarity, performance, and real user needs.
          Recently, I've worked on projects involving <strong>maps, APIs, workflows, and scalable UI
          components</strong>.
        </p>

        <p className="mb-4">
          I have a strong foundation in <strong>Data Structures, REST APIs, and system design
          basics</strong>, which helps me write efficient and maintainable code. I enjoy debugging,
          breaking down problems, and understanding how things work under the hood.
        </p>

        <p className="mb-4">
          Outside of coding, I like exploring new technologies, refining my problem-solving skills,
          and continuously improving my development workflow — one feature at a time.
        </p>
      </div>

      {/* Skills Section */}
      <Skills />
    </motion.section>
  );
}
