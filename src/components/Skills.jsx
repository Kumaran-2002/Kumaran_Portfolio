import { useState } from "react";

const groups = [
  { name:"Frontend", items:["React.js","Next.js","TypeScript","JavaScript (ES6+)","HTML5","CSS3","Material UI","Responsive Design"] },
  { name:"State Management", items:["Redux Toolkit","Context API","useState","useEffect","useMemo","useCallback"] },
  { name:"API & Integration", items:["REST APIs","Axios","Fetch API","JSON"] },
  { name:"Backend Exposure", items:["Node.js","Express.js","SQL","MongoDB"] },
  { name:"Performance", items:["Code Splitting","Lazy Loading","Memoization","Webpack","Vite"] },
  { name:"CI/CD & Tools", items:["Git","GitHub","GitHub Actions","Netlify","VS Code","Postman","Chrome DevTools"] },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  return (
    <section id="skills" className="section" style={{background:"var(--bg2)"}}>
      <div className="container">
        <p className="label">Tech Stack</p>
        <h2 className="heading">Skills & Technologies</h2>
        <p className="subtext">Tools and technologies I use to build fast, scalable, production-ready applications.</p>
        <div style={{marginTop:40,display:"flex",flexWrap:"wrap",gap:8}}>
          {groups.map((g,i)=>(
            <button key={g.name} onClick={()=>setActive(i)}
              style={{borderRadius:10,padding:"8px 16px",fontSize:14,fontWeight:500,border:active===i?"none":"1px solid var(--border)",
                background:active===i?"var(--primary)":"var(--card)",
                color:active===i?"var(--primary-fg)":"var(--fg2)",
                boxShadow:active===i?"var(--shadow-btn)":"none",transition:"all .2s"}}>
              {g.name} <span style={{marginLeft:8,fontSize:12,opacity:.7}}>{g.items.length}</span>
            </button>
          ))}
        </div>
        <div style={{marginTop:32,borderRadius:16,border:"1px solid var(--border)",background:"var(--card)",padding:32,boxShadow:"var(--shadow-card)"}}>
          <h3 style={{fontSize:20,fontWeight:700}}>{groups[active].name}</h3>
          <p style={{fontSize:14,color:"var(--fg2)"}}>{groups[active].items.length} technologies</p>
          <div style={{marginTop:24,display:"flex",flexWrap:"wrap",gap:8}}>
            {groups[active].items.map(t=>(
              <span key={t} style={{borderRadius:10,border:"1px solid var(--border)",background:"var(--bg)",padding:"8px 12px",fontSize:14,fontWeight:500,transition:"all .2s"}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
