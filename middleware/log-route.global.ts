export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Going from ${from.fullPath} to ${to.fullPath}`);
});