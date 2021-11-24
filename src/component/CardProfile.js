import "./CardProfile.css";

export default function CardProfile({ nama, nim, img, desc_profile, size, color, onClick }) {
  return (
    <div className="cardProfile" onClick={onClick}>
      <img src={img} alt="" className="userimg" />
      <div className="description">
        <div>
                <p id="nama">{nama}</p>
                <p id="nim">{nim}</p>
                <p id="desc_profile">{desc_profile}</p>
                </div>
            </div>
        </div>
  );
}
