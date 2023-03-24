<div class="container">
    <div class="nav">
        <Navigation />
    </div>
    <div class="content">
        <div class="side-items">
            <div class="side-item grid-item">
                <img class="profile svelte-fihri" src="./profile.jpg" alt="Profile picture"/>
                <div class="contact">
                    <div class="p-3 center">
                        <Fa icon={faEnvelopeOpen} size="2.5x" primaryColor="rgb(0, 95, 204)"/>
                    </div>
                    <div class="info p-3t">
                        <p><strong>Email</strong></p>
                        <p>jannikschwarz@live.dk</p>
                    </div>
                    <div class="p-3 center">
                        <Fa icon={faLocationPin} size="2.5x" primaryColor="rgb(0, 95, 204)"/>
                    </div>
                    <div class="info p-3t">
                        <p><strong>Västerås</strong></p>
                        <p>Sweden</p>
                    </div>
                    <div class="p-3 center">
                        <Fa icon={faCalendar} size="2.5x" primaryColor="rgb(0, 95, 204)"/>
                    </div>
                    <div class="info p-3t">
                        <p><strong>Birthdate</strong></p>
                        <p>October 13th, 1997</p>
                    </div>
                </div>
            </div>
            <div class="side-item grid-item">
                <div class="skills">
                    <h3 class="mb-2">Programming languages</h3>
                    {#each programmingLanguages as language}
                    <p class="mb-1">{language.name}</p>
                        <div class="skill-bar-container mb-2">
                            <div class="skill-bar" style="width:{language.level}%"/>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="side-item grid-item">
                <div class="skills">
                    <h3 class="mb-2">Tools & Services</h3>
                    {#each tools as tool}
                    <p class="mb-1">{tool.name}</p>
                        <div class="skill-bar-container mb-2">
                            <div class="skill-bar mb-2" style="width:{tool.level}%"/>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="side-item grid-item">
                <div class="skills">
                    <h3 class="mb-2">languages</h3>
                    {#each languages as language}
                        <div class="pd-5 mb-2">
                            <p class="mb-2">{language.name}</p>
                            <p><em>Write/Read</em></p>
                            <div class="skill-bar mb-2" style="width:{language.written}%"/>
                            <p><em>Spoken/Understood</em></p>
                            <div class="skill-bar" style="width:{language.spoken}%"/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="main-items">
            <div class="main-item grid-item">
                <div class="title-item">
                    <Fa icon={faBriefcaseClock} size="2.1x" primaryColor="rgb(0, 95, 204)"/>
                    <h1>Work Experience</h1>
                </div>
                <div class="main-item-container">
                    {#each workExperiences as exp}
                        <WorkEducationComp title={exp.title} startDate={exp.startDate} endDate={exp.endDate} text={exp.text} keywords={exp.keywords}/>
                    {/each}
                </div>
            </div>
            <div class="main-item grid-item">
                <div class="title-item">
                    <Fa icon={faSchoolLock} size="2.1x" primaryColor="rgb(0, 95, 204)"/>
                    <h1>Educations</h1>
                </div>
                <div class="main-item-container">
                    {#each educations as education}
                        <WorkEducationComp title={education.title} startDate={education.startDate} endDate={education.endDate} text={education.text} keywords={education.keywords}/>
                    {/each}
                </div>
            </div>
            <div class="main-item grid-item">
                <div class="title-item">
                    <Fa icon={faBoxOpen} size="2.1x" primaryColor="rgb(0, 95, 204)"/>
                    <h1>Hobbies</h1>
                </div>
                <div class="main-item-container">
                    {#each hobbies as hobby}
                        <HobbyComp title={hobby.title} text={hobby.text} date={hobby.date}/>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <footer></footer>
</div>
<script>
// @ts-nocheck

    import Navigation from "../navigation.svelte";
    import Fa from 'svelte-fa'
    import { faBriefcaseClock, faSchoolLock, faBoxOpen, faEnvelopeOpen, faLocationPin, faCalendar } from '@fortawesome/free-solid-svg-icons'
    import WorkEducationComp from "../../components/workEducationComp.svelte";
    import HobbyComp from "../../components/hobbyComp.svelte";
    import { onMount } from "svelte";
    import { getHobbies, getLanguages, getProgrammingLanguages, getTools, getWorkExperience, getEducations, initialize } from '../../lib/repository'


    let workExperiences = [];
    let educations = [];
    let hobbies = [];
    let programmingLanguages = [];
    let tools = [];
    let languages = [];

    onMount(async () => {
        initialize();
        languages = await getLanguages();
        programmingLanguages = await getProgrammingLanguages();
        tools = await getTools();
        workExperiences = await getWorkExperience();
        educations = await getEducations();
        hobbies = await getHobbies();
    });

</script>
<style>
    *{
        margin: 0;
        padding: 0;
        font-family: montserrat;
        color: rgb(130, 174, 224);
    }

    .nav{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .content{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 15px;
        width: 70%;
        margin-right: auto;
        margin-left: auto;
    }

    .container{
        display: grid;
        gap: 50px;
        grid-template-rows: 6vh 1fr auto;
        min-height: 100vh;
        background-color: #1e2228;
    }

    .side-items{
        display: grid;
        gap: 15px;
        grid-template-rows: auto;
    }

    .side-item{
        box-shadow: 2px;
        padding: 20px;
        max-width: 20rem;
    }

    .main-items{
        display: grid;
        grid-template-rows: auto;
        gap: 15px;
    } 

    .grid-item{
        background-color: #2f353f;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 2px #454e5aad;
    }

    .title-item{
        grid-row: 0;
        color: rgba(255, 255, 255, 0.877);
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        font-size: 1em;
        display: flex;
        margin: 15px;
    }

    .main-item-container{
        color: whitesmoke;
        margin: 0;
        margin: 15px;
    }

    .profile{
        width: 100%;
        margin: 0;
        border-radius: 15px 15px 0px 0px;
    }

    .contact{
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .info{
        display: grid;
        grid-template-rows: auto;
    }

    .skill-bar-container{
        background-color: rgba(102, 102, 102, 0.815);
        border-radius: 15px;
        height: 11px;
    }

    .skill-bar{
        background-color: #1da1f2;
        border-radius: 25px;
        height: 11px;
        transition: all 1s;
    }

    .pd-5{
        padding: 5px;
    }

    .p-3{
        padding: 1rem!important;
    }

    .p-3t{
        padding-top: 1rem!important;
    }

    .mb-2 {
        margin-bottom: 0.5rem!important;
    }

    .mb-1 {
        margin-bottom: 0.1rem!important;
    }

    p {
        color: whitesmoke;
    }

    h1{
        margin-left: 5px;
    }

    @media screen and (max-width: 1200px){
        .nav :global(.navContent){
            left: 5%
        }

        .container{
            grid-template-rows: 6vh auto auto;
        }

        .content{
            grid-template-columns: auto auto;
            width: 90%;
        }

        .main-items{
            width: 100%;
        }

        .side-items{
            max-width: 100%;
        }
    }

    @media screen and (max-width: 980px){

        .side-item{
            padding: 10px;
        }
    }

    @media screen and (max-width: 700px){
        .content{
            grid-template-columns: 100%;
            grid-template-rows: auto;
        }

        .side-items{
            max-width: 100%;
            padding: 0;
        }

        .side-item{
            max-width: 100%;
            padding: 20px;
        }

        .main-items{
            min-width: 1rem;
            max-width: 100%;
        }
    }

</style>