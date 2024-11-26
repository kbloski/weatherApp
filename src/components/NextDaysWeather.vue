<template>
    <div>
        Next days Wether
        <pre>
            {{ weatherList }}
        </pre>
    </div>
</template>

<script>
export default {
    props: {
        weatherList: { required: true}
    }
}
</script>