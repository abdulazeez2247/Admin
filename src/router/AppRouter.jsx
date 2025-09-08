// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
// import LiveMatches from '../pages/LiveMatches';
// import AdminLoginPage from '../pages/AdminLoginPage';
// import DashboardLayout from '../layouts/DashboardLayout';

// const AppRouter = () => {
//   const [selectedSport, setSelectedSport] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(true); 

//   return (
//     <Routes>
//       <Route path="/" element={<AdminLoginPage setIsAuthenticated={setIsAuthenticated} />} />

     
//       {isAuthenticated && (
//         <Route element={<DashboardLayout setSelectedSport={setSelectedSport} />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route
//             path="/live-matches"
//             element={<LiveMatches selectedSportId={selectedSport} />}
//           />
//         </Route>
//       )}

//       {!isAuthenticated && (
//         <Route path="*" element={<AdminLoginPage setIsAuthenticated={setIsAuthenticated} />} />
//       )}
//     </Routes>
//   );
// };

// export default AppRouter;
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
