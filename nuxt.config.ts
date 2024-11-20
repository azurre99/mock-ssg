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
        "/**": { isr: true },
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
        },
        payloadExtraction: true
    },
    vue: {
        runtimeCompiler: true,
    }
})
