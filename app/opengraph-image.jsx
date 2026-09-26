import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ShiftDeploy - AI receptionist, web design and automation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// WhatsApp and some chat apps crop the preview to a centre square, so the logo sits in the middle.
export default async function Image() {
  const logo = await fetch(new URL('../public/shiftdeploy-logo.png', import.meta.url)).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          position: 'relative',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '14px', background: '#F76707', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '14px', background: '#0C1F3A', display: 'flex' }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={560} height={127} alt="" />
        <div style={{ marginTop: '44px', fontSize: '30px', fontWeight: 600, color: '#0C1F3A', display: 'flex' }}>
          AI · WhatsApp · Apps · Websites · Automation
        </div>
        <div style={{ marginTop: '14px', fontSize: '24px', color: '#F76707', display: 'flex' }}>
          Stop losing customers you never knew you had.
        </div>
      </div>
    ),
    { ...size }
  );
}
