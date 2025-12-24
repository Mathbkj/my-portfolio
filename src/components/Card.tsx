interface ICard {
  title: string;
  subtitle: string;
  className?: string;
}
export function Card({ title, subtitle, className }: ICard) {
  return (
    <div
      className={`bg-gray-50 rounded-lg p-6 border border-gray-200 ${
        className ?? ""
      }`}
    >
      <h3 className="text-xl font-bold text-orange-400 font-urbanist mb-2">
        {title}
      </h3>
      <p className="text-gray-700 font-urbanist">{subtitle}</p>
    </div>
  );
}
