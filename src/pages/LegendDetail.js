import { useLocation } from "react-router-dom";
import "./LegendDetail.css";
import Legend from "../component/Legend";

export default function LegendDetail() {
  const { state } = useLocation();
  return (
    <div>
      <Legend
            name={state.char}
            descr={state.desc}
            imglegend={state.legendphoto}
            summary={state.summary}
          />
    </div>
  );
}
