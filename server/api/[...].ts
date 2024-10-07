export default defineEventHandler(async (event) => {
    const url = getRequestURL(event)
    const slug = url.searchParams.get('slug')
    console.log(slug)
    const date = new Date().toISOString()
    switch (slug) {
        case '/socks/':
            return {
                title: `Socks - ${date}`
            }
        case '/hats/beanies/':
            return {
                title: `Hats Beanies - ${date}`
            }
        case '/blogs/1341/': {
            return {
                title: `Blogs 1341 - ${date}`
            }
        }
        default:
            return {
                title: `No title - ${date}`
            }
    }

});