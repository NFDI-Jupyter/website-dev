import { SiteViewer } from "../common/SiteViewer";

export default function DocsViewer({ pathname }: { pathname: string }) {
  return (
    <SiteViewer
      pathname={pathname}
      section="docs"
      title="Jupyter4NFDI documentation"
    />
  );
}
