export const fetcher = (url) => fetch(url,{
    headers:{
        "X-API-KEY": "H3WV5M2-AVEMVNY-JHF5X3V-WZBYAWH"
    }
}).then(r => r.json())