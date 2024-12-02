<template>
    <header>
        <div>Wschód ☀️: {{ sunRise }} / Zachód 🌄: {{ sunSet }}</div>
        <div>Oświetlenie 🌙: {{ moonIllumination }}%</div>
        <div>Faza księżyca 🌘: {{ moonPhase }}</div>
        <div>
            Średnia temp. 🌡️: 
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
    background-color: rgba(127, 187, 255, 0.4);

    font-size: .7rem;
    padding: .2rem 1rem;
    margin: .2rem;
    text-align: center;
}
</style>
