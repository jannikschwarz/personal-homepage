<nav class="navigation">
    <div class="navContent">
        <div class="row">
            <NavigationComp navText={"Home"} navLink={"home"} />
            <NavigationComp navText={"My CV"} navLink={"cv"} />
            <NavigationComp navText={"Resume"} navLink={"resume"} />
            <NavigationComp navText={"Projects"} navLink={"projects"} />
        </div>
    </div>
</nav>

<script>
    import NavigationComp from "../components/navigationComp.svelte";
</script>

<style>
    .navigation{
        position: fixed;
        background-color: #2f353f;
        display: block;
        width: 100%;
        height: 6vh;
    }

    .navContent{
        position: absolute;
        background-color: #2f3a4762;
        left: 14%;
        border-radius: 8%;
        border-bottom: 5px solid rgb(73, 70, 70);
        border-left: 5px solid rgb(73, 70, 70);
        border-right: 5px solid rgb(73, 70, 70);
        height: 100%;
        padding: 5px;
        top: -18%;
    }

    .row{
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        padding: 10px;
    }

    @media screen and (max-width: 520px){
        .navContent{
            left: 5%;
            right: 5%;
        }
    }

    @media screen and (max-width: 390px){
        .navigation{
            height: 8vh;
        }

        .navContent{
            right: 5%;
        }
    }

    @media screen and (max-width: 240px){
        .navigation{
            height: 12vh;
        }
    }
</style>