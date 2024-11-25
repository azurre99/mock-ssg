export default defineNitroPlugin((nitroApp) => {
    let dontCacheResponse = false;

    nitroApp.hooks.hook('error', () => {
        dontCacheResponse = true;
    });

    nitroApp.hooks.hook('render:response', (response) => {
        if (!response.headers) {
            response.headers = {}
        }

        if (dontCacheResponse) {
            response.headers['Cache-Control'] = 's-maxage=1';
        }
    });

    nitroApp.hooks.hook('afterResponse', () => {
        dontCacheResponse = false;
    });
});