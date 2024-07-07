import React, { useState } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const simplified=true;


  if (isFetching)
    return (
      <div className="text-3xl text-center text-black p-12 ">
        Loading Data...
      </div>
    );

  return (
    <div className="my-8">
      <div className="text-center">
        <Title style={{ margin: "0rem 0 2rem 0" }} level={2}>
          Global Crypto Stats
        </Title>

        <Row style={{ margin: "0rem 0 2rem 0" }}>
          <Col span={12}>
            <Statistic
              title="Total Crypto Currencies"
              value={globalStats?.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats?.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats?.totalMarketCap)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24th Volume"
              value={millify(globalStats?.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats?.totalMarkets)}
            />
          </Col>
        </Row>
      </div>

      <div className="flex h-[3rem] overflow-hidden bg-[#001529] p-12 w-full justify-center ">
        <Title
          style={{
            color: "white",
            margin: "0 4rem 0 0",
            height: "auto",
            alignSelf: "center",
          }}
          level={3}
        >
          Top 10 Crypto Currencies
        </Title>
        <Title
          level={5}
          style={{ margin: "0", height: "auto", alignSelf: "center" }}
        >
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified={simplified}/>

      <div className="flex h-[3rem] overflow-hidden bg-[#001529] p-12 w-full justify-center ">
        <Title
          style={{
            color: "white",
            margin: "0 4rem 0 0",
            height: "auto",
            alignSelf: "center",
          }}
          level={3}
        >
          Latest Currency News
        </Title>
        <Title
          level={5}
          style={{ margin: "0", height: "auto", alignSelf: "center" }}
        >
          <Link to="/news">Show More</Link>
        </Title>
      </div>

      <News simplified={simplified}/>
    </div>
  );
};

export default Homepage;
