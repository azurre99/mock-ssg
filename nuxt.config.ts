// https://nuxt.com/docs/api/configuration/nuxt-config
const routes = [
    '/socks/',
    '/hats/beanies/',
    '/blogs/1341/',
]

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    routeRules: {
        "/": { prerender: true }
    },
    hooks: {
        async 'nitro:config' (nitroConfig) {
            if (nitroConfig.dev) { return }
            // ..Async logic..
            if (nitroConfig.prerender?.routes) {
                //nitroConfig.prerender.routes.push(...routes)
            }
            routes.forEach((route) => {
                if (nitroConfig.routeRules != undefined) {
                    nitroConfig.routeRules[`${route}`] = {
                        prerender: true
                    }
                }
            })
        }
        /*async "prerender:routes"(ctx) {
            const routes = [
                '/socks/',
                '/hats/beanies/',
                '/blogs/1341/',
            ]

            for (const route of routes) {
                ctx.routes.add(`${route}`)
            }
        },*/
    }
})
