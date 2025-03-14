import "./ResultPage.scss";
import searchIcon from "../../assets/images/Search.png";
import sortIcon from "../../assets/images/sort.png";
import checkIcon from "../../assets/images/Check_square.png";
import dotsIcon from "../../assets/images/dotdot.png";

function ResultPage() {
  return (
    <main className="result-page">
      {/* Top Container with Title and Search */}
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

      {/* Header Row */}
      <section className="result-page__header">
        <div className="result-page__header-item align-a">
          <h4 className="result-page__header-title">Request</h4>
          <img src={sortIcon} alt="sort icon" className="result-page__sort-icon" />
        </div>
        <div className="result-page__header-item align-b">
          <h4 className="result-page__header-title">Document Type</h4>
          <img src={sortIcon} alt="sort icon" className="result-page__sort-icon" />
        </div>
        <div className="result-page__header-item align-c">
          <h4 className="result-page__header-title">Date</h4>
          <img src={sortIcon} alt="sort icon" className="result-page__sort-icon" />
        </div>
      </section>

      {/* Today's Requests */}
      <section className="result-page__table result-page__table--border">
        <h2 className="result-page__table-title">Today</h2>
        <div className="result-page__table-item result-page__table-item--green">
          <div className="result-page__check-container">
            <img src={checkIcon} alt="check icon" className="result-page__check-icon" />
            <p className="result-page__table-text">
              Creating bylaws reports as word documents
            </p>
          </div>
          <a
            href="https://1drv.ms/f/c/ec0f4a3542a8dc24/EgyV6ErmyqVAseBURSHF4IcBnUrY990UdMxgveFTSAPKPQ?e=1eqLUQ"
            target="_blank"
            rel="noopener noreferrer"
            className="result-page__table-text result-page__table-link"
          >
            OneDrive Folder
          </a>
          <p className="result-page__table-text">Mar. 13, 2025</p>
        </div>
      </section>

      {/* Yesterday's Requests */}
      <section className="result-page__table">
        <h2 className="result-page__table-title">Yesterday</h2>

        <div className="result-page__table-item">
          <div className="result-page__check-container">
            <img src={checkIcon} alt="check icon" className="result-page__check-icon" />
            <p className="result-page__table-text">
              Schedule a meeting with Marisa for 5pm
            </p>
          </div>
          <p className="result-page__table-text link"><u>Outlook Calendar</u></p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <div className="result-page__check-container">
            <img src={checkIcon} alt="check icon" className="result-page__check-icon" />
            <p className="result-page__table-text">
              Create a new Excel spreadsheet
            </p>
          </div>
          <p className="result-page__table-text link"><u>Excel Sheet</u></p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>

        <div className="result-page__table-item">
          <div className="result-page__check-container">
            <img src={checkIcon} alt="check icon" className="result-page__check-icon" />
            <p className="result-page__table-text">Set up Teams notification</p>
          </div>
          <p className="result-page__table-text link"><u>PDF</u></p>
          <p className="result-page__table-text">Mar. 12, 2025</p>
        </div>
      </section>

      {/* Dots Icon for More Actions */}
      <div className="result-page__dots-container">
        <img src={dotsIcon} alt="dots icon" className="result-page__dots-icon" />
      </div>
    </main>
  );
}

export default ResultPage;
