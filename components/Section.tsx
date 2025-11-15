import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-md md:text-lg text-gray-500">{subtitle}</p>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;