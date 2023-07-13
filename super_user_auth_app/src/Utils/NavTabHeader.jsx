import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { Link } from "react-router-dom";

function NavTabHeader() {
  const value = ["GROUPS", "ALL GROUPS"];

  return (
    <>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {value.map((neadTabValue, index) => {
          return (
            <li class="nav-item" role="presentation">
              <button
                class={`${
                  index === 0
                    ? "nav-link active btn-primary"
                    : "nav-link btn-primary"
                } text-decoration-none`}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to={neadTabValue}
                >
                  {neadTabValue}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavTabHeader;
