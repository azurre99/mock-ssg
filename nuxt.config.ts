// https://nuxt.com/docs/api/configuration/nuxt-config
const routes = [
    '/A',
    '/B/',
    '/blogs/1341',
    '/C'
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
    nitro: {
        preset: 'vercel',
        prerender: {
            crawlLinks: false,
            routes: [
                ...routes
            ],
            autoSubfolderIndex: false
        },
        vercel: {
            config: {

            },

        }
    },
    router: {
        options: {
            strict: false
        }
    },
    site: {
        trailingSlash: true,
    }
})
