import "./StatusPage.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckCircle, Loader } from "lucide-react";
import logo from "../../Assets/images/logo.png";

function StatusPage() {
  const [loadingTask, setLoadingTask] = useState(true);
  const [attentionEffect, setAttentionEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingTask(false);
      setAttentionEffect(true);

      setTimeout(() => {
        setAttentionEffect(false);
      }, 3000);
    }, 4000);
  }, []);
  return (
    <div className="status__page">
      <div className="status__page--container">
        <div className="status__page--content">
          <p className="status__page--title">Loading your request...</p>

          {loadingTask ? (
            <div className="status__page--task status__page--loading">
              <Loader className="status__page--icon spinning" />
              <p>Create bylaws reports as word documents</p>
            </div>
          ) : (
            <Link to="/result">
              <div
                className={`status__page--task status__page--completed ${
                  attentionEffect ? "status__page--attention" : ""
                }`}
              >
                <CheckCircle className="status__page--icon" />
                <p>Create bylaws reports as word documents</p>
              </div>
            </Link>
          )}

          <div className="status__page--task status__page--completed">
            <CheckCircle className="status__page--icon" />
            <p>Schedule a meeting with Felipe for 5pm</p>
          </div>

          <div className="status__page--task status__page--completed">
            <CheckCircle className="status__page--icon" />
            <p>Set up Teams notification</p>
          </div>

          <div className="status__page--task status__page--completed">
            <CheckCircle className="status__page--icon" />
            <p>Create a new Excel spreadsheet</p>
          </div>

          <p className="status__page--view-requests">View All Requests</p>
        </div>
      </div>
    </div>
  );
}

export default StatusPage;
