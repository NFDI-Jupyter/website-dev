import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

function getDocsHtmlUrl(pathname: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  const relativePath = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;
  const normalizedPath = relativePath.replace(/^\/+/, "");

  if (
    !normalizedPath ||
    normalizedPath === "docs" ||
    normalizedPath === "docs/"
  ) {
    return `${import.meta.env.BASE_URL}docs/index.html`;
  }

  if (normalizedPath.startsWith("docs/")) {
    const docsPage = normalizedPath.slice("docs/".length).replace(/\/$/, "");
    return `${import.meta.env.BASE_URL}docs/${docsPage}/index.html`;
  }

  return `${import.meta.env.BASE_URL}docs/index.html`;
}

function getDocsRoute(pathname: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!pathname.startsWith(baseUrl)) {
    return pathname;
  }

  return pathname.slice(baseUrl.length) || "/";
}

export default function DocsViewer({ pathname }: { pathname: string }) {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const docsHtmlUrl = getDocsHtmlUrl(pathname);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    const onLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) {
        return;
      }

      const handleClick = (event: MouseEvent) => {
        const target = event.target as Element | null;
        const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;

        if (!anchor) {
          return;
        }

        const nextUrl = new URL(anchor.href, doc.baseURI);

        if (nextUrl.protocol === "http:" || nextUrl.protocol === "https:") {
          if (nextUrl.origin !== window.location.origin) {
            event.preventDefault();
            window.open(nextUrl.toString(), "_blank", "noopener,noreferrer");
            return;
          }
        }

        const href = anchor.getAttribute("href");
        if (!href || /^(mailto:|tel:|javascript:|#)/.test(href)) {
          return;
        }

        const nextRoute = getDocsRoute(nextUrl.pathname);

        if (!nextRoute.startsWith("/docs")) {
          return;
        }

        event.preventDefault();
        navigate(`${nextRoute}${nextUrl.search}${nextUrl.hash}`);
      };

      doc.addEventListener("click", handleClick);
    };

    iframe.addEventListener("load", onLoad);
    onLoad();

    return () => {
      iframe.removeEventListener("load", onLoad);
    };
  }, [navigate, pathname]);

  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <iframe
        aria-label="Documentation"
        className="h-full w-full border-0"
        ref={iframeRef}
        src={docsHtmlUrl}
        title="Jupyter4NFDI documentation"
      />
    </main>
  );
}
