import { ref } from 'vue';

export function loadFileFromPublicAsText( fileUrl ){
    const text = ref("");
    const error = ref(null)
    const loading = ref(true)

    fetch( fileUrl )
    .then( res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.text() 
    })
    .then( data => text.value = data)
    .catch( err => {
        console.error( err.message )
        error.value = err.message
    })
    .finally( () => loading.value = false)

    return { text, error, loading }
}