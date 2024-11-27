<template>
    <header>
        <div>Oświetlenie księżyca: {{ moonIllumination }}%</div>
        <div>Faza księżyca: {{ moonPhase }}</div>
        <div>Wschód słońca: {{ sunRise }}</div>
        <div>Zachód słońca: {{ sunSet }}</div>
        <div>Wschód księżyca: {{ moonRise }}</div>
        <div>Zachód księżyca: {{ moonSet }}</div>
        <div>
            Średnia temp: 
            {{  avgtempC }}℃  ({{  avgtempF }}℉)
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
    background-color: rgba(127, 255, 212, 0.4);
    border-radius: 1rem;

    font-size: .7rem;
    padding: .2rem 1rem;
    margin: .2rem;
    text-align: center;
}
</style>
