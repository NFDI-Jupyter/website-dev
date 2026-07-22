import { useLocation } from "react-router";
import DocsViewer from "../../components/docs/DocsViewer";

export default function DocsPathPage() {
  const location = useLocation();

  return <DocsViewer pathname={location.pathname} />;
}
