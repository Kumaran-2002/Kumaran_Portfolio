import { ExternalLink } from "lucide-react";

const projects = [
  { name:"MoviX — Movie Streaming UI", tag:"Personal · Live",
    desc:"Feature-rich movie browsing platform with search, pagination, favorites, client-side auth, and protected routes built on TMDB REST APIs. Reduced redundant API calls by ~25% via optimized state handling.",
    stack:["React.js","Vite","Context API","REST APIs"], live:"https://moviexplatform.netlify.app/" },
  { name:"Bill Pay — Toll Billing & Payment Platform", tag:"Gove Technologies · Production",
    desc:"Enterprise-level toll billing platform serving thousands of daily transactions across billing, transaction, and vendor payment modules. Reduced re-renders by ~30% using useMemo.",
    stack:["React.js","Next.js","TypeScript","Material UI","Redux Toolkit"] },
  { name:"Inventory Management System", tag:"Gove Technologies · Production",
    desc:"Full-featured inventory system with dynamic product configuration, CRUD ops, stock traceability, item history logs, and real-time stock status updates across 5+ modules.",
    stack:["React.js","Material UI","REST APIs","Redux","SQL/NoSQL"] },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{background:"var(--bg2)"}}>
      <div className="container">
        <p className="label">Portfolio</p>
        <h2 className="heading">Projects</h2>
        <p className="subtext">Production applications and personal projects I've designed, built, and shipped.</p>
        <div className="projects-grid" style={{marginTop:48}}>
          {projects.map(p=>(
            <article key={p.name} style={{borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",padding:24,boxShadow:"var(--shadow-card)",transition:"all .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(108,60,224,.4)";e.currentTarget.style.transform="translateY(-4px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:12,fontFamily:"var(--font-mono)",color:"var(--primary)"}}>{p.tag}</span>
                {p.live&&<a href={p.live} target="_blank" rel="noreferrer" style={{color:"var(--fg3)"}}><ExternalLink size={16}/></a>}
              </div>
              <h3 style={{marginTop:12,fontSize:18,fontWeight:700}}>{p.name}</h3>
              <p style={{marginTop:8,fontSize:14,color:"var(--fg2)",lineHeight:1.6}}>{p.desc}</p>
              <div style={{marginTop:16,display:"flex",flexWrap:"wrap",gap:8}}>
                {p.stack.map(s=>(<span key={s} style={{borderRadius:6,background:"rgba(108,60,224,.1)",padding:"4px 8px",fontSize:12,fontWeight:500,color:"var(--primary)"}}>{s}</span>))}
              </div>
              {p.live&&<a href={p.live} target="_blank" rel="noreferrer" style={{marginTop:16,display:"inline-flex",alignItems:"center",gap:8,fontSize:14,fontWeight:500,color:"var(--primary)"}}>Live Demo <ExternalLink size={14}/></a>}
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        @media(max-width:1024px){.projects-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.projects-grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}
