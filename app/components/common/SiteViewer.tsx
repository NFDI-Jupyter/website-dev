import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface SiteViewerProps {
  pathname: string;
  section: string;
  title: string;
}

function getSiteHtmlUrl(pathname: string, section: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  const relativePath = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;
  const normalizedPath = relativePath.replace(/^\/+/, "");

  if (
    !normalizedPath ||
    normalizedPath === section ||
    normalizedPath === `${section}/`
  ) {
    return `${import.meta.env.BASE_URL}${section}/index.html`;
  }

  if (normalizedPath.startsWith(`${section}/`)) {
    const sitePage = normalizedPath
      .slice(`${section}/`.length)
      .replace(/\/$/, "");
    return `${import.meta.env.BASE_URL}${section}/${sitePage}/index.html`;
  }

  return `${import.meta.env.BASE_URL}${section}/index.html`;
}

function getSiteRoute(pathname: string, section: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!pathname.startsWith(baseUrl)) {
    return pathname;
  }

  const sitePath = pathname.slice(baseUrl.length).replace(/^\/+/, "");
  if (sitePath === section || sitePath.startsWith(`${section}/`)) {
    return `/${sitePath}`;
  }

  return `/${section}${sitePath ? `/${sitePath}` : ""}`;
}

export function SiteViewer({ pathname, section, title }: SiteViewerProps) {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const siteHtmlUrl = getSiteHtmlUrl(pathname, section);

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

        const nextRoute = getSiteRoute(nextUrl.pathname, section);

        if (!nextRoute.startsWith(`/${section}`)) {
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
  }, [navigate, pathname, section]);

  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <iframe
        aria-label={title}
        className="h-full w-full border-0"
        ref={iframeRef}
        src={siteHtmlUrl}
        title={title}
      />
    </main>
  );
}
