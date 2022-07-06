import { createRoot } from "react-dom/client";
import { Header, Pricing } from "./components";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <GlobalStyles />
    <Header />
    <Pricing />
  </div>
);
