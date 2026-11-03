interface FilterChipsProps {
  label: string;
  options: string[];
  active: string;
}

export function FilterChips({ label, options, active }: FilterChipsProps) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`chip${option === active ? " chip--active" : ""}`}
          aria-pressed={option === active}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
