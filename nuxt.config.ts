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
