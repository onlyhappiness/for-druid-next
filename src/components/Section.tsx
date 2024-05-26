const Section = ({ title, items }) => (
  <section className="flex flex-col p-3 py-7">
    <span className="font-semibold">{title}</span>
    <div className="flex flex-col gap-3 pt-3">
      {items.map((item) => (
        <div
          className="font-normal border-b py-3 cursor-pointer"
          key={item.label}
        >
          {item.label}
        </div>
      ))}
    </div>
  </section>
);

export default Section;
