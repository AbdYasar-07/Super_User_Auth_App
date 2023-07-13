import React from "react";
import { Link } from "react-router-dom";

function Tabs({ tabs }) {
  return (
    <div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index + 1}
                class={`${index === 0 ? "nav-link active" : "nav-link"}`}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                <Link className="text-decoration-none" to={tab}>
                  {" "}
                  {tab}
                </Link>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Tabs;
