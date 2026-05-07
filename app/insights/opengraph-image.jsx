import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'ShiftDeploy Insights | Web Performance, CRO & Growth Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width:'1200px',height:'630px',display:'flex',flexDirection:'column',background:'#0C1F3A',position:'relative',overflow:'hidden',fontFamily:'Inter,system-ui,sans-serif' }}>
        <div style={{ position:'absolute',top:0,left:0,right:0,height:'6px',background:'linear-gradient(90deg,#F76707,#D83A21)' }} />
        <div style={{ position:'absolute',inset:0,opacity:0.06,backgroundImage:'radial-gradient(circle,#4361EE 1px,transparent 1px)',backgroundSize:'48px 48px' }} />
        <div style={{ position:'absolute',top:'-80px',right:'-80px',width:'400px',height:'400px',borderRadius:'50%',background:'radial-gradient(circle,rgba(247,103,7,0.25) 0%,transparent 70%)' }} />
        <div style={{ position:'absolute',bottom:'-60px',left:'-60px',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(67,97,238,0.2) 0%,transparent 70%)' }} />
        <div style={{ display:'flex',flexDirection:'column',padding:'64px 80px',flex:1,zIndex:10 }}>
          <div style={{ display:'flex',alignItems:'center',gap:'16px',marginBottom:'48px' }}>
            <div style={{ width:'48px',height:'48px',borderRadius:'10px',background:'linear-gradient(135deg,#F76707,#D83A21)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'26px',fontWeight:800,color:'#fff' }}>S</div>
            <span style={{ fontSize:'24px',fontWeight:700,color:'#ffffff' }}>ShiftDeploy</span>
            <div style={{ marginLeft:'12px',padding:'4px 14px',borderRadius:'999px',background:'rgba(247,103,7,0.18)',border:'1px solid rgba(247,103,7,0.4)',fontSize:'14px',color:'#F76707',fontWeight:600 }}>Blog</div>
          </div>
          <div style={{ flex:1,display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <div style={{ fontSize:'62px',fontWeight:800,lineHeight:1.05,letterSpacing:'-2px',color:'#ffffff',marginBottom:'24px',maxWidth:'900px' }}>ShiftDeploy <span style={{ color:'#F76707' }}>Insights</span></div>
            <div style={{ fontSize:'24px',color:'rgba(255,255,255,0.68)',lineHeight:1.5,maxWidth:'700px' }}>Expert articles on web performance, CRO, automation, and digital growth.</div>
          </div>
          <div style={{ display:'flex',gap:'12px',alignItems:'center' }}>
            {['Web Performance','CRO','Automation','Growth'].map((tag) => (
              <div key={tag} style={{ padding:'6px 16px',borderRadius:'999px',border:'1px solid rgba(255,255,255,0.15)',background:'rgba(255,255,255,0.06)',color:'rgba(255,255,255,0.75)',fontSize:'15px' }}>{tag}</div>
            ))}
            <div style={{ marginLeft:'auto',fontSize:'16px',color:'rgba(255,255,255,0.4)' }}>shiftdeploy.com/insights</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
