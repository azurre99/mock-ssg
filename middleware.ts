import { next, rewrite } from "@vercel/edge";

// File extensions to skip
const SKIP_EXTENSIONS = [
    ".php",
    ".js",
    ".css",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".map",
    ".json",
    ".webp",
];

function shouldSkipPath(pathname: string): boolean {
    // Check file extensions
    return SKIP_EXTENSIONS.some((ext) => pathname.toLowerCase().endsWith(ext));
}

export default function middleware(request: Request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const searchParamSize = url.searchParams.size;

    if (searchParamSize > 0) {
        const nonSeoURL = new URL(request.url);
        nonSeoURL.searchParams.set("d-seo", "true");
        request.headers.set("d-seo", "true")

        console.log(`Redirecting to non SEO url: ${nonSeoURL}`);
        return rewrite(nonSeoURL, {
            headers: {
                "d-seo": "true"
            }
        });
    }
}
