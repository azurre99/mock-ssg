// https://nuxt.com/docs/api/configuration/nuxt-config
const routes = [
    '/socks/',
    '/hats/beanies/',
    '/blogs/1341/',
]

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    compatibilityDate: '2024-04-03',
    routeRules: {
        "/products/": {
            prerender: true
        }
    },
    hooks: {
        async "prerender:routes"(ctx) {
            const routes = [
                '/socks/',
                '/hats/beanies/',
                '/blogs/1341/',
            ]

            for (const route of routes) {
                ctx.routes.add(route)
            }
        }
    },
    ssr: true
})
