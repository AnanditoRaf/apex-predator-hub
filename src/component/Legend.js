import "./Legend.css";

export default function Legend({ name, descr, imglegend, summary, onClick }) {
  return (
    <div className="legend" onClick={onClick}>
      <img src={imglegend} alt="" className="imglegend" />
      <div className="description">
        <div>
          <p id="name">{name}</p>
          <p id="descr">{descr}</p>
          <p id="summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}