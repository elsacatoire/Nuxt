
export default defineCachedEventHandler(async (event) => {

    /*     // handle query params
        const { name } = getQuery(event)
    
        // handle post data
        const { age } = await readBody(event) */

    // api call with private key ($fetch for server route)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_tUEOO4Yw8XEqDMgnRIuMOQ06IPFmMnwiPkKBxKNu')

    return data
})