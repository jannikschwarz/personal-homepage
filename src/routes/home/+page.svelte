<div class="container">
    <div class="nav">
        <Navigation />
    </div>
    <div class="content">
        <div class="front-text">
            <h1>Jannik Schwarz-Wolf</h1>
            <p class="text">A software-engineer with the drive to challenge himself and learn new technologies, 
                whilst spending time fiddling around with small code projects and hobbies.</p>
        </div>
        <div class="mt-5">
            <h2>
                <span class="index">
                    1.
                </span>
                Core Values
            </h2>
            <div class="coreValues">
                <div class="inder-core">
                    <div class="index-panel">
                        <Fa icon={faTableList} size="4x" primaryColor="Grey"/>
                        <h3>Keep it clean</h3>
                    </div>
                    <p class="text">Any service will have new additions and structuring the code to allow for this transition to be smooth is vital. Following code 
                        principles and thinking ahead helps the process of future builds. Build understandable code and follow a flow of code structure</p>
                </div>
                <div class="inder-core">
                    <div class="index-panel">
                        <Fa icon={faLightbulb} size="4x" primaryColor="Yellow" secondaryColor="Blue" />
                        <h3>Creativity</h3>
                    </div>
                    <p class="text">To enjoy ones work one must be creative and have fun! Colaborate with co-workers and spend time to find creative solutions, expand ones knowledge
                        of aviable technologies and finally think broad.
                    </p>
                </div>
                <div class="inder-core">
                    <div class="index-panel">
                        <Fa icon={faPeopleGroup} size="4x"/>
                        <h3>Colaborate</h3>
                    </div>
                    <p class="text">A team is as strong as its weakest member, colaboration is key to find solutions and build a reliable service. Problems spend pondering alone
                        on could have been solved quickly when discussed with ones team members.
                    </p>
                </div>
                <div class="inder-core">
                    <div class="index-panel">
                        <Fa icon={faGears} size="4x"/>
                        <h3>Deployment</h3>
                    </div>
                    <p class="text">Having a continues deployment with the aid of DevOps tools creates a secure and easy scalable enviroment, together with source control makes for
                        a perfect coding experience. 
                    </p>
                </div>
            </div>
        </div>
        <hr class="mb-5 mt-5">
        <div>
            <h2>
                <span class="index">
                    2.
                </span>
                Resume
            </h2> 
            <p class="text mt-1">
                My name is Jannik, born and raised in Germany and then later relocated to Denmark. In Denmark I started my fascination with technology 
                and later in my Gymnasium years I started my studies in the arts of Software development.
            </p>
            <p class="text mt-2">
                Now in the year 2023 I have finished my Prof. Bachelore degree in Software-Engineering at VIA university in Horsens, with already good experience in the 
                field from my student-work and internship. 
            </p>
            <ButtonCom link="/resume" text="Resume"/>
        </div>
        <hr class="mb-5 mt-5">
        <div>
            <h2>
                <span class="index">
                    3.
                </span>
                Projects
            </h2>
            <p class="text mt-1">
                Throughout my studies and work experience I worked on multiple larger projects that expanded over Front-end, middleware, DevOps, Backend, Database, and even hardware. Do be 
                noted that the current shown project are from my years at VIA university.
            </p>
            <ButtonCom link="/projects" text="Projects"/>
        </div>
    </div>
    <footer>
    </footer>
</div>
<script>
    import Navigation from "../navigation.svelte";
    import Fa from 'svelte-fa'
    import { faTableList, faLightbulb, faPeopleGroup, faGears, faArrowRight } from '@fortawesome/free-solid-svg-icons'
    import ButtonCom from "../../components/buttonCom.svelte";
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        font-family: montserrat;
        color: rgb(130, 174, 224);
    }

    .content {
        display: grid;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }

    .container{
        display: grid;
        gap: 50px;
        grid-template-rows: 6vh auto auto;
        min-height: 100vh;
        background-color: #1e2228;
    }

    .nav{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .text{
        color: rgba(255, 255, 255, 0.877);
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        font-size: 1em;
        margin: 0;
        max-width: 70vh;
    }

    .front-text{
        display: grid;
        grid-template-rows: 6vh auto;
        gap: 1px;
    }

    .coreValues{
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 1px;
        text-align: center;
        font-size: 0.9em;
    }

    .index{
        color: #2196f3;
    }

    .inder-core{
        padding: 20px;
    }
    .mt-1{
        margin-top: 0.5rem!important;
    }

    .mt-2{
        margin-top: 1.5rem!important;
    }

    .mt-5{
        margin-top: 3rem!important;
    }

    .mb-5{
        margin-bottom: 3rem!important;
    }

    h3{
        padding: 10px;
        color: whitesmoke;
        font-size: 1.5em;
    }

    h2{
        color: whitesmoke;
        font-size: 1.7em;
    }

    hr{
        margin: 1rem 0;
        color: black;
        background-color: black;
        border: 1;
        opacity: .1;
    }

    @media screen and (max-width: 650px){
        .coreValues{
            grid-template-columns: auto auto;
        }
    }

    @media screen and (max-width: 520px){
        .content{
            width: 90%;
        }
    }

</style>
