<script setup lang="ts">
const pages = [
  {
    "slug": "/home-page/",
    "name": "Home Page"
  },
  {
    "slug": "/about-us/",
    "name": "About Us"
  },
  {
    "slug": "/services/",
    "name": "Services"
  },
  {
    "slug": "/contact/",
    "name": "Contact"
  },
  {
    "slug": "/blog/",
    "name": "Blog"
  },
  {
    "slug": "/careers/",
    "name": "Careers"
  },
  {
    "slug": "/privacy-policy/",
    "name": "Privacy Policy"
  },
  {
    "slug": "/terms-of-service/",
    "name": "Terms of Service"
  },
  {
    "slug": "/faq/",
    "name": "FAQ"
  },
  {
    "slug": "/testimonials/",
    "name": "Testimonials"
  },
  {
    "slug": "/portfolio/",
    "name": "Portfolio"
  }
]
import {useRoute, useRouter} from "#vue-router";
const router = useRouter();

let pageSplit = router.currentRoute.value.path.split("/").filter((it) => it);
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : "";
const { data, error } = useAsyncData(`lats-part-${lastPart}`, () => $fetch(`/api/page/${lastPart}?date=${new Date().toISOString()}`));

const headers = useRequestHeaders();
const disabledSeoFromHeader = headers['d-seo']

const disabledSEO = router.currentRoute.value.query['d-seo']
console.log(router.currentRoute.value.query)
console.log(headers)

if (error.value) {
  throw createError({
    message: "Page not found",
    status: 400
  })
}

</script>

<template>
  <div>
    <h1>
      SEO disabled: {{ disabledSEO }}
    </h1>
    <h1>
      SEO disabled from header: {{ disabledSeoFromHeader }}
    </h1>
  </div>
</template>

<style scoped>

</style>