export default defineNuxtRouteMiddleware((to) => {
    // If the path is not '/' and doesn't already end with a trailing slash
    if (to.path !== '/' && !to.path.endsWith('/')) {
        const { path, query, hash } = to;
        const nextPath = path + '/'; // Add trailing slash
        const nextRoute = { path: nextPath, query, hash };
        console.log(`Not ending with slash, navigating to ${nextPath}, ${query}, ${hash}`)
        return navigateTo(nextRoute, { redirectCode: 301 });
    }
});