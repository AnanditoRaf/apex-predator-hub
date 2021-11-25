import { useLocation } from "react-router-dom";
import "./NewsDetail.css";
import NewsDetailed from "../component/NewsDetailed";

export default function NewsDetail() {
    const { state } = useLocation();
    return (
      <div style = {{display: "flex", margin: "auto", justifyContent: "center"}}>
        <NewsDetailed
              imgNewsDetail={state.img}
              header={state.title}
              short_desc={state.short_desc}
              link={state.link}
            />
      </div>
    );
  }