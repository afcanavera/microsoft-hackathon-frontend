import "./ResultPage.scss";
import searchIcon from "../../assets/images/Search.png";
import sortIcon from "../../assets/images/arrow_drop_down.png";

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
            className="result-page__search-icon"
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
        <h2 className="result-page__table-title">Today</h2>
        <div className="result-page__table-item result-page__table-item--green">
          <p className="result-page__table-text">
            Identify and resolve the issue in this code
          </p>
          <p className="result-page__table-text">Word Document</p>
          <p className="result-page__table-text">Mar. 13, 2025</p>
        </div>
      </section>

      <section className="result-page__table">
        <h2 className="result-page__table-title">Yesterday</h2>
        <div className="result-page__table-item">
          <p className="result-page__table-text">
            Schedule a meeting with Felipe for 5pm
          </p>
          <p className="result-page__table-text">Word Document</p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <p className="result-page__table-text">
            Create a new Excel spreadsheet
          </p>
          <p className="result-page__table-text">Excel</p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <p className="result-page__table-text">Set up Teams notification</p>
          <p className="result-page__table-text">PDF</p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>
      </section>
    </main>
  );
}

export default ResultPage;

// From Felipe:
// Could you add the following link when clicking on the result in the result page?
// https://1drv.ms/f/c/ec0f4a3542a8dc24/EgyV6ErmyqVAseBURSHF4IcBnUrY990UdMxgveFTSAPKPQ?e=1eqLUQ
