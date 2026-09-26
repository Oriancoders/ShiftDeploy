import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker, SiKubernetes, SiVercel } from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa6';

const technologies = [
  ['React', SiReact], ['Next.js', SiNextdotjs], ['Node.js', SiNodedotjs],
  ['MongoDB', SiMongodb], ['Docker', SiDocker], ['Kubernetes', SiKubernetes],
  ['AWS', FaAws], ['Microsoft Azure', FaMicrosoft], ['Vercel', SiVercel],
];

export default function TrustStrip() {
  return (
    <section className="bg-gray-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-semibold text-primaryBlue mb-8 text-center">Technologies We Work With</h2>
        <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-5 sm:gap-8">
          {technologies.map(([name, Icon]) => (
            <li key={name} className="flex flex-col items-center gap-2 text-gray-600">
              <Icon className="size-8 sm:size-10" aria-hidden="true" />
              <span className="text-xs text-center">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
