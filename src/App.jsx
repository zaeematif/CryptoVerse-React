import React from 'react'
import {Routes as Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import {Navbar, Exchanges, Homepage, Cryptocurrencies, News} from './components';
import './App.css'

const App = () => {
  return (
    <div className='h-screen'>

      <div className="nav">
        <Navbar/>
      </div>

      <div className="px-4">
        <Layout>

          <div className="">
            <Switch>
              <Route exact path="/" element={<Homepage/>} />

              <Route exact path="/exchanges" element={ <Exchanges/>} />

              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />

              <Route exact path="/news" element={<News/>} />

            </Switch>
          </div>
          
        </Layout>
      </div>

      <div className=" bg-[#001529] text-center p-4">
        <Typography.Title level={5} style={{color: "white"}}>
          Cryptoverse &copy; <br />
          All Rights Reserved
        </Typography.Title>
        <Space style={{textAlign: "center"}}>
          <Link to="/" className="self-center text-white">Home</Link>
          <Link to="/exchanges" className="self-center text-white">Exchanges</Link>
          <Link to="/news" className="self-center text-white ">News</Link>
        </Space>
      </div>

    </div>
  )
}

export default App