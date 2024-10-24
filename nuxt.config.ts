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
        },
        "/products/:id": {
          ssr: false
        },
    },
    hooks: {
        async "prerender:routes"(ctx) {
            for (const route of routes) {
                ctx.routes.add(route)
            }
        }
    },
    ssr: true,
    nitro: {
        preset: 'vercel'
    }
})
