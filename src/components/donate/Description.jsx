import React from "react";

const Description = ({ data }) => {
  const {
    description,
    currencyAndTarget,
    currencyAndRaised = 0.0,
    raised,
    target,
    mainGraphic,
    noDonors,
    title
  } = data;
  return (
    <div className="section-pad">
      <div>
        <h2>{title}</h2>
      </div>

      <div className="mt-5 mb-5">
        <div className="progress"></div>
        <div className="donation-info">
          <p>
            <b>Raised:</b> {raised}
          </p>
          <p>
            <b>Goal:</b> {currencyAndTarget}
          </p>
          <p>
            <b>Donor:</b> {noDonors}
          </p>
        </div>
      </div>
      <div>
        <p>
         {description}
        </p>
        
      </div>
    </div>
  );
};

export default Description;
