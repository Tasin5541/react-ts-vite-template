import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { menus } from "../utils/constants/menuRoutes.constants";
import "./../assets/scss/App.scss";
import MissingRoute from "./components/MissingRoute";
import Loader from "./features/Loader/Loader";
import { SnackbarProvider } from "notistack";
import SnackbarAction from "./components/SnackBarUtils/SnackBarAction";
import { SnackbarUtilsConfigurator } from "./components/SnackBarUtils/SnackBarUtils";

const App = () => {
  return (
    <SnackbarProvider action={(key) => <SnackbarAction id={key} />} maxSnack={3} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
      <SnackbarUtilsConfigurator />
      <div className="use-bootstrap">
        <BrowserRouter basename="/">
          <div className="container">
            <Routes>
              {/* map routes from menu constants */}
              <Route path="/" element={<Navigate to={menus.length > 0 ? menus[0].path : "/missing"} replace />} />
              <Route path="*" element={<MissingRoute />} />
            </Routes>
          </div>
          <Loader />
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
};

export default App;
