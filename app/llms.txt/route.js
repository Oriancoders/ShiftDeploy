import { getInsightList } from '../../src/lib/insightsData';

export const revalidate = 60;

/**
 * /llms.txt - a machine-readable map of the site for AI agents.
 *
 * Worth being honest about the value: measured studies in 2026 put direct
 * fetches of this file at a fraction of a percent of AI crawler traffic, so
 * this is not a ranking lever. It is cheap, it is generated rather than
 * hand-maintained (so it cannot go stale), and coding agents and IDE tools do
 * read it. Treat it as a low-cost option on future adoption, not a tactic.
 */
export async function GET() {
  const posts = await getInsightList();

  const lines = [
    '# ShiftDeploy',
    '',
    '> ShiftDeploy helps UK service businesses stop losing work. We start with the',
    '> problem, then fix it with the right tool: an AI receptionist and telephone',
    '> answering, WhatsApp automation, mobile and web apps, web design and local SEO,',
    '> or business automation. Free check, plain English.',
    '',
    '## Services',
    '',
    '- [AI receptionist and call answering](https://shiftdeploy.com/digital-receptionist): answers calls day or night and books appointments',
    '- [Get found by more customers](https://shiftdeploy.com/services/shiftbuild): local SEO, Google Business Profile, Google reviews and web design',
    '- [Never miss a call or enquiry](https://shiftdeploy.com/services/shiftspeed): AI receptionist, missed call text back, WhatsApp automation',
    '- [Win more jobs](https://shiftdeploy.com/services/shiftconvert): quote follow-ups, appointment reminders, online booking',
    '- [Automate your admin](https://shiftdeploy.com/services/shiftflow): invoice automation, AI assistants, apps, website maintenance',
    '- WhatsApp and chat automation: instant replies, bookings and reminders on WhatsApp',
    '- Mobile and web apps: booking, ordering and customer apps',
    '- Business automation: appointment reminders, enquiry follow-ups and invoice chasers',
    '',
    '## Products',
    '',
    '- [Review Your Doctor](https://shiftdeploy.com/review-your-doctor): Google review and patient feedback software for UK private clinics',
    '',
    '## Our work',
    '',
    '- [Case studies](https://shiftdeploy.com/missions)',
    '',
    '## Insights',
    '',
    ...posts.slice(0, 40).map((p) => {
      const summary = String(p.excerpt || '').replace(/\s+/g, ' ').trim();
      return `- [${p.title}](https://shiftdeploy.com/insights/${p.id})${summary ? `: ${summary}` : ''}`;
    }),
    '',
    '## Contact',
    '',
    '- [Contact](https://shiftdeploy.com/ContactUs)',
    '- Email: contact@shiftdeploy.com',
    '- Phone: +44 7311 126710',
    '- [Free website audit](https://shiftdeploy.com/service-growth-audit)',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=60, must-revalidate',
    },
  });
}
