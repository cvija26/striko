import React, { useEffect, useState } from "react";
import GreenTable from '../components/GreenTable';
import ProcessedViolation from "../components/ProcessedViolation";
import MostViolation from "../components/MostViolation";
import "../styles/App.css"
import axios from "axios";

const Second = () => {
  const [data, setData] = useState([]);
  const title = "Izvještaj svih verifikovanih prekršaja 26.09.2022."
  const titleCity = 'Grad sa najviše prekršaja';
  const titleRadar = 'Radar sa najviše prekršaja';
  const textCity = 'Banja Luka';
  const textRadar = 'Br. B. Banja Luka';
  const num1 = '21';
  const num2 ='222';

  
 useEffect(() => {
   axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((res) => {
       setData(res.data);
       
     })
     .catch((error) => {
        console.log(error)
     });
 }, []);
  return (
    <div className="second-com">
      <div className="left-con">
      <GreenTable data={data}  title={title} />
      </div>
      <div className="right-con">
        
      <ProcessedViolation />
      <MostViolation title={titleCity} text={textCity} num={num1} />
      <MostViolation title={titleRadar} text={textRadar} num={num2} />
      
      </div>
    </div>
  )
}

export default Second