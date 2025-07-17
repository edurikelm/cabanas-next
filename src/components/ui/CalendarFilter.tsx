export default function CalendarFilter({ cabanas }: { cabanas: { value: string; color: string }[] }) {


  return (
    <div>
      {
        cabanas.map((item) => (
          <button key={item.value} className={`${item.color} btn btn-soft`}>
            {item.value}
          </button>
        ))
      }
    </div>
  );
}
