import Button from "../components/button/button";
import { useState, useEffect } from "react";
import Weather from "../components/weather";
import Head from "next/head";

const Index = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lattitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const res = await fetch(
        `https://weather-proxy.freecodecamp.rocks/api/current?lon=${longitude}&lat=${lattitude}`
      );
      const location = await res.json();
      setData(location);
    });
  }, [data]);

  return (
    <div className="container">
      <Head>
        <title>Degoke-Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Weather App</h1>
      <p>Welcome, hit show to get current weather</p>
      <Button text="show" handleClick={handleClick} />
      {show ? (
        <Weather
          state={data.name}
          country={data.sys.country}
          temperature={data.main.temp}
          description={data.weather[0].description}
          src={data.weather[0].icon}
        />
      ) : (
        ""
      )}
      <style global jsx>{`
        * {
          boz-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        .container {
          width: 60%;
          margin: 10% auto;
          text-align: center;
          padding: 2rem;
          box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.75);
        }
        .container > * {
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.3rem;
        }
      `}</style>
    </div>
  );
};

export default Index;
