import "./CardNews.css";

export default function CardNews({ title, imgNews, onClick }) {
  return (
    <div className="cardnews" onClick={onClick}>
      <img src={imgNews} alt="" className="imgNews" />
      <div className="space">
        <div>
          <p id="title">{title}</p>
        </div>
      </div>
    </div>
  );
}