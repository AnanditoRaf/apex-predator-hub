import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardNews from "../component/CardNews"
import "./News.css";

export default function News() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.mozambiquehe.re/news?lang=en-us&auth=edWbQGfu6eZOqeEqXgCo")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
          <p id="news">News Feed</p>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ cursor: "pointer" }}
        >
          <CardNews
          title={item.title}
          imgNews={item.img}
          onClick={() => navigate(`NewsDetail/${item.title}`, { state: item })}
          />
        </div>
      ))}
    </>
  );
}