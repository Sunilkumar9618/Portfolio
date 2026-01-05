'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const educationData = [
  {
    id: 1,
    image: '/images/schoolq.jpg',
    degree: 'Bachelor of Engineering(B.E)',
    institution: 'PERI Institute of Technology, Chennai',
    duration: '2022-2026',
    description:
      'Pursuing a Bachelor of Engineering in Computer Science and Engineering (CSE) with a strong focus on software development and problem-solving. Coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Web Technologies. Gained practical experience through academic projects and hands-on development, strengthening programming, analytical, and system design skills.'
  },
  {
    id: 2,
    image: '/images/schools.jpeg',
    degree: 'Intermediate (12th Grade)',
    institution: 'Kalaimagal Vidhya Mandir Matriculation Higher Secondary School, Chennai',
    duration: '2020 – 2022',
    description:
      'Completed Higher Secondary education at Kalaimagal Vidhya Mandir Matriculation Higher Secondary School with an overall score of 76.5%. Built a strong academic foundation in mathematics, logical reasoning, and analytical thinking, which later supported my transition into computer science and software development.'
  },
];
export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold"
        >
          Education
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col rounded-lg border p-5 transition hover:shadow-md"
            >
              <div className="relative mb-4 h-[230px] w-full overflow-hidden rounded-lg">
                <Image
                  src={edu.image}
                  alt={edu.degree}
                  fill
                  className="rounded-lg object-cover transition-transform hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-muted-foreground mb-3 text-xs">
                {edu.duration}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
