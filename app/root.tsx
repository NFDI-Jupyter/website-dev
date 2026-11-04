import ReactDOM from "react-dom/client";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./app.css";
import { hashRoutes } from "./routes";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createHashRouter(hashRoutes);

ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
