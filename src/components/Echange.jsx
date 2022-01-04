import React from 'react';

const Echange = ({ data }) => {
  return (
    <div className="echange">
      <div className="echange-bis">
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

export default Echange;
