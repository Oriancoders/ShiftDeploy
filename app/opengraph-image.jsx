import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ShiftDeploy – Performance-First Web Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#0C1F3A',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Orange top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #F76707, #D83A21)' }} />

        {/* Background dot grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, #4361EE 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Orange glow blob top-right */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,103,7,0.25) 0%, transparent 70%)',
        }} />

        {/* Blue glow blob bottom-left */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(67,97,238,0.2) 0%, transparent 70%)',
        }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '64px 80px', flex: 1, zIndex: 10 }}>

          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '60px' }}>
            {/* S logo mark */}
            <div style={{
              width: '52px', height: '52px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #F76707, #D83A21)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', fontWeight: 800, color: '#fff',
            }}>
              S
            </div>
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
              ShiftDeploy
            </span>
          </div>

          {/* Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{
              fontSize: '68px', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px',
              color: '#ffffff', marginBottom: '28px', maxWidth: '820px',
              display: 'flex', flexWrap: 'wrap',
            }}>
              Performance-First{' '}
              <span style={{ color: '#F76707' }}>Web Agency</span>
            </div>

            <div style={{
              fontSize: '26px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5,
              maxWidth: '680px', fontWeight: 400,
            }}>
              Faster websites. Higher conversions. Smarter automation.
            </div>
          </div>

          {/* Bottom row: services pills */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {['ShiftSpeed', 'ShiftConvert', 'ShiftBuild', 'ShiftFlow'].map((s) => (
              <div key={s} style={{
                padding: '8px 20px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.85)', fontSize: '16px', fontWeight: 500,
              }}>
                {s}
              </div>
            ))}
            <div style={{
              marginLeft: 'auto',
              fontSize: '17px', color: 'rgba(255,255,255,0.45)', fontWeight: 400,
            }}>
              shiftdeploy.com
            </div>
          </div>

        </div>
      </div>
    ),
    { ...size }
  );
}
