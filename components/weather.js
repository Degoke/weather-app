const Weather = ({ state, country, temperature, description, src }) => {
  return (
    <div className="container">
      <div>
        <p>
          {state} {country}
        </p>
        <p>{temperature} degree celcius</p>
      </div>
      <div>
        <img src={src} alt={src} />
        <p>{description}</p>
      </div>
      <style jsx>{`
        .container > * {
          margin-top: 1rem;
        }
        p {
          font-size: 1.3rem;
        }
      `}</style>
    </div>
  );
};

export default Weather;
