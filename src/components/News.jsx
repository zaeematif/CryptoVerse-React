import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Link } from "react-router-dom";
import millify from "millify";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  let count = simplified ? 6 : 15;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(count);

  const [allNews, setAllNews] = useState();

  console.log(cryptoNews);

  if (isFetching)
    return (
      <div className="text-3xl text-center text-black p-12 ">
        Loading Data...
      </div>
    );

  return (
    <>
      <div className="flex flex-wrap w-full justify-center">
        {cryptoNews?.data.map((news) => (
          <Col xs={24} sm={12} lg={8} key={news.id} style={{margin: "0.2rem"}}>
          <Card hoverable className="news-card">
            <a href={news.links.canonical} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <p className="text-xl font-medium">{news.attributes.title}</p>
                <img  style={{ height: "100px", width: "100%", }} src={news.attributes.gettyImageUrl || demoImage} alt="" />
              </div>
            </a>
          </Card>
        </Col>
        ))}
      </div>
    </>
  );
};

export default News;
