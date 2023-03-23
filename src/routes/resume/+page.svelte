<div class="container">
    <div class="nav">
        <Navigation />
    </div>
    <div class="content">
        <div class="grid-item">
            <h2 class="ml-2">
                <span class="index">
                    1.
                </span>
                My School years
                <hr class="underline">
            </h2> 
            <div class="text ml-2">
                <p>
                    I started with my first experience within development in Gymnasium (age 18) by choosing the Coding line, here we mostly worked with the basic with Java development. 
                    This taught me the Object-oriented programming paradign and introduced me to some simple coding principles. 
                </p>
                {#if showSchool}
                <div>
                    <p>
                        With the knowledge and experience gained from my Gymnasium years I decided to start my education within the field by entering the Datalogi education at SDU in Odense. 
                        Being a Datalogi education meant it was more math oriented and furthermore classes were conducted in a blackboard style with only very few practical classes in which
                        we got the opportunity to code. Being a more practmatical individual this style of classes were not to my liking and even though I managed fine I obted to switch studies
                        at the end of my second semester. 
                    </p>
                    <p>
                        With the less enjoyable classes of the Datalogi education in mind, I searched for a university that instead conducted classes in a more practical way. The one I found was
                        the Prof. Bachelor degree in Software-Engineering at VIA university in Horsens, who prided themselves on that their education was up 80% pure practical classes. 
                        No questions asked I switched and choose the English class instead of Danish to further develop my English skills. VIA quickly showed to be true to their word as classes
                        who had a 4 hours duration, used a maximum of 30min of that duration on blackboard/PP presentations and the remaing time on helping students code. 
                    </p>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => showSchool = !showSchool}>
                    {#if showSchool}
                        Show Less
                        <Fa icon={faArrowUp}/>
                    {:else}
                        Read More
                        <Fa icon={faArrowDown}/>
                    {/if}
                    <hr>
                </button>
            </div>
        </div>
        <div class="grid-item">
            <h2 class="ml-2">
                <span class="index">
                    2.
                </span>
                Kamstrup Experience
                <hr class="underline">
            </h2>
            <div class="text ml-2">
                <p>
                    VIA was an absolut joyful time, there were very few courses that I found tedious and my knowledge kept on being expanded. As a requirement of the education, each 
                    student must in their 5th semester take an internship at a company to further develop their skill and gain on-hand experience as a developer. I managed to land 
                    and internship at the highly after sought company Kamstrup as a High-level engineer intern in the Communication department. The following 6 month I learned more then 
                    what I had learned in the 1.5 years of school at VIA. The system we would expand on was an old .NET testing kit for the internal developers. This meant our 
                    customers/users were sitting next door and this gave us good experience in communicating and adhering to customer demands. The addition we were to add to the system was
                    supposed to take us the 6 month we had, but we ended up finishing it within 3 months, putting our Teamlead in a bit of a situation as he had to find a new tasks. 
                </p>
                {#if showKamstrup}
                <div>
                    <p>
                        As we had quickly proven to be capable individuals, the two of us were both offered a position as student-workers after our internship had finished. We both accepted but 
                        sadly my co-student-worker came down with a severe sickness. This left me to handle the system by myself and I became the expert within the team when it came to that 
                        test system. With my start as a student-worker, I was tasked to find possible additions to the system and as the Teamlead had to focus on the next group of interns meant 
                        that I was self-driven. 
                    </p>
                    <p>
                        During my Student-work time I learned many new technolgies as I had to see if they could be used to further expand the software. Some being IronPython and Docker which
                        turned out not to fit the system. Finally as my last tasks, I had to migrate the entire system from the old SVN source control to the newer Gitlab source control system and
                        also the setup CI/CD pipeline, 
                    </p>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => showKamstrup = !showKamstrup}>
                    {#if showKamstrup}
                        Show Less
                        <Fa icon={faArrowUp}/>
                    {:else}
                        Read More
                        <Fa icon={faArrowDown}/>
                    {/if}
                    <hr>
                </button>
            </div> 
        </div>
        <div class="grid-item">
            <h2 class="ml-2">
                <span class="index">
                    3.
                </span>
                My skills
                <hr class="underline">
            </h2> 
            <div class="text ml-2">
                <p>
                    With my university focusing on pratical classes, I quickly got good at taking new technolgies, examing, learning and mastering them within a short time-period. 
                    This skill was further developed during my internship, together with the skill of deep delving into complex code and understand the fundamentals.  
                </p>
                {#if showKamstrup}
                <div>
                    <p>
                        After my Internship and a bit during my student-work time, I discovered that I also enjoy challenging myself. This came in the form of me choosing courses that I had 
                        no previous experience in and thereby was completly out of my expertise. I would then master these new fields quite quickly and as proof of that many of the grades 
                        I received of those courses were above average. The last big challenge I gave myself was to finally enter the world of Front-end developer, as I so far had 
                        focus mostly on Backend and Hardware. I did this by taking the 'JavaScript' course in my last semester and taking the roll of developing the 
                        webpage our Bachelor project used and again proof of my skills came in me acing all 4 exams in the last semester. 
                    </p>
                </div>
                {/if}
                <button class="collapsible-b" on:click={() => showKamstrup = !showKamstrup}>
                    {#if showKamstrup}
                        Show Less
                        <Fa icon={faArrowUp}/>
                    {:else}
                        Read More
                        <Fa icon={faArrowDown}/>
                    {/if}
                    <hr>
                </button>
            </div>
        </div>
    </div>
</div>
<footer>
</footer>
<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import Navigation from "../navigation.svelte";
    import Fa from 'svelte-fa'
    import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

    let showSchool, showKamstrup, showSkills;
    
    onMount(() => {
        showSchool, showKamstrup, showSkills = false; 
    });
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
        gap: 15px;
        width: 70%;
        margin-right: auto;
        margin-left: auto;
        font-family: montserrat;
    }

    .grid-item{
        background-color: #2f353f;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px #454e5aad;
    }

    .collapsible-b{
        background: transparent;
        border: transparent;
        color: rgba(255, 255, 255, 0.349);
        font-size: 15px;
        width: 100%;
    }

    .collapsible-b:hover{
        color: #1e2228;
        cursor: pointer;
    }

    .text{
        color: whitesmoke;
    }
    
    .index{
        color: #2196f3;
    }
    
    .underline{
        width: 80%;
    }

    .ml-2{
        margin-left: 0.5rem!important;
    }

    h2{
        color: whitesmoke;
        font-size: 1.7em;
    }

    hr{
        margin: 0.5rem 0;
        border: 1;
    }

    @media screen and (min-width: 1100px){
        .text{
            text-align: center;
            align-items: center;
            width: 80%;
        }
    }
</style>