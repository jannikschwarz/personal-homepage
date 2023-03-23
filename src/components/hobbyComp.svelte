<div>
    <p>
        <strong>{title}</strong>
    </p>
    <p class="small"><em>{date}</em></p>
    <p class="small">{text}</p>
    <hr>
</div>

<script>
// @ts-nocheck

    export let title; 
    export let text; 
    export let date;
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