import React from "react";
import StaticInfo from "./StaticInfo";
import Consult from "./Consult";

const Main = () => {
  return (
    <section className='main'>
      <StaticInfo className="info"></StaticInfo>
      <Consult className="consult"></Consult>
      <div className='gradient'></div>
    </section>
  );
};

export default Main;
