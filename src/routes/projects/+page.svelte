<div class="container">
    <div class="nav">
        <Navigation />
    </div>
    <div class="content">
        <div class="project">
            <h1>
                <span class="index">
                    1.
                </span>
                DS & DK Bachelor Project
            </h1>
            <div class="inner-project">
                <div class="info">
                    <h2>Project Info</h2>
                    <hr>
                    <p><strong>For the Bachelor Project, the team created a Drone Development Kit</strong></p>
                    <p>The purpose of the Kit is to allow Drone developing Companies to use the test tool to ensure the developed 
                        drones functions as expected. The Kit will give a visualization of the drone on its Homepage whilst the drone 
                        itself is connected to a WebAPI that send the date to a cloud database. The Homepage then live updates the 
                        3D model accordingly to the send data
                    </p>
                    <p>This Project expanded over <strong>Front-end</strong>, <strong>Middleware (RestAPI)</strong>, and <strong>Hardware</strong></p>
                </div>
                {#if proj2}
                <hr>
                <h2>Tools&Services</h2>
                <div class="tools-services">
                    <div class="image-box">
                        <img src="./tools-services/firebase.png" class="icon" alt="firebase"/>
                    </div>
                    <div class="image-box">
                        <img src="./tools-services/node.png" class="icon" alt="node"/>
                    </div>
                    <div class="image-box">
                        <img src="./tools-services/Threejs.png" class="icon" alt="threejs"/>
                    </div>
                    <p>Used for Cloud Databasing and Hosting the Frontend</p>
                    <p>Used to build the Rest WebAPI connected to the drone</p>
                    <p>Used to create 3D animated models that represent the drone</p>
                </div>
                <hr>
                <h2>Links</h2>
                <div class="links">
                    <p>Github API:</p>
                    <a style="color: #2196f3;" href="https://github.com/jannikschwarz/Drone-Stabilization_WebAPI">Drone-Stabilization-WebAPI</a>
                    <p>Github Frontend:</p>
                    <a style="color: #2196f3;" href="https://github.com/jannikschwarz/Drone-Stabilization-FrontEnd">Drone-Stabilization-Frontend</a>
                    <p>Youtube:</p>
                    <a style="color: #2196f3;" href="https://www.youtube.com/watch?v=TtA2yLlV1VE&ab_channel=Viggo">A short video of Product</a>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => proj2 = !proj2}>
                    {#if proj2}
                        <Fa icon={faArrowCircleUp} size="1.8x"/>
                    {:else}
                        <Fa icon={faArrowCircleDown} size="1.8x"/>
                    {/if}
                </button>
            </div>
        </div>
        <div class="project">
            <h1>
                <span class="index">
                    2.
                </span>
                Unity Exams Project
            </h1>
            <div class="inner-project">
                <div class="info">
                    <h2>Project Info</h2>
                    <hr>
                    <p><strong>For the course XRD we created a full race came for VR with Unity</strong></p>
                    <p>
                        For the last semester I choose the XRD virtual reality course, in which we were tasked to create a full VR experience 
                        that utilizes all core functionalities of the Oculus VR headset. Our team obted for a virtual race game that uses the 
                        headset to give a front perspective of a racer. 
                    </p>
                </div>
                {#if proj1}
                <hr>
                <h2>Tools&Services</h2>
                <div class="tools-services grid-2">
                    <div class="image-box">
                        <img src="./tools-services/unity.png" class="icon" alt="unity"/>
                    </div>
                    <div class="image-box">
                        <img src="./tools-services/oculus.png" class="icon" alt="node"/>
                    </div>
                    <p>Used <strong>Unity</strong> engine to create the VR game</p>
                    <p>Used <strong>Oculus</strong> plugin to utilize its handcontrol and interaction system</p>
                </div>
                <hr>
                <h2>Links</h2>
                <div class="links">
                    <p>Github:</p>
                    <a style="color: #2196f3;" href="https://github.com/KristofLenard12/XR_project_X2">Repository of Unity XR_Project</a>
                    <p>Youtube:</p>
                    <a style="color: #2196f3;" href="https://youtu.be/RGK7vuxCuCQ">Youtube Presentation of XR_Project</a>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => proj1 = !proj1}>
                    {#if proj1}
                        <Fa icon={faArrowCircleUp} size="1.8x"/>
                    {:else}
                        <Fa icon={faArrowCircleDown} size="1.8x"/>
                    {/if}
                </button>
            </div>
        </div>
        <div class="project">
            <h1>
                <span class="index">
                    3.
                </span>
                6th Semester Cloud Project
            </h1>
            <div class="inner-project">
                <div class="info">
                    <h2>Project Info</h2>
                    <hr>
                    <p><strong>In the 6th Semester we were tasked to build an Cloud based Webpage</strong></p>
                    <p>The purpose of the project was to teach and understand the CI/CD setup whilst using a cloud service to hoste the webpage/API created. For this we created a 
                        WebAPI using Node.js for a REST API hosted on Google Cloud, with a connected Frontpage where Sveltekit was used as the JS Framework.  
                    </p>
                    <p>This Project expanded over <strong>Front-end</strong> and <strong>WebAPI</strong></p>
                </div>
                {#if proj3}
                <hr>
                <h2>Tools&Services</h2>
                <div class="tools-services">
                    <div class="image-box">
                        <img src="./tools-services/firebase.png" class="icon" alt="firebase"/>
                    </div>
                    <div class="image-box">
                        <img src="./tools-services/node.png" class="icon" alt="node"/>
                    </div>
                    <div class="image-box">
                        <img src="./tools-services/svelte-icon.png" class="icon" alt="threejs"/>
                    </div>
                    <p>Used for Cloud Databasing and Hosting the Frontend</p>
                    <p>Used to build the Rest WebAPI connected to the drone</p>
                    <p>Used to create Front-end Page</p>
                </div>
                <hr>
                <h2>Links</h2>
                <div class="links">
                    <p>Github API:</p>
                    <a style="color: #2196f3;" href="https://github.com/jhviggo/sep6-api">NodeJS RestAPI</a>
                    <p>Github Frontend:</p>
                    <a style="color: #2196f3;" href="https://github.com/jhviggo/sep6-frontend">Svelte FrontEnd</a>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => proj3 = !proj3}>
                    {#if proj3}
                        <Fa icon={faArrowCircleUp} size="1.8x"/>
                    {:else}
                        <Fa icon={faArrowCircleDown} size="1.8x"/>
                    {/if}
                </button>
            </div>
        </div>
    </div>
    <footer>
    </footer>
</div>
<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import Navigation from "../navigation.svelte";
    import Fa from 'svelte-fa'
    import { faArrowCircleUp, faArrowCircleDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

    let proj1, proj2, proj3;
    onMount(() => {
        proj1, proj2, proj3 = false; 
    })
</script>
<style>
    .container{
        display: grid;
        gap: 50px;
        grid-template-rows: 6vh auto auto;
        min-height: 100vh;
        background-color: #1e2228;
    }

    .content{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 50% 50%;
        width: 70%;
        gap: 20px;
        margin-right: auto;
        margin-left: auto;
        font-family: montserrat;
        text-align: center;
    }

    .inner-project{
        display: grid;
        grid-template-rows: auto;
        gap: 10px;
        position: relative;
        text-align: center;
        font-size: 0.9em;
        color: whitesmoke;
        background-color: #2f353f;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px #454e5aad;
        min-height: 18rem;
        min-width: 25rem;
    }

    .collapsible-b{
        background: transparent;
        border: transparent;
        color: rgba(255, 255, 255, 0.349);
        font-size: 15px;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .collapsible-b:hover{
        color: #1e2228;
        cursor: pointer;
    }

    .tools-services{
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    .links{
        display: grid;
        grid-template-columns: auto auto;
        color: #2196f3;
        font-size: 20px;
        align-items: center;
    }

    .grid-2{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .index{
        color: #2196f3;
    }

    .icon{
        height: 5rem!important;
        max-width: 100%;
    }

    h1{
        color: whitesmoke;
        font-size: 1.7em;
    }

    h2{
        color: whitesmoke;
        font-size: 1.5em;
    }

    hr{
        margin: 0;
        color: black;
        background-color: black;
        border: 1;
        opacity: .1;
    }

    @media screen and (max-width: 1130px){
        .content{
            grid-template-rows: auto;
            grid-template-columns: auto;
        }
    }

    @media screen and (max-width: 540px){
        .content{
            position: absolute;
            width: 90%;
            left: 2%;
            top: 10%;
        }
    }

</style>
