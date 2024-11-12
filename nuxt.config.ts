// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    compatibilityDate: '2024-04-03',
    ssr: true,
    router: {
        options: {
            strict: false
        }
    },
    hooks: {
        async "nitro:config"(nitroConfig) {
            const newRules = {
                "/something/1": { isr: true },
                "/something/2": { isr: true },
                "/something/3": { isr: true },
                "/something/4/": { isr: true },
                "/something/5/": { isr: true },
            }
            nitroConfig.routeRules = {
                ...nitroConfig.routeRules,
                ...newRules
            }
        }
    }
})
