import React from "react";

import "../../styles/tiers.css";

export const Tiers = () => {
  return (
    <div className="tier-container">
      <div className="wf-section">
        <div className="t-container">
          <div className="w-layout-grid tiers-grid">
            <div className="biggie">
              <div className="b-pic">
              <a href="#" class="b-button">SUBSCRIBE</a>
              </div>
            </div>
            <div className="coltrane">
              <div className="c-pic">
              <a href="#" class="c-button">SUBSCRIBE</a>
              </div>
            </div>
            <div className="jimi">
              <div className="j-pic">
              <a href="#" class="j-button">SUBSCRIBE</a>
              </div>
            </div>
          </div>
          <div className="membership">
            <div class="text-block-2">Membership Tiers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiers;
