import { Fragment } from "react";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const Anggota = [
    {
      nama: "Anandito Rafiansyah",
      id: 1,
      nim: "21120119130082",
      desc_profile: "I don't usually code, but at least i tried.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYm_7DhgayeLT2injUutShwtgU4VaZ0idDAmQKARub-qMNXIgBkE_wOW8viphTuMF-uxk&usqp=CAU",
    },
  ];

    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "white" }}>About Me</h1>
        </div>
        {Anggota.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile
            nama={item.nama}
            img={item.img}
            nim={item.nim}
            desc_profile={item.desc_profile}
            onClick={() => alert("Info " + item.id)}
          />
          {Anggota.length === index + 1 && <div style={{ marginBottom: 80 }} />}
          </Fragment>
        ))}
      </>  
    );
  }
  