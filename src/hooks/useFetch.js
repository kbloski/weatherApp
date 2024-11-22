import { ref, watch } from "vue";

export function useFetch( url ){
    const fullUrl = ref(url)
    const loading = ref(false);
    const errorCode = ref(null);
    const data = ref(null)

    function fetchData(){
        loading.value = true;
        errorCode.value = null;

        fetch(fullUrl.value, { method: "GET" })
        .then( res => {
            if (!res.ok) throw new Error(res.status);
            return res.json()
        })
        .then( resData => data.value = resData)
        .catch( err => {
            console.log( err.message )
            errorCode.value = Number(err.message)
        })
        .finally( () => loading.value = false)
    }

    watch( fullUrl, () => {
        if (fullUrl.value) fetchData()
    }, { immediate: true})
    
    return {
        data, 
        loading,
        errorCode,
        setNewUrl: (url) => fullUrl.value = url
    }
}