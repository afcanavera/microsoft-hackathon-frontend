import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "../src/components/Container/Container";
import HomePage from './pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';
import WorkExamplePage from './pages/WorkExamplePage/WorkExamplePage';
import StatusPage from './pages/StatusPage/StatusPage';
import ResultPage from './pages/ResultPage/ResultPage';

function Layout({ children }) {
  const location = useLocation();

  // Show Container on all pages except HomePage
  const excludeContainerRoutes = ["/home"];

  return (
    <div>
      {!excludeContainerRoutes.includes(location.pathname) && <Container />}
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/workexample" element={<WorkExamplePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
