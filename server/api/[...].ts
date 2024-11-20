export default defineEventHandler(async (event) => {
    return new Promise((resolve, reject) => {
        console.log(`Received request: ${event.path}`);
        const todo = Math.ceil(Math.random() * 200)
        setTimeout(async () => {
            const res = await $fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
            resolve(res)
        }, 3000)
    })
});