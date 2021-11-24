import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardNews from "../component/CardNews"

export default function Todo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.mozambiquehe.re/news?lang=en-us&auth=edWbQGfu6eZOqeEqXgCo")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
          <p id="News">News Feed</p>
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`NewsDetail/${item.title}`, { state: item })}
          style={{ backgroundColor: "salmon", cursor: "pointer" }}
        >
          <CardNews
          title={item.title}
          short_desc={item.short_desc}
          imgNews={item.img}
          link={item.link}
          />
        </div>
      ))}
    </>
  );
}