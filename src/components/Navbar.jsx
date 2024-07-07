import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../image/bitcoin.png";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/cryptocurrencies">Crypto Currencies</Link>,
    key: "crypto",
    icon: <FundOutlined />,
  },
  {
    label: <Link to="/news">News</Link>,
    key: "news",
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-fit flex p-2">
        <Avatar  className="text-xl self-center" src={icon} size="large"/>
        <Link to="/" className="text-2xl mx-4 self-center text-[#0d4267]">Cryptoverse</Link>
        
      </div>

      <Menu style={{height: "4rem", display: "flex", flex: "auto", flexWrap: "wrap", alignContent: "center"}} theme="dark" items={items} mode="horizontal"/>
    </div>
  );
};

export default Navbar;
