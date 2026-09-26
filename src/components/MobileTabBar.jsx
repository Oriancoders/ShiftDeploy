'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { House, LayoutGrid, Briefcase, Phone, ArrowRight } from 'lucide-react';

const tabs = [
  { href: '/', label: 'Home', icon: House },
  { href: '/services', label: 'Services', icon: LayoutGrid },
  { href: '/ContactUs', label: 'Free check', icon: ArrowRight, primary: true },
  { href: '/missions', label: 'Our work', icon: Briefcase },
  { href: 'tel:+447311126710', label: 'Call', icon: Phone },
];

const swipePages = tabs.filter((t) => !t.href.startsWith('tel:')).map((t) => t.href);

function startsInHorizontalScroller(el) {
  for (let node = el; node && node !== document.body; node = node.parentElement) {
    const { overflowX } = getComputedStyle(node);
    if ((overflowX === 'auto' || overflowX === 'scroll') && node.scrollWidth > node.clientWidth) return true;
  }
  return false;
}

// Swipe left/right between tab pages. Ignores swipes on carousels and near screen
// edges (the OS back gesture), and only acts on clearly horizontal movement.
function useTabSwipe(pathname, router) {
  useEffect(() => {
    const index = swipePages.indexOf(pathname);
    if (index === -1) return;
    let start = null;

    const onStart = (e) => {
      const t = e.touches[0];
      if (window.innerWidth >= 1024 || e.touches.length > 1) return;
      if (t.clientX < 24 || t.clientX > window.innerWidth - 24) return;
      if (startsInHorizontalScroller(e.target)) return;
      start = { x: t.clientX, y: t.clientY, time: Date.now() };
    };
    const onEnd = (e) => {
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const quick = Date.now() - start.time < 600;
      start = null;
      if (!quick || Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy) * 2) return;
      const next = dx < 0 ? index + 1 : index - 1;
      if (next >= 0 && next < swipePages.length) router.push(swipePages[next]);
    };

    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [pathname, router]);
}

// Thumb-reach navigation for phones: primary actions sit at the bottom edge (Fitts's law).
export default function MobileTabBar() {
  const pathname = usePathname();
  const router = useRouter();
  useTabSwipe(pathname, router);

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
