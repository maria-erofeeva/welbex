import React from "react";
import StaticInfo from "./StaticInfo";
import Consult from "./Consult";
import Gradient from "./Gradient";

const Main = () => {
  return (
    <section className='main'>
      <StaticInfo className="info"></StaticInfo>
      <Consult className="consult"></Consult>
      <Gradient></Gradient>
    </section>
  );
};

export default Main;
