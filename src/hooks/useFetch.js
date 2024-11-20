import { ref, watch } from "vue";

export function useFetch( url ){
    const fullUrl = ref(url)
    const loading = ref(false);
    const error = ref(null);
    const data = ref(null)

    function fetchData(){
        loading.value = true;

        fetch(fullUrl.value, { method: "GET" })
        .then( res => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json()
        })
        .then( resData => data.value = resData)
        .catch( err => error.value = err.message)
        .finally( () => loading.value = false)
    }

    watch( fullUrl, () => fetchData(), { immediate: true})
    
    return {
        data, 
        loading,
        error,
        setNewUrl: (url) => fullUrl.value = url
    }
}