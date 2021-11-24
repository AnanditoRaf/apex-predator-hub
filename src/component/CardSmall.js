import "./CardSmall.css";

export default function CardSmall({ char, desc, legendphoto, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={legendphoto} alt="" className="legendphoto" />
      <div className="description">
        <div>
          <p id="char">{char}</p>
          <p id="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}
