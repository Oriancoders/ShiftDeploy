import { Activity, LayoutDashboard, SlidersHorizontal, CreditCard, Lock, BellRing } from 'lucide-react';
import CaseStudyDetail from '../../components/CaseStudyDetail';

export default function SlackerIOTPage() {
  return (
    <CaseStudyDetail
      slug="SlackerIOT"
      client="Slacker IoT"
      service="Web app development"
      h1="An EV charging platform,"
      h1Accent="built from scratch."
      intro="Slacker IoT needed one system to run their EV chargers, their customers and their payments. We built the whole platform, from the chargers to the dashboards and billing, in nine weeks."
      facts={[
        ['Client', 'Slacker IoT'],
        ['Industry', 'EV charging'],
        ['What we did', 'Web app development'],
        ['Timeline', '9 weeks'],
      ]}
      image="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978775/ev_dashboard_lak5oh.png"
      imageAlt="Slacker IoT EV charging dashboard showing battery, power and session data"
      problem={{
        title: 'No single place to see and run everything',
        body: 'Checking chargers meant manual checks on site, billing meant manual invoicing, and information was scattered across different places. That doesn’t work once you have more chargers and more customers.',
        needs: [
          'See every charger’s status live, without visiting the site',
          'Charge customers automatically for each session',
          'Give customers a simple way to see their charging',
          'Give the team one dashboard to run it all',
        ],
      }}
      built={{
        title: 'One platform for chargers, customers and payments',
        items: [
          { icon: Activity, title: 'Live charger status', body: 'Every charger reports its status in real time, so the team knows what’s happening without going on site.' },
          { icon: LayoutDashboard, title: 'A customer dashboard', body: 'Customers see their live charging session and their history in one simple place, on any phone.' },
          { icon: SlidersHorizontal, title: 'Admin controls', body: 'The team can monitor chargers, review sessions and act quickly, without digging through logs.' },
          { icon: CreditCard, title: 'Billing that runs itself', body: 'Each charging session is billed and paid automatically, with a clean record of every payment.' },
          { icon: BellRing, title: 'Early warnings', body: 'Problems with a charger are flagged to the team, so small issues are fixed before they grow.' },
          { icon: Lock, title: 'Secure sign-in', body: 'Customers and staff each see only what they should, keeping personal data safe.' },
        ],
      }}
      phases={{
        title: 'Five phases in nine weeks',
        items: [
          { time: '2 weeks', title: 'Chargers talking to the platform', body: 'Connected the chargers so they report their status reliably, and set up session tracking.' },
          { time: '3 weeks', title: 'The system behind it', body: 'Built the part that manages customers, sessions and records securely.' },
          { time: '2 weeks', title: 'Customer and admin dashboards', body: 'Built both dashboards, with live session views and controls for the team.' },
          { time: '1 week', title: 'Billing and payments', body: 'Added automatic billing and payment capture, with a full payment history.' },
          { time: '1 week', title: 'Testing and launch', body: 'Tested everything end to end and made sure it was stable for real use.' },
        ],
      }}
      challenges={[
        { challenge: 'Keeping live updates reliable, even on patchy networks', solution: 'We built the connection between chargers and platform so updates stay consistent when the signal drops.' },
        { challenge: 'Turning charging sessions into accurate bills', solution: 'We designed session tracking and billing together, so every payment matches a real session.' },
        { challenge: 'Giving the team a clear view', solution: 'We built an admin dashboard focused on what operators actually need to see and do.' },
        { challenge: 'Keeping customer data safe', solution: 'We added secure sign-in and different access levels for customers and staff.' },
      ]}
      results={{
        title: 'A platform the business can grow on',
        items: [
          'Live view of every charger and session',
          'Billing and payments that run themselves',
          'One dashboard for the whole team',
          'A clear, simple experience for customers',
        ],
      }}
      related={{ text: 'Need an app or platform built around how your business runs?', href: '/services/shiftflow', label: 'See apps and automation' }}
      cta={{ title: 'Need something built around your business?', text: 'Get a free check. Tell us how you work, and we’ll show you what an app or automation could take off your plate.' }}
    />
  );
}
