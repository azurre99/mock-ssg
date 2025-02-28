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

/*export const config = {
    matcher: ["/^((?!.*\\.(?:php|js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|json|webp)$).*)/"],
};*/

function shouldSkipPath(pathname: string): boolean {
    // Check file extensions
    return SKIP_EXTENSIONS.some((ext) => pathname.toLowerCase().endsWith(ext));
}

export default function middleware(request: Request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    console.log(`Edge middleware running on ${pathname}`);
}
