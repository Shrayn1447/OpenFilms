export const fetcher = (url) => fetch(url,{
    headers:{
        "X-API-KEY": "6E58WF2-88QME5B-QVTVPMA-S1XS9EM"
    }
}).then(r => r.json())