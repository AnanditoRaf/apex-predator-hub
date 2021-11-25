
export default function NewsDetailed({ header, short_desc, imgNewsDetail, link, onClick }) {
    return (
      <div className="newsdetail" onClick={onClick}>
        <img src={imgNewsDetail} alt="" className="imgNewsDetail" />
        <div className="space">
          <div>
            <p id="header">{header}</p>
            <p id="short_desc">{short_desc}</p>
            <a href={link} id="url">Click here for more information</a>
          </div>
        </div>
      </div>
    );
  }