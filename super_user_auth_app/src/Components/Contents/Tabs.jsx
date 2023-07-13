import React from "react";
import { Link, useParams } from "react-router-dom";

function Tabs({ tabs }) {
  const { userId } = useParams();

  return (
    <div className="d-flex container">
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
                <Link
                  className="text-decoration-none"
                  to={`/users/${userId}/${tab.toLowerCase()}`}
                >
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
