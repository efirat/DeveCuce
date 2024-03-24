import React, { useEffect,useState } from "react";
import DeveCuce from "./DeveCuce";


function App() {
  //Deve - Cuce Degerlerini alir
  const [deger, setDeger] = useState("Oyun Başlıyor");

  //Puan Bilgisini Tutar
  const [puan, setPuan] = useState(0);

  //Cevabı Tutar
  const [click, setClick] = useState(null);


  //Her 2 sn. rastgele Deve / Cuce degeri dondurur
  useEffect(() => {
    const interval = setInterval(() => {
      const rastgele = Math.floor(Math.random() * 2);
      setDeger(rastgele === 0 ? "Deve" : "Cüce");
      setClick(null);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  //Deve butonu tiklandiginda
  const handleDeveClick = () => {
    if(click===null){
      if (deger === "Deve") {
        setClick(true);
        setPuan(puan + 1);
      } else {
        setClick(false);
        setPuan(puan - 1);
      }
    }
  };

  //Cuce butonu tiklandiginda
  const handleCuceClick = () => {
    if(click===null){
      setClick(true);
      if (deger === "Cüce") {
          setClick(true);
          setPuan(puan + 1);
      } else {
          setClick(false);
          setPuan(puan - 1);
      }
    }
  };


  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1>Deve Cüce Oyunu</h1>
          <p>Ekranda gösterilen resime göre doğru butona basarak puan kazanmaya çalışın!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
            <div className="m-3 badge text-bg-secondary">Puan: {puan}</div>
        </div>
        <div className="col-12 text-center">
          <DeveCuce deger={deger} click={click}/>
        </div>
        <div className="col-12 text-center">
          <button className="m-1 btn btn-secondary" onClick={handleDeveClick}>Deve</button>
          <button className="m-1 btn btn-primary" onClick={handleCuceClick}>Cüce</button>
        </div>
      </div>


    </div>
  );
}

export default App;
