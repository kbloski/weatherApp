<template>
    <header>
        <div>Ośw. księżyca: {{ moonIllumination }}%</div>
        <div>Faza: {{ moonPhase }}</div>
        <div>Wsch. słońca: {{ sunRise }}</div>
        <div>Zach. słońca: {{ sunSet }}</div>
        <div>Wsch. księżyca: {{ moonRise }}</div>
        <div>Zach. księżyca: {{ moonSet }}</div>
        <div>
            Śr. temp: 
            {{ avgtempC }}℃ ({{ avgtempF }}℉)
        </div>
    </header>    
</template>

<script>
export default {
    props: ["date", 'avgtempC', 'avgtempF', 'moonPhase', "moonIllumination", "sunRise", "sunSet", 'moonRise', "moonSet", ]
}
</script>

<style scoped>
header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

header > div {
    background-color: rgba(127, 229, 255, 0.4);
    border-radius: 1rem;

    font-size: .7rem;
    padding: .2rem 1rem;
    margin: .2rem;
    text-align: center;
}
</style>
