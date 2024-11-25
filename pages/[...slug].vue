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
const { data } = useAsyncData(`lats-part-${lastPart}`, () => $fetch(`/api/page/${lastPart}`));

</script>

<template>
  <div>
    <ul>
      <li v-for="item in pages" :key="item.slug">
        <NuxtLink
            :to="item.slug"
            :external="true"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <TemplateRenderer
        v-if="data"
        nuxt-client
        :page-template="JSON.stringify(data)"
    />
  </div>
</template>

<style scoped>

</style>