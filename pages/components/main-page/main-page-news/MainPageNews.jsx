import React from "react";
import Collapsible from "react-collapsible";

const MainPageNews = React.forwardRef((props, ref) => {
  return (
    <div className="main-page-news">
      <h2 className="main-page-news__headling">Latest news</h2>
      <div className="main-page-news__image"></div>
      <Collapsible open={props.showMoreNews}>
        <div className="main-page-news__item">
          <div className="main-page-news__item__image">
            <img src="https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg" />
            <span>cointelegraph</span>
            <span>01.04.2019 16:34</span>
          </div>
          <p className="main-page-news__item__text">
            <span className="main-page-news__item__text__wrapper">
              <span className="main-page-news__item__text__headling">
                cointelegraph
              </span>
              <span className="main-page-news__item__text__date">
                01.04.2019 16:34
              </span>
            </span>
            Research: Ethereum-Based Prediction Market Augur Currently Faces a
            Design Flaw Attack
          </p>
        </div>
        <div className="main-page-news__item">
          <div className="main-page-news__item__image">
            <img src="https://www.omarimc.com/wp-content/uploads/2017/01/news-636978_960_720.jpg" />
            <span>cointelegraph</span>
            <span>01.04.2019 16:34</span>
          </div>
          <p className="main-page-news__item__text">
            <span className="main-page-news__item__text__wrapper">
              <span className="main-page-news__item__text__headling">
                cointelegraph
              </span>
              <span className="main-page-news__item__text__date">
                01.04.2019 16:34
              </span>
            </span>
            Research: Ethereum-Based Prediction Market Augur Currently Faces a
            Design Flaw Attack
          </p>
        </div>
      </Collapsible>
      <button
        className="main-page-news__show"
        onClick={() => props.setShowMoreNews(!showMoreNews)}
        ref={ref}
      >
        More news
      </button>
    </div>
  );
});

export default MainPageNews;
