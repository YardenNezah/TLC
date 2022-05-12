import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./FounderPage.scss";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchFounders } from "../../../store/founderDataSlice";

const FounderPage = () => {
  const dispatch = useAppDispatch();
  const { founders } = useSelector((state: any) => state.founders);

  useEffect(() => {
    dispatch(fetchFounders());
  }, []);

  const params: any = useParams();
  const founderDetails = founders.filter(
    (founder: any) => founder.founderName === params.founderName
  )[0];
  return (
    <Fragment>
      <Header />
      <div className="founder-page">
        <img
          src={founderDetails.founderImage}
          alt="founder"
          className="founder-img-page"
        ></img>
        <h1>{founderDetails.founderName}</h1>
        <h2>{founderDetails.description}</h2>
        <p>{founderDetails.founderAge}</p>
        <a href={founderDetails.founderLinkedin}>
          {founderDetails.founderLinkedin}
        </a>
      </div>
      <Footer />
    </Fragment>
  );
};

export default FounderPage;
