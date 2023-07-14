import React from "react";

function NavTabHeader({ showTab, tabsHeaders }) {
  return (
    <div className="container mt-4">
      {showTab && (
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {tabsHeaders.map((header, index) => {
            return (
              <li class="nav-item" role="presentation">
                <button
                  class={
                    `${
                      index === 0
                        ? "nav-link active btn-primary "
                        : "nav-link  btn-primary"
                    }` + "text-decoration-none"
                  }
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  {header}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavTabHeader;
