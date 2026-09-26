import { Zap, Smartphone, ShoppingCart, ClipboardList, Wrench, Lock } from 'lucide-react';
import CaseStudyDetail from '../../components/CaseStudyDetail';

export default function K2TradersPage() {
  return (
    <CaseStudyDetail
      slug="K2TradersCase"
      client="K2 Traders"
      service="E-commerce website"
      h1="An online shop that’s"
      h1Accent="quick and easy to buy from."
      intro="K2 Traders needed a new online shop that was fast, simple to buy from on a phone, and cheap to run. We built it from scratch, with no monthly hosting bill."
      facts={[
        ['Client', 'K2 Traders'],
        ['Industry', 'Retail'],
        ['What we did', 'E-commerce website'],
        ['Hosting', 'No monthly bill'],
      ]}
      image="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979152/k2_traders_vj05aq.png"
      imageAlt="K2 Traders website homepage and product navigation"
      problem={{
        title: 'A shop that needed to be simple to buy from',
        body: 'K2 Traders wanted to sell online without a slow, cluttered shop, a fiddly checkout on phones, or an expensive platform they’d be locked into.',
        needs: [
          'Pages that load quickly, especially on a phone',
          'A clear path from product to checkout',
          'Orders recorded cleanly in one place',
          'Low running costs and full ownership of the shop',
        ],
      }}
      built={{
        title: 'A fast shop they own outright',
        items: [
          { icon: Zap, title: 'Fast pages', body: 'Product pages load quickly, so shoppers browse without waiting.' },
          { icon: Smartphone, title: 'Designed for phones', body: 'Browsing, cart and checkout all work smoothly on a small screen.' },
          { icon: ShoppingCart, title: 'A simple checkout', body: 'Fewer steps from product to purchase, with a clear confirmation at the end.' },
          { icon: ClipboardList, title: 'Orders in one place', body: 'Orders and customer details are recorded reliably so the team can send them out quickly.' },
          { icon: Wrench, title: 'Easy to look after', body: 'Few moving parts, so there’s less to break and less to pay for.' },
          { icon: Lock, title: 'Safe and owned', body: 'Secure checkout for customers, and the shop belongs to K2 Traders, with no platform lock-in.' },
        ],
      }}
      phases={{
        title: 'How the shop came together',
        items: [
          { time: 'Phase 1', title: 'Planning', body: 'Agreed the products, the shopping journey and what success looks like.' },
          { time: 'Phase 2', title: 'The shop itself', body: 'Built the product pages, cart and phone-friendly checkout.' },
          { time: 'Phase 3', title: 'Orders and stock', body: 'Set up a simple way to record orders and keep track of stock.' },
          { time: 'Phase 4', title: 'Checkout and confirmation', body: 'Polished the checkout and added a clear order confirmation.' },
          { time: 'Phase 5', title: 'Testing', body: 'Tested on different phones and computers and sped up the key pages.' },
        ],
      }}
      challenges={[
        { challenge: 'Keeping the shop fast on mobile data', solution: 'We kept pages light and loaded products efficiently, so they appear quickly even on a weak signal.' },
        { challenge: 'Stopping people dropping out at checkout', solution: 'We cut unnecessary steps and made each stage of the checkout clear.' },
        { challenge: 'Keeping running costs low', solution: 'We chose a setup with no monthly hosting bill and very little maintenance.' },
        { challenge: 'Clean order records', solution: 'We checked details as they’re entered, so orders arrive complete and tidy.' },
      ]}
      results={{
        title: 'A shop that’s quick to buy from and cheap to run',
        items: [
          'Faster pages across the shop',
          'A simple checkout on a phone',
          'Orders recorded cleanly in one place',
          'No monthly hosting bill, and no platform lock-in',
        ],
      }}
      related={{ text: 'Want more customers finding and buying from your website?', href: '/services/shiftbuild', label: 'See how we help you get found' }}
      cta={{ title: 'Is your website making it easy to buy?', text: 'Get a free check. We’ll show you what’s stopping visitors becoming customers, and the simplest way to fix it.' }}
    />
  );
}
