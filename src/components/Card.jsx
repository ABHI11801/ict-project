const Card = ({ title, count, color }) => (
  <div className={`rounded-lg shadow-md p-4 text-white ${color}`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-2xl">{count}</p>
  </div>
);

export default Card;