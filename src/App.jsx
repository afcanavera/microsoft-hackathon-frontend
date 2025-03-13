import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';
import WorkExamplePage from './pages/WorkExamplePage/WorkExamplePage';
import StatusPage from './pages/StatusPage/StatusPage';
import ResultPage from './pages/ResultPage/ResultPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/workexample" element={<WorkExamplePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
