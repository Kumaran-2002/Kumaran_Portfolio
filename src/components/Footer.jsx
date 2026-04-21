export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--border)",padding:"32px 24px"}}>
      <div className="container" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:12,fontSize:14,color:"var(--fg2)"}}>
        <p>© {new Date().getFullYear()} Kumaran Balachandran. Built with React.</p>
        <p style={{fontFamily:"var(--font-mono)",fontSize:12}}>Crafted in Chennai 🇮🇳</p>
      </div>
    </footer>
  );
}
