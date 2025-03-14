import "./ResultPage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort.svg";

function ResultPage() {
  return (
    <main className="result-page__content-container">
      <div className="result-page__top-container">
        <h1 className="result-page__title">Completed Requests</h1>
        <div className="result-page__search-container">
          <input
            type="text"
            className="result-page__search-input"
            placeholder="Search all requests"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="search-bar__search-icon"
          />
        </div>
      </div>

      <section className="result-page__header">
        <div className="result-page__header-item">
          <h4 className="result-page__header-title">Request</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="result-page__sort-icon"
          />
        </div>
        <div className="result-page__header-item">
          <h4 className="result-page__header-title">Document Type</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="result-page__sort-icon"
          />
        </div>
        <div className="result-page__header-item">
          <h4 className="result-page__header-title">Date</h4>
          <img
            src={sortIcon}
            alt="sort icon"
            className="result-page__sort-icon"
          />
        </div>
      </section>

      <section className="result-page__table">
        <h2 className="result-page__title">Today</h2>
        <div className="result-page__table-item result-page__table-item--green">
          <p className="result-page__table-text">
            Identify and resolve the issue in this code
          </p>
          <p className="result-page__header-text">Word Document</p>
          <p className="result-page__header-text">Mar. 13, 2025</p>
        </div>
      </section>

      <section className="result-page__table">
        <h2 className="result-page__title">Yesterday</h2>
        <div className="result-page__table-item">
          <p className="result-page__table-text">
            Schedule a meeting with Felipe for 5pm
          </p>
          <p className="result-page__header-text">Word Document</p>
          <p className="result-page__header-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <p className="result-page__table-text">
            Create a new Excel spreadsheet
          </p>
          <p className="result-page__header-text">Excel</p>
          <p className="result-page__header-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <p className="result-page__table-text">Set up Teams notification</p>
          <p className="result-page__header-text">PDF</p>
          <p className="result-page__header-text">Mar. 12, 2025</p>
        </div>
      </section>
    </main>
  );
}

export default ResultPage;
