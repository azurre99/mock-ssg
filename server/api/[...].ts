export default defineEventHandler(async (event) => {
    const random = Math.random()
    if (random < 0.5) {
        throw createError({
            message: 'Error',
            statusCode: 404
        })
    }

    return new Promise((resolve, reject) => {
        console.log(`Received request: ${event.path}`);
        const todo = Math.ceil(Math.random() * 200)
        setTimeout(async () => {
            const res = await $fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
            resolve(res)
        }, 3000)
    })
});