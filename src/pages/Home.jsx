import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../style/Home.css";
import { About } from "../components/About";
import { Brands } from "../components/Brands";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="px-4 py-5 my-5 text-center d-flex flex-column jusify-content-center contact w-100 ">
        <div className="col-lg-6 mx-5 mt-5 pt-5 px-5 d-flex flex-column">
          <p className="lead text-start pt-5 mt-5 text-join">{t("a.1")}</p>
          <h1 className="text-start mt-3 text-motive">{t("a.2")}</h1>
          <div>
            <Link to="/">
              <Button
                type="button"
                className="btn btn-primary btn-lg px-5 d-flex"
              >
                Contact US
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Brands />
    </div>
  );
};

export default Home;
