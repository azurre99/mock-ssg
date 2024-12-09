export default defineEventHandler(async (event) => {
    console.log(event.path)

    return new Promise((resolve, reject) => {
        console.log(`Received request: ${event.path}`);
        const todo = Math.ceil(Math.random() * 200)
        setTimeout(async () => {
            resolve({
                name: 'test',
                todo: Math.random()
            })
        }, 3000)
    })
});