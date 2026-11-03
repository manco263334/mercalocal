export default function Loading() {
  return (
    <div className="container loading" role="status" aria-label="Cargando contenido">
      <div className="skeleton skeleton--title" />
      <div className="grid grid--products">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="skeleton skeleton--card" />
        ))}
      </div>
    </div>
  );
}
