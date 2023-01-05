import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IMac1 from "./pages/IMac1";
import FrameComponent from "./pages/FrameComponent";
import Home from "./pages/Home";
import NBchartsLineChats from "./pages/NBchartsLineChats";
import NBchartsPIE from "./pages/NBchartsPIE";
import IconCog from "./pages/IconCog";
import IconChat from "./pages/IconChat";
import IconList from "./pages/IconList";
import IconMagnifyingGlass from "./pages/IconMagnifyingGlass";
import IconPerson from "./pages/IconPerson";
import IconHome from "./pages/IconHome";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/nbchartslinechats":
        title = "";
        metaDescription = "";
        break;
      case "/nbchartspie":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-cog":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-chat":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-list":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-magnifying-glass":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-person":
        title = "";
        metaDescription = "";
        break;
      case "/-icon-home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IMac1 />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/home" element={<Home />} />

      <Route path="/nbchartslinechats" element={<NBchartsLineChats />} />

      <Route path="/nbchartspie" element={<NBchartsPIE />} />

      <Route path="/-icon-cog" element={<IconCog />} />

      <Route path="/-icon-chat" element={<IconChat />} />

      <Route path="/-icon-list" element={<IconList />} />

      <Route path="/-icon-magnifying-glass" element={<IconMagnifyingGlass />} />

      <Route path="/-icon-person" element={<IconPerson />} />

      <Route path="/-icon-home" element={<IconHome />} />
    </Routes>
  );
}
export default App;
