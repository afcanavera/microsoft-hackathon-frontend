import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "../src/components/Container/Container";
import HomePage from './pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';
import WorkExamplePage from './pages/WorkExamplePage/WorkExamplePage';
import StatusPage from './pages/StatusPage/StatusPage';
import ResultPage from './pages/ResultPage/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  // Pages where we want to use the Container
  const useContainer = location.pathname !== "/home";

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/form"
        element={useContainer ? <Container><FormPage /></Container> : <FormPage />}
      />
      <Route
        path="/workexample"
        element={useContainer ? <Container><WorkExamplePage /></Container> : <WorkExamplePage />}
      />
      <Route
        path="/status"
        element={useContainer ? <Container><StatusPage /></Container> : <StatusPage />}
      />
      <Route
        path="/result"
        element={useContainer ? <Container><ResultPage /></Container> : <ResultPage />}
      />
    </Routes>
  );
}

export default App;
