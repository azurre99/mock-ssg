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
        "/api/**": { swr: false, isr: false, cache: false },
    },
    router: {
        options: {
            strict: false
        }
    },
    experimental: {
        payloadExtraction: true
    },
    vue: {
        runtimeCompiler: true,
    }
})
