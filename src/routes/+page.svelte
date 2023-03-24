<div class="container">
    <h1 class="welcome-text" >Jannik S-W</h1>
    <p class="welcome-text">Welcome to my page, this side was created to give a personal introduction of who I am</p>
    <div class="content">
        <div class="form">
            <div class="txt_field">
                <input type="password" required bind:value={code}/>
                <span></span>
                <label>Login Code</label>
            </div>
            <button on:click={loginSubmit}>Login</button>
        </div>
    </div>
    <p class="error">{errorMassage}</p>
</div>
<canvas bind:this={el} class="webgl"/>

<script>
    import { onMount } from 'svelte';
    import { createScene } from './scene';
    import { goto } from '$app/navigation';
    import { userLogin, sendLoggin } from '../lib/repository'

    /**
     * @type {HTMLCanvasElement}
     */
    let el; 
    /**
     * @type {any}
     */
    let code;
    let errorMassage = '';

    onMount(() => {
        createScene(el);
        localStorage.setItem('login',"false");
    });;

    async function loginSubmit() {
        if(!code){
            errorMassage = 'Login Code missing';
            return;
        }
        const response = await userLogin(code);
        if(response == undefined){
            errorMassage = 'failed to login'
        }else{
            errorMassage = '';
            await sendLoggin(response.email, response.password);
            localStorage.setItem('login',"true");
            goto('/home');
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        font-family: montserrat;
    }

    .webgl{
        position: fixed;
        top: 0;
        left: 0;
        outline: none;
    }

    .container {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: grid;
        place-content: center;
        font-family: 'Poppins';
        color: white;
    }

    .content {
        display: flex;
        gap: 5em;
        width: 100%;
        padding-top: 1em;
        position: relative;
    }

    .content:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid white;
    }

    h1 {
        font-size: 4rem;
        width: 50vw;
        line-height: 97%;
        text-align: left;
        margin-bottom: 15px;
    }

    h1, p {
        flex-basis: 0;
        flex-grow: 1;
    }

    p {
        font-size: 1.3;
        width: 40vw;
    }

    .form  .txt_field{
        position: relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
    }

    .txt_field input{
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
        color: white;
    }

    .txt_field label{
        position: absolute;
        top: 50%;
        left: 5px;
        color: white;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }

    .txt_field span::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: white;
        transition: .5s;
    }

    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label{
        top: -5px;
        color: white;
    }

    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before{
        width: 100%;
    }

    button{
        width: 100%;
        height: 50px;
        border: 1px solid;
        border-radius: 25px;
        background: transparent;
        color: white;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        text-align: center;
    }

    button:hover{
        border-color: gray;
        transition: .5s;
    }

    .error {
        padding-top: 1rem;
    }

    @media screen and (max-width: 480px){
        .welcome-text{
            width: 20rem;
        }
    }

    @media screen and (max-width: 400px){
        .welcome-text{
            width: 15rem;
        }
    }
</style>