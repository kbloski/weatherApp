<template>
    <nav>
        <ul>
            <router-link to="/home"><li>Sprawdź pogodę</li></router-link>
            <router-link to="/about-me"><li>O mnie</li></router-link>
            <router-link to="/contact"><li>Kontakt</li></router-link>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    list-style: "|";
}

li {
    margin-left: 1rem;
    padding-left: .2rem;
}

a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
}

a:hover {
    color: antiquewhite;
}

.router-link-active {
    color: aliceblue;
    font-weight: bolder;
}

@media screen and (max-width: 400px){
    ul {
        display: block;
    }
}

</style>