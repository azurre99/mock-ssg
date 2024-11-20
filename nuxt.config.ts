// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    compatibilityDate: '2024-04-03',
    routeRules: {
        "/**": { swr: true },
        "/api/**": { swr: false, isr: false }
    },
    router: {
        options: {
            strict: false
        }
    },
    experimental: {
        componentIslands: {
            selectiveClient: true
        }
    },
    vue: {
        runtimeCompiler: true,
    }
})
