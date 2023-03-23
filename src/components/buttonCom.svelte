<button class="button" on:click={onClick}>
    <p>{text}</p>
    <div class="icon">
        <Fa icon={faArrowRight} size="2.1x" primaryColor="#1b79c7"/>
    </div>
</button>

<script>
// @ts-nocheck
    import { goto } from "$app/navigation";
    import Fa from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

    export let link = "";
    export let text; 

    function onClick() {
        goto(link);
    }
</script>

<style>
    .button{
        display: grid;
        grid-template-columns: auto auto;
        background-color: transparent;
        border-color: #1b79c7;
        border-radius: unset;
        min-width: 10rem;
        color: #1b79c7;
        margin-top: 1rem!important;
        font-size: 15px;
    }

    .button:hover{
        border-color: black;
        cursor: pointer;
    }

    .icon{
        margin-top: 9px;
    }
</style>