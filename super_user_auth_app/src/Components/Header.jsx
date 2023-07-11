/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ height: "100px", boxShadow: "5px 5px 5px #adadad !important" }}
      >
        <div class="container">
          <a
            class="navbar-brand"
            style={{ position: "absolute", left: "50px" }}
          >
            <img
              src="https://cdn.auth0.com/styleguide/latest/lib/logos/img/logo-blue.svg"
              alt="auth0"
              width="100"
              height="100"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li
                class="nav-item dropdown"
                style={{ position: "absolute", right: "50px", bottom: "20px" }}
              >
                <a
                  class="nav-link dropdown-toggle navbar-brand"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ marginRight: "15px" }}>
                    Hello, Fake Person
                  </span>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERDxEREhERERIRERIREhIPERERERAQGBQaGRgUGBgcIS4lHB4rHxgYJjgmKy80NTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHDQhISM0MTE0NDQ0NDE/NjQxNDE0MTExNDE0NDQ0MTQ0NDQ0NDQ0NDE0NDQxNDE0NDQ0NDQxMf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgAFAwQGB//EAEAQAAIBAgQDBQQHBgUFAQAAAAECAAMRBBIhMQVBUQYTImFxMoGRoQcUQlJiscEjcpLR4fCCorLC8SQzQ2OzFv/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgMAAwEBAAAAAAAAAAECEQMxEiFBEzJRcQT/2gAMAwEAAhEDEQA/APMwIwEgjAS6AAjASARgJAFoQIbSAQJaS0a0NoC2htGtDaAtobQ2htAW0NoYbQBaG0NoQIC2ktMWLxApr+I3sDKjFYh20Y6b2Gg1EC2fEU13Ye7WKuMpn7X+UykUTZwyEm6kZvunnI2nS4RwwuDeNaayKX/A2x3vfoRG77IQjG/LMba++NljNaC0feC0lBLQWmS0FoGO0lo9oLQEtBaZLQWgIRARHIgtAQiAiPaAwMZEBEciAiBjIgtHIgtAcQgSCMBJAjASAQgSBAIQIQIQIEtCBIBCBAlobQ2ktJAtDDJAEMBNpmpYao/sU6j+aI7D4gQMcFR8qs3QEyyp8ExTf+Ir++6J8ibzLU7KYqohQPQQtYXd3OnP2VMao4itWZ2ufh0i3uLHltO9T6K8a63WvhCejNWX55DNTE/RlxZPZo06o/8AVXp3+DFZGqbjipu4am1gcpa/IbywxPZfG0WtXwtaiNPG9Nu7/jF1+cvuD9j2qqD3uXY6Df3ylsna+ONy6c86AjdkPskMNSOV+oHUTQek2YqdPnpyM9hwfYjDFLVHqO1t9l+H9ZW9ruyKJS72kLCmmo18QG4+GvulfKNPxXTznAl0bK3sn5SytMBdQpuLX2vyYbfH+UzI11B6gH5TSVjlNJaC0a0FpKC2gtGIktAS0loxEFoC2gtGtARAQiAiORAYCEQERiICICEQWjkQWgMIRIIRAgjCARhAgEa0ghEkQCECECECBLSWkAhtAFp0PY7gCYypVNRmFOgqFlQ5Wd3LZVzchZGvbXbac/O4+jV7DGjywx/+sC1PDcNQ/wC1QpoRpmCAv73N2PxmpWrEnczex9TUyoqPrLxVkUkmWGDpaiV1KoLzoOFoD+ctCrvAaAS1UTUw1GwE3UErSCso+P4WlTRaiIiO1QKWRQuYMrE3A323l8BOd7bVAuHo3Nr1wbnoKb/zmef61rw/tGPBvoPObVWiroVYXDCxB2nN4HjuGQHM63W1xfWWnD+P4ascqOM17ZWupPpeczrvbx/tXw4UMQ9P7IYldxpuB8Jr4ceBNb+ETpvpPohcWrDQPTDX/ECQfyE5xPZXS3hGk2x6cvJNVLSWjQS7MtpLRrQEQFgjWgMBYLRoLQFMUxzAYCERbRzAYCkRbRzFtAYQiARhAIhEghEkERgIBCIEEYCQCEQJaS0IEMBbTquwdUq+KUbvSQ/wvb/cZy9p0HYnEZcZ3VrivTZPMMgLg/BWHvEQdO+Gdz/ZmpicIV1a4HUiav0i0ChwzozrTda1IqHYIWpVSA5W9szKw9wHSUnZrEVM9WlnY02pFyjElVcOgDKDsfERpvz2FrbVdph+Coyd4zHKBcm9gANb35Sl/wD1eFpPko069QG5zlxTVrdAdbeoE77CYBXwXdG+WpSZGI3s6lSR56zyHG9nMXQqhGpM+RiBUSxR1IIzDW4G2h1EjK2T0vhJbrJ6F2Z7d0MQ/dOHpPmyAVALMfJgSOfO07enVVgCpBB6TwnhXZ/EVHfvEFNGa7F2QsUsAQFBOunOev8AA1siqNlAA9JGO7PZlMZ0vQJzXbPh4xFOkpYgIXqFRu2gAH5zpxtOcxdYPj6qXuKVGmhHIOxLkn3MkryX0twzeX+PF6zDvWKUE8D93kL1SzWaxOh9dhy9J6fwfCBGVDhkUADLWoVO8ps1hdTmAYEEnXUee8rsfwCimKZgvtNnINjqdbi/LynV4BroB0HS059/HX469uT7XcETEY3BhzZCtRGtbXJZ7a9RcTW7Y0wENFVHcpg6OIpLlW1BxiEpsFNr+JahBF9bAyz7a0g6KATnTK1JV1Z6rOihQBv4e8PulF2nxBGCooTd2FKixJuTkzVag87M1Aet+kY23KQyxkwtcdJaGSdLhLaC0eCAloCI5iwFMkMkBDAY8UwFMUiOYpgIZITJAgjCARhAIjCKIwkgwiARhAIhEghEAiSESSALSy7N1QmPwjHbv0T+M5P90rpASCCCQQQQRuCNjA9Y7QcOp4pKdOqGy06hqLkORrlSpUnob39QJUHhtGgmWlTWmXZQWuzOwHIsxJt5bS44ZxBcZh0rLbMRlqIPsVQBmX01uPIiYcdR1XX2WB6nflLQdbw1MtBAdwolL2hwTaPbTUX85lqcfVKINKm1dxlApIyI5uQL+MgC2+vSbOMxLVaQUoVvYkEgkG22lx85adquLUkNadlwJvAJUrwsM17c50PD8PkAk0WYnnfAuLJWxGNxIDVFeocndjMXXNlQAdcgWdX2u4h9W4diqubKwpGmjHlUchEPuZgfdPHOBrSHh+sOlPIFZEZVcuNmuDqNf0nNyV1/8+Pdd9j8z1KdUBxTIXRwAyH8QE6DDoAg9P0nErjBQSmaeLJVnChKtI3fMdQCL3G/pOsbE/8ATI2xZQxAsLAC7b+kxdGX8adbH0EevWqVKdM0gqhnIzBWDC6LuzXvYDeeZca4n9arZwuSmgKUkvfImYm7dXYklj1PkJn7VVQ+Nc29hUT35QT/AKpU2m2GOptycvJbfH5EkhkmjEII0BgKYDGgMBDAYxgMBTAYTIYCGAxjAYCGCMYsAiMIBGEkERhFEYQCIwiiMIBEYQCMIBEMAhtIEgtDaS0C67JcTbDYpbn9lVISsDsAT4X9VJ+BbrPQOJpY9Lb+U8nQa25G4PwnpfBa9PHYFRUCuyp3NZXGYMQPC5B3uAD6g9ImXvS/jvHbTp4+lSqB6lSmgG5eoi9eplwvazBkfs++xB6YWhVqj+ILl+c5+vg0olitOjTVeaIi2A53tpK9OOYmqTRoO+U3FwAMxtsDvJyy12jHjuV9L8dr2zlRh3U3NkqkJUA5Zl1tedfwDiBr087oKbDUqCSFHnfYzzjh/D1o5amIY+Mm1OxZ6rdAu/qZ1OBxNWtqBkpqQcgsS56v1sNh+sy/JbXT+HHx19/rV+lTiH7DD4dDcPUao5Hs2RbKhPUlr2/DON7OV6nfDLTU5bXbMb29w6zrPpGzrw8MiqUTEo1VmJzAsGUFepLMAfX4cHwbiTUnVwdSbWFtfX3SmVt9rcesfW3p1fEKaBFRbi17Zbi4mlSxTVgtCmPGoF73AQXbxHoBbbne0pW46+JCUqaF6jaqlM2y5WBzOfsjTc/rOr4LgPq9M5mz1HOarUFwC2pCqDsgubDzJ5yi9rzLtIgXHYlQSQrhbnUsQigk+ZIJ98rZ1Xbjg5o1KeKA8GKNQuVJKrVDtYa7EplNtrq9tJytp049RwZftUkhtBaShIIYDABimMYDAUxYxgMBTAYTAYAimMYpgKYIxiwCIwiiMJIaEQCEQGEYRRGEBhCIBGEAiGARhAlpLQiG0ADSdB2e4gcKXqaFNBUQkDOlxcD8W5Hn5EyhAgrOStuV725X2vMc+3Rw/rZ/W9x/jj4t2VAUpZvCn2m6M/n5bDz3mLh+PGDPeaPUI8FPkD95ukr0YfZBv1FryxwHAKlRgcpGfW7bkdSTylcst9tccddN3geKq1sWtSrmqs7BTa/hB+6OSi89RpqAQiCxIGdl+z5Dz/L8vN8PxDuv2ODHi9l8TbXoRSB/1H3DZp3PZxaiYdVa5c6KT7QXrrudZXftpZ6aH0hqPqCJmAT6xTQoVB72yu2W/kVDeq+U4vhPC8OSM6Zv8bj8jOv7TYrB1UtiqppUaLZKNVWdnaqfasgBDggdNgTcXuKLA4PPk7jFYRw7EKXerSOUG12UpobWOXXfeWyljPHLG27dLwmlTRCKVNKaX1CKFzHqTzPrLrDUalcAUzlQ2zViNAvPIPtN0PsjfW2U4eB8Houis9QYnKSCLWpBx+DXNyIzXGxE6hZOHH9rPPmnWLiPpVqJR4XSpqBdsRSSmDckZUdjr+6pF/xTyqm4ZQw2M6z6X+MCpjMPhEJy4VWqVDyNWoBYf4VX/Oek4Si5VRbQ2923ObOarC0lpoUuKA6OhHmmo+H/ADN6nUVxdWDDy5eo5QIRAYxEUiADFMcxTAUxTGMUwFMBhMBgAwGEwGApghMECCMIojCSGEIgEIgMIwiiMIDCMIojCARGEAldxbHvTIRNGK5i1rkAmwA+BgWNSoqC7sqjqxt/zK6vxumuihmPU+Ffnr8pQu7MbsSx6sSTFtI2aXvDcfUrViGsFCk5VFhe4G+/OWjyl7PDxOfwr+Z/lLio28xy7dPH6xZuG1ESqjOAVDAkHZgORnW1sX9ZqlaBIWwDAaeG204UG5sJccExZouX+7qfPyA5mZ5Rvhl8dzT4N9Xw5dFHeldGZQwS5toDu0nEeIrhMM2ditRlLVHuSVRraDq7WAA/pN3DcZQ4U4mrpTpJnYE7vsqC/wBokhR5sJ57xapUxdXvahsmcELf2nI8Tn/SByAl+PHd2py52TxUeN4k9eozuwCm4SmVZkpryBO2w+Jl7wXIyCmwFNnt3b0nKo7rfIgGqo45NYc9GB0osThSuJdEzNY3FnVd7EKQxGmt/SXHC6RqU2ASnf8AZh90Rs7DSqlw9M+LSovM21uJXNlivKPGa3D8eldS70qtOn3qPde9UE5zkOiOGZ9ORuNjPWaeNpvQWvTYPTdA6MNmUi49PSef8K4cmNpVFfNl7sKmfWrScGzI34lZG1tYhvcNYcRqcN4e6li9Gorqt/awuK+7+44ufJhzzTXi34xnnJt5/wBp8R3uOxDk3LVCSf5e60qqldhawvbnf9I7VDULOd2Yn3cvlaIotf05zVmwAaQoSpuCQRzBsZkAitA3aHEWGjjMPvLYN8Nj8pv0qyOPCwPlsR6jeUQjhYF2RFMq6dZ12YkdHuw/nN3D4nP9m1ri41BI6QMpimMYpkBTAYTAYAgMJgMBTFjGLAIhEURhJDCMIojCARGEURhAcRhEEYQHWc9xpr1z+FVX5X/WdAs5bGVM9V26u1vQaD5CRSMMMEYbSEtnBYo0mva4YWYc/IyzXGK+0oyZkoOFYX26jlKZY79r45a9OgpNc/3pLLheFetUVQCbnS35xOFYBGQVC6lTsQbg23/4mPiPaP6uHoYRirsG7yuN0AGqp0OntcuWusz1u6dHlMZutnt7xsKE4dQe6Ydg1d1P/cxA2Q+S8/xE/dmXD1M1MEfhYe+cAZ2PZ989BBuQLfwn+k2xmvTn8rld1qcUqKuJzsqvolldQykEWsLag3B85c4JlKNWommGpFCVqFgHw1QMtXC1DYZgNbHU2Ou+gxHCkqq1RiFNKlUfN07vKSPTxGa3ZLEu9UIS+QuoUoEWpTdj4WUnlfU8iBryIy5Mfq+N+PRuw/eGjUNRCtREo02drkuF7zJ4j7VkKG+/iEo+2eIFPC4mmdu8Dj8/0nV8EdqNapg6mTworKUQU1ZiPEco0GvTpPO/pDxHjdOtRR+v5AzXGax0pld21yFAWQQObD1PyEyLsJhrNrbpp+suzC8VjJFgOgmYDSCmmkyMIGGqbDTc+Eep5yxwSBVPkthK1fFUA5IL+8/385Z0DygZDFMYxDIAMBkMECGLCYpgAwQmLAgjCIIwkhxGEQQiBkBhEQRhAcRxMYMYQMgM45TpOvvofQzkbbHykUiXjDaKg1jGQlILyEyKL84GbDV6iEhHZc2hCm1/Uc/fHxLZVVRbaxI3K3va/rrEwy+Ik/Z/OLUNySYCGdL2PrWcKds9vcw/mDOaXaW/Zp/25X7ykj95CGHyzSYmOwxNYJRxS5c37N6YXT/yPTS+vTf3TS7M4XJijWLByBnCAaZgxQjzF1y+tt9ba2NrMwcKdWemDpewDEk290x8PxeXEpTAtTWopY5tSga4ZiNvEzHNf7cy5O2keq8dqiniqGIGgZBf0I/rPKO1mL77H1LG6qxP6D9fjPRO1WPBoUm60yOXtDQ7eYnkrvnd3+8xt6DQfz9812zvTKD8Br7ppk3N+usz1Wsvqbe7c/p8ZiCyVRbaCktzGeZMOkDLsJjLRq5tNau9kJ66D1MBsGfab7xJ93KWFBrEGaFAWUCbKtIg3WiGRXuLyEyQDFhMWQIYDJAYAMEhggQQiSSSCIwkkgMIwkkgMDGBkkgMTofQ/lOTB0EkkikEGAySSEhG28tNOt/WSSBt4ZLAeXiPrymsZJJIQb+s3uFVcmIpPyDqD+63hb5EwyRBb4hwHIO2cbbm19Pft74eCV3bHBiqsxLZhtu1gq/CwHwudDJJnl9XjZ4pxM/VFpXP7LvEF9DbMcv6ShpeyPSSSXnSuQVXGYDppprr/f5Qq2skklUbXM2E0kkkjHidBe/ppNat7KDq1z6Af1EMkB1abVOSSBlpNqRMpkkkUKYpkkgAxSZJICkySSQP/9k="
                    alt="User Profile Image"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
