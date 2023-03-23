<a class="col-auto p-3 svelte-ej3jkb navComp" href="/{navLink}">{navText}</a>

<script>
    export let navText = '';
    export let navLink = '';
</script>

<style>
    .navComp{
        color: rgb(134, 159, 230);
        text-decoration: none;
        font-family: montserrat;
        text-align: center;
        padding: 10px;
    }

    .navComp:hover{
        color: black;
    }
</style>