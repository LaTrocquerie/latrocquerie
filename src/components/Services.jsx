import React from 'react';

const Services = ({ data }) => {
  return (
    <div className="abonnement">
      <div className="abonnementbis">
        <h1>{data.title}</h1>
        <br />
        <br />
        <div className="details">
          {data.details.map((detail) => (
            <p className="text-center">
              {detail.detail}
              <p className="text-emerald-800">{detail.description1}</p>
              <p>{detail.description2}</p>
              <p>{detail.infoDescription1}</p>
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
