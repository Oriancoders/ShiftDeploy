import { getInsightList } from '../../src/lib/insightsData';

export const revalidate = 3600;

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
    '> Performance-first web agency. We make websites faster, turn more of their',
    '> traffic into enquiries, and automate the follow-up. UK-based, working',
    '> mostly with dental practices, clinics and service businesses.',
    '',
    '## Services',
    '',
    '- [ShiftSpeed](https://shiftdeploy.com/services/shiftspeed): Core Web Vitals and page speed optimisation',
    '- [ShiftConvert](https://shiftdeploy.com/services/shiftconvert): conversion rate optimisation',
    '- [ShiftBuild](https://shiftdeploy.com/services/shiftbuild): custom web development',
    '- [ShiftFlow](https://shiftdeploy.com/services/shiftflow): business process automation',
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
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
