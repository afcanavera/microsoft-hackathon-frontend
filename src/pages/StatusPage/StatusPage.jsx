import "./StatusPage.scss";
import { useState, useEffect } from "react";
import { CheckCircle, Loader } from "lucide-react";
import logo from "../../Assets/images/logo.png";

function StatusPage() {
  const [loadingTask, setLoadingTask] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingTask(false);
    }, 3000); 
  }, []);
  return (
    <div className="status__page">
      <div className="status__page--container">
        <div className="status__page--header">
          <div className="status__page--logo">
            <img className="status__page--icon" src={logo} alt="logo" />
            AutoPilot+
          </div>
          <button className="status__page--profile">ChatBot's Name</button>
        </div>
        <div className="status__page--content">
          <p className="status__page--title">Loading your request...</p>

          <div className={`task ${loadingTask ? "loading" : "completed"}`}>
            {loadingTask ? (
              <Loader className="icon spinning" />
            ) : (
              <CheckCircle className="icon" />
            )}
            <span>Identify and resolve the issue in this code</span>
          </div>

          <div className="task completed">
            <CheckCircle className="icon" />
            <span>Schedule a meeting with Felipe for 5pm</span>
          </div>

          <div className="task completed">
            <CheckCircle className="icon" />
            <span>Set up Teams notification</span>
          </div>

          <div className="task completed">
            <CheckCircle className="icon" />
            <span>Create a new Excel spreadsheet</span>
          </div>

          <p className="view-requests">View All Requests</p>
        </div>
      </div>
    </div>
  );
}

export default StatusPage;
