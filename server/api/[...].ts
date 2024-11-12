export default defineEventHandler(async (event) => {
    console.log(`Received request: ${event.path}`);

    const todo = Math.ceil(Math.random() * 201)
    return await $fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
});