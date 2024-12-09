export default defineNitroPlugin((nitroApp) => {
    /*let dontCacheResponse = false;

    nitroApp.hooks.hook('error', (err) => {
        console.error(err)
        dontCacheResponse = true;
    });

    nitroApp.hooks.hook('render:response', (response) => {
        if (!response.headers) {
            response.headers = {}
        }

        if (dontCacheResponse) {
            // console.log('Not caching response')
            // response.headers['Cache-Control'] = 'no-store, must-revalidate';
        }
    });

    nitroApp.hooks.hook('afterResponse', () => {
        // console.log('Setting dontCacheResponse to false')
        // dontCacheResponse = false;
    }); */
});