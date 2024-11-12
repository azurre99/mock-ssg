export default defineEventHandler(async (event) => {
    const url = getRequestURL(event)
    console.log(`Fetching url ${url.href}`)

    const todo = Math.ceil(Math.random() * 201)
    return await $fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
});