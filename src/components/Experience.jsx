import { Building2 } from "lucide-react";

const bullets = [
  "Developed scalable, responsive web apps using React.js, Next.js, TypeScript, HTML5, and CSS3, delivering enterprise-grade UI modules.",
  "Integrated 10+ REST APIs using Axios and Fetch API for real-time frontend-backend communication.",
  "Implemented state management with Redux Toolkit and Context API for predictable, maintainable state across complex features.",
  "Built a reusable component library with Material UI, reducing development time by 20% across teams.",
  "Optimized application performance with code splitting, lazy loading, and memoization (useMemo, useCallback).",
  "Collaborated with backend, QA, and UX teams in Agile/Scrum, delivering production features on schedule.",
  "Participated in code reviews, enforced clean code standards, and maintained well-documented Git/GitHub repos.",
  "Gained exposure to CI/CD pipelines with GitHub Actions and modern build tools (Webpack, Vite).",
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="label">Work History</p>
        <h2 className="heading">Experience</h2>
        <p className="subtext">Companies I've worked at and projects I've shipped to production.</p>
        <div style={{marginTop:48,borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",padding:32,boxShadow:"var(--shadow-card)"}}>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:16}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:16}}>
              <div style={{width:48,height:48,borderRadius:12,background:"var(--gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary-fg)"}}><Building2 size={24}/></div>
              <div>
                <h3 style={{fontSize:24,fontWeight:700}}>Gove Technologies</h3>
                <p style={{fontSize:14,color:"var(--fg2)"}}>Full-time · Product Company</p>
              </div>
            </div>
            <span style={{borderRadius:999,background:"rgba(34,197,94,.1)",padding:"4px 12px",fontSize:12,fontWeight:500,color:"var(--success)"}}>Currently Here</span>
          </div>
          <div style={{marginTop:24,display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px 16px",fontSize:14,borderTop:"1px solid var(--border)",paddingTop:24}}>
            <span style={{fontWeight:600}}>Junior Software Developer</span>
            <span style={{color:"var(--fg2)"}}>Aug 2024 – Present</span>
            <span style={{color:"var(--fg2)"}}>· Chennai, India</span>
            <span style={{marginLeft:"auto",borderRadius:6,background:"rgba(108,60,224,.1)",padding:"4px 8px",fontSize:12,fontWeight:500,color:"var(--primary)"}}>~2 Years</span>
          </div>
          <p style={{marginTop:16,color:"var(--fg2)"}}>Building scalable, production-ready web applications using React.js and Next.js. Working end-to-end from architecture to deployment in an Agile/Scrum environment.</p>
          <ul style={{marginTop:24,display:"flex",flexDirection:"column",gap:12,listStyle:"none",padding:0}}>
            {bullets.map((b,i)=>(
              <li key={i} style={{display:"flex",gap:12,fontSize:14,color:"var(--fg2)"}}>
                <span style={{marginTop:8,width:6,height:6,borderRadius:"50%",background:"var(--primary)",flexShrink:0}}/>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
