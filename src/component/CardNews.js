import "./CardNews.css";

export default function CardSmall({ title, short_desc, imgNews, link, onClick }) {
  return (
    <div className="cardnews" onClick={onClick}>
      <img src={imgNews} alt="" className="imgNews" />
      <div className="description">
        <div>
          <p id="title">{title}</p>
          <p id="short_desc">{short_desc}</p>
          <p id="link">{link}</p>
        </div>
      </div>
    </div>
  );
}