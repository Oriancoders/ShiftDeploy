import React from 'react';
import SectionHeader from './ProblemSolution/SectionHeader';
import ProblemCard from './ProblemSolution/ProblemCard';
import SolutionCard from './ProblemSolution/SolutionCard';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <SectionHeader />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl z-20 items-center justify-center font-black text-xl text-gray-400 border-4 border-gray-50">
            VS
          </div>

          <ProblemCard />
          <SolutionCard />
        </div>
      </div>
    </section>
  );
}
