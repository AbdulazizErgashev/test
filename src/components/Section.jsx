import React from "react";
import Left from "../img/left_dots.png";
import Left2 from "../img/left_dots2.png";
import Logo2 from "../img/logo2.png";
import Air from "../img/airbyte.png";
import Middle1 from "../img/middle_dots1.png";
import DbtCore from "../img/dbt_core.png";
import Middle2 from "../img/middle_dots2.png";
import Cube from "../img/cube.png";
import Arrow from "../img/iconArrow.png";
import Right from "../img/right_dots.png";
import icon1 from "../img/i1.png";
import icon2 from "../img/i2.png";
import icon3 from "../img/i3.png";
import icon4 from "../img/i4.png";
import icon5 from "../img/i5.png";
import icon6 from "../img/i6.png";
import icon7 from "../img/i7.png";
import icon8 from "../img/i8.png";
import BigQuery from "../img/BigQuery.png";
import Snowflake from "../img/Snowflake.png";

export default function Section() {
  return (
    <div className="bg-[#101416]">
      <div className="container">
        <h1 className="text-[#fff] text-[3.5rem]/[3.5rem] w-[36.625rem] pt-20">
          Mission Control for Your Data Pipelines
        </h1>
        <div className="py-10">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-7 p-8 bg-[#26272D] mt-14">
              <h1 className="text-[#fff] text-sm uppercase">Raw data</h1>
              <img src={Left} alt="" />
              {/*  */}
            </div>
            <img src={Left2} alt="" className="mt-16" />
            <div className="bg-[#421F8E] flex flex-col items-center gap-y-7 p-8">
              {/* <h1 className="text-sm text-[#fff] relative mr-[50rem]">Interactive demo</h1> */}
              <img src={Logo2} alt="" />
              <h1 className="text-sm text-[#fff]">Modern dataops cloud</h1>
              <div className="flex items-center gap-x-3 uppercase">
                <h1 className="text-sm bg-[#7D33FF] text-[#fff] rounded py-3 px-[5.77rem] ">
                  Collaborate
                </h1>
                <h1 className="text-sm bg-[#7D33FF] text-[#fff] rounded py-3 px-[7.075rem] ">
                  Govern
                </h1>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col gap-y-3 items-center p-6 bg-[#7D33FF] w-[9rem] rounded">
                  <h1 className="uppercase text-sm text-[#fff]">integrate</h1>
                  <h1 className="uppercase text-[0.438rem]/[0.5rem] text-[#fff]">
                    Runs
                  </h1>
                  <img src={Air} alt="" />
                </div>
                <img src={Middle1} alt="" />
                <div className="flex flex-col gap-y-3 items-center p-6 bg-[#7D33FF] w-[9rem] rounded">
                  <h1 className="uppercase text-sm text-[#fff]">transform</h1>
                  <h1 className="uppercase text-[0.438rem]/[0.5rem] text-[#fff]">
                    Runs
                  </h1>
                  <img src={DbtCore} alt="" />
                </div>
                <img src={Middle2} alt="" />
                <div className="flex flex-col gap-y-3 items-center p-6 bg-[#7D33FF] w-[9rem] rounded">
                  <h1 className="uppercase text-sm text-[#fff]">publish</h1>
                  <h1 className="uppercase text-[0.438rem]/[0.5rem] text-[#fff]">
                    Runs
                  </h1>
                  <img src={Cube} alt="" />
                </div>
              </div>
              <h1 className="uppercase bg-[#7D33FF] text-[#fff] text-sm py-2 px-[15.05rem] rounded">
                orchestrate
              </h1>
              <div className="flex items-center gap-x-6">
                <h1 className="uppercase text-sm text-[#fff]">
                  Security, observability, and management
                </h1>
                <img src={Arrow} alt="" />
              </div>
            </div>
            {/*  */}
            <img src={Right} alt="" className="mt-16" />
            <div className="flex flex-col items-center gap-y-12 p-8 bg-[#26272D] mt-14">
              <div className="flex flex-col items-center gap-y-3">
                <h1 className="text-sm text-[#fff] w-24 text-center uppercase">
                  Business Intelligence
                </h1>
                <div className="flex items-center gap-x-3">
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <h1 className="text-sm text-[#fff] w-24 text-center uppercase">
                  Embedded analytics
                </h1>
                <div className="flex items-center gap-x-3">
                  <img src={icon3} alt="" />
                  <img src={icon4} alt="" />
                  <img src={icon5} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <h1 className="text-sm text-[#fff] w-[6.5rem] text-center uppercase">
                  Notebooks & data apps
                </h1>
                <div className="flex items-center gap-x-3">
                  <img src={icon6} alt="" />
                  <img src={icon7} alt="" />
                  <img src={icon8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-10 justify-center">
          <div className="flex items-center text-[#FFF] gap-x-5">
            <img src={BigQuery} alt="" />
            <h1>BigQuery</h1>
          </div>
          <div className="flex items-center text-[#FFF] gap-x-5">
            <img src={Snowflake} alt="" />
            <h1>Snowflake (AWS, GCP, Azure)</h1>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-10 py-10">
          <h1 className="text-[#fff] w-96">
            Y42 is the first fully managed Modern DataOps Cloud — purpose-built
            for production-ready data pipelines on BigQuery and Snowflake.
          </h1>
          <div className="flex items-center gap-x-2 mr-[6.5rem]">
            <button className="bg-[#7D33FF]  uppercase text-sm text-[#fff] py-3 px-5">
              Book a call
            </button>
            <button className="bg-[#26272D]  uppercase text-sm text-[#fff] py-3 px-5">
              See the demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
