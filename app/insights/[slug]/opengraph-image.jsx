import { ImageResponse } from 'next/og';
import { sanityClient, isSanityConfigured } from '../../../src/lib/sanity';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function getPostTitle(slug) {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]{ title, excerpt, "author": author->name, "category": categories[0]->title }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export async function generateImageMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostTitle(slug);
  return [{ id: slug, alt: post?.title || 'ShiftDeploy Insights' }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = await getPostTitle(slug);

  const title = post?.title || 'ShiftDeploy Insights';
  const excerpt = post?.excerpt || 'Expert insights on web performance, CRO, and digital growth.';
  const author = post?.author || 'ShiftDeploy';
  const category = post?.category || 'Insights';

  // Truncate title for display
  const displayTitle = title.length > 60 ? title.slice(0, 57) + '...' : title;
  const displayExcerpt = excerpt.length > 120 ? excerpt.slice(0, 117) + '...' : excerpt;

  return new ImageResponse(
    (
      <div style={{ width:'1200px',height:'630px',display:'flex',flexDirection:'column',background:'#0C1F3A',position:'relative',overflow:'hidden',fontFamily:'Inter,system-ui,sans-serif' }}>
        <div style={{ position:'absolute',top:0,left:0,right:0,height:'6px',background:'linear-gradient(90deg,#F76707,#D83A21)' }} />
        <div style={{ position:'absolute',inset:0,opacity:0.05,backgroundImage:'radial-gradient(circle,#4361EE 1px,transparent 1px)',backgroundSize:'48px 48px' }} />
        <div style={{ position:'absolute',top:'-60px',right:'-60px',width:'350px',height:'350px',borderRadius:'50%',background:'radial-gradient(circle,rgba(247,103,7,0.2) 0%,transparent 70%)' }} />
        <div style={{ position:'absolute',bottom:'-40px',left:'-40px',width:'250px',height:'250px',borderRadius:'50%',background:'radial-gradient(circle,rgba(67,97,238,0.15) 0%,transparent 70%)' }} />

        <div style={{ display:'flex',flexDirection:'column',padding:'60px 80px',flex:1,zIndex:10 }}>
          {/* Header */}
          <div style={{ display:'flex',alignItems:'center',gap:'14px',marginBottom:'40px' }}>
            <div style={{ width:'44px',height:'44px',borderRadius:'10px',background:'linear-gradient(135deg,#F76707,#D83A21)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',fontWeight:800,color:'#fff' }}>S</div>
            <span style={{ fontSize:'22px',fontWeight:700,color:'#ffffff' }}>ShiftDeploy Insights</span>
            <div style={{ marginLeft:'auto',padding:'4px 14px',borderRadius:'999px',background:'rgba(247,103,7,0.18)',border:'1px solid rgba(247,103,7,0.4)',fontSize:'13px',color:'#F76707',fontWeight:600 }}>{category}</div>
          </div>

          {/* Title */}
          <div style={{ flex:1,display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <div style={{ fontSize:'54px',fontWeight:800,lineHeight:1.1,letterSpacing:'-1.5px',color:'#ffffff',marginBottom:'20px',maxWidth:'1000px' }}>
              {displayTitle}
            </div>
            <div style={{ fontSize:'21px',color:'rgba(255,255,255,0.62)',lineHeight:1.55,maxWidth:'820px' }}>
              {displayExcerpt}
            </div>
          </div>

          {/* Footer */}
          <div style={{ display:'flex',alignItems:'center',gap:'20px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display:'flex',alignItems:'center',gap:'10px' }}>
              <div style={{ width:'32px',height:'32px',borderRadius:'50%',background:'linear-gradient(135deg,#4361EE,#0C1F3A)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',fontWeight:700,color:'#fff' }}>
                {author.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize:'16px',color:'rgba(255,255,255,0.7)',fontWeight:500 }}>{author}</span>
            </div>
            <div style={{ marginLeft:'auto',fontSize:'15px',color:'rgba(255,255,255,0.38)' }}>shiftdeploy.com/insights</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
