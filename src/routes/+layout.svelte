<slot>

</slot>

<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    let isLoggedIn
    onMount(() => {
        isLoggedIn = localStorage.getItem('login');
        if(isLoggedIn !== 'true'){
            goto('/');
        }
    });
</script>

