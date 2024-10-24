// https://nuxt.com/docs/api/configuration/nuxt-config
const routes = [
    '/no-trailing',
    '/test/',
    '/socks/',
    '/hats/beanies',
    '/blogs/1341',
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
        }
    },
    ssr: true,
    generate: {
        routes: [
            ...routes
        ]
    },
    nitro: {
        preset: 'vercel',
        prerender: {
            crawlLinks: false
        }
    },
    router: {
        options: {
            strict: true,
        }
    },
})
