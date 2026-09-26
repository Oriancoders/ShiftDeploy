'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, LayoutGrid, Briefcase, Phone, ArrowRight } from 'lucide-react';

const tabs = [
  { href: '/', label: 'Home', icon: House },
  { href: '/services', label: 'Services', icon: LayoutGrid },
  { href: '/ContactUs', label: 'Free check', icon: ArrowRight, primary: true },
  { href: '/missions', label: 'Our work', icon: Briefcase },
  { href: 'tel:+447311126710', label: 'Call', icon: Phone },
];

// Thumb-reach navigation for phones: primary actions sit at the bottom edge (Fitts's law).
export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick links"
      className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5">
        {tabs.map(({ href, label, icon: Icon, primary }) => {
          const active = href === pathname;
          if (primary) {
            return (
              <li key={href} className="flex justify-center">
                <Link
                  href={href}
                  prefetch={false}
                  className="-mt-5 flex flex-col items-center gap-1 text-[11px] font-bold text-primaryBlue"
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-primaryOrange text-white shadow-lg ring-4 ring-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  {label}
                </Link>
              </li>
            );
          }
          const Tag = href.startsWith('tel:') ? 'a' : Link;
          return (
            <li key={href}>
              <Tag
                href={href}
                {...(Tag === Link ? { prefetch: false } : {})}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-[60px] flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                  active ? 'text-primaryOrange' : 'text-gray-600'
                }`}
              >
                <Icon className="size-6" aria-hidden="true" />
                {label}
              </Tag>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
