export default defineNuxtRouteMiddleware((to) => {
    if (!to.path.endsWith('/')) {
        const { path, query, hash } = to;
        const nextPath = path + '/';
        const nextRoute = { path: nextPath, query, hash };
        console.log(`Not ending with slash, navigating to ${nextPath}, ${query}, ${hash}`)
        return navigateTo(nextRoute, { redirectCode: 301 });
    }
});