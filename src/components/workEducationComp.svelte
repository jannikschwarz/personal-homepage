<div class="container">
    <p>
        <strong>{title}</strong>
    </p>
    <p class="small">
        <em>{startDate} - {endDate}</em>
    </p>
    <p class="small">{text}</p>
    <ul>
        {#each keywords as keyword}
            <li class="small">{keyword}</li>
        {/each}
    </ul>
    <hr>
</div>

<script>
// @ts-nocheck

    export let title; 
    export let startDate; 
    export let endDate; 
    export let text; 
    export let keywords;
</script>

<style>

    p{
        font-size: 16px;
        padding: 0;
        margin: 0;
    }

    .small{
        font-size: 14px;
    }
</style>