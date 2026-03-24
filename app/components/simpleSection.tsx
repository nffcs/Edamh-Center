export default function SimpleSection({
  id,
  title,
  text,
}: {
  id: string;
  title: string;
  text: string;
}) {
  return (
    <section id={id} className="simple-section">
      <div className="container centered">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
