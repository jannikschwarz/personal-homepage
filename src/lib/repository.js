import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, setDoc, addDoc, doc, initializeFirestore} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import { logginEmails } from './logins';
let firebaseApp;
let db; 
let auth; 
let date;
let expirationTime;

const API_KEY = 'AIzaSyDNbj6O-ZihnVPGHq4siJ4Lb7Y8uW3nLd4';
const MESSAGING_SENDER_ID = '386460790150';
const APP_ID = '1:386460790150:web:8457457237456a52a91007';
const MEASUREMENT_ID = 'G-NXGXLER947';

function initialize(){
    const projectId = 'personal-page-94bee';
    const firebaseConfig = {
        apiKey: API_KEY,
        authDomain: `${projectId}.firebaseapp.com`,
        projectId: projectId,
        storageBucket: `${projectId}.appspot.com`,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID,
        databaseURL: `https://${projectId}.eur3.firebasedatabase.app`
    };
    firebaseApp = initializeApp(firebaseConfig);
    db = initializeFirestore(firebaseApp, {
        experimentalForceLongPolling: true,
        useFetchStreams: false
    });
    auth = getAuth(firebaseApp);
    date = new Date();
}

async function userLogin(password){
    if(!db){
        initialize();
    }

    try{
        const emails = logginEmails;
        let passChars = `${password.charAt(0)}${password.charAt(1)}`
        let emailToUse = emails.find(el => {
            let chars = `${el.charAt(0)}${el.charAt(el.indexOf("@") - 1)}`
            if(chars == passChars){
                return el; 
            }
        })
        const firebaseRep = await signInWithEmailAndPassword(auth, emailToUse, password);
        const response = {
            uid: firebaseRep.user.uid,
            accessToken: firebaseRep.user.accessToken,
            expirationTime: firebaseRep.user.stsTokenManager.expirationTime,
            email: emailToUse, 
            password: password
        };
        expirationTime = response.expirationTime;
        return response;
    } catch (error) {
        return undefined;
    }
}

async function sendLoggin(emailToUse, password){
    let logginData = {
        email: emailToUse, 
        password: password,
        timestamp: `${date.toString()}`
    }
    await setDoc(doc(db,'loggins/',logginData.email),logginData)
}

async function getEducations(){
    checkExpiration();
    try{
        const snapshot = await getDocs(collection(db,'educations'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const education = {
                title: data.title,
                startDate: data.startDate,
                endDate: data.endDate,
                text: data.text,
                keywords: data.keywords,
                rank: data.rank
            }
            return education;
        }).sort((a,b)=>a.rank-b.rank); 
    }catch(error){
        return undefined;
    }
}

async function getLanguages(){
    checkExpiration()
    try{
        const snapshot = await getDocs(collection(db,'languages'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const language = {
                name: data.name,
                written: data.written,
                spoken: data.spoken
            }
            return language;
        }); 
    }catch(error){
        return undefined;
    }
}

async function getProgrammingLanguages(){
    checkExpiration()
    try{
        const snapshot = await getDocs(collection(db,'programming-languages'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const programmingLanguage = {
                name: data.name,
                level: data.level
            }
            return programmingLanguage;
        }).sort((a,b)=>b.level-a.level);;
    }catch(error){
        return undefined;
    }
}

async function getTools(){
    checkExpiration()
    try{
        const snapshot = await getDocs(collection(db,'tools'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const tool = {
                name: data.name,
                level: data.level
            };
            return tool;
        }).sort((a,b)=>b.level-a.level);
    }catch(error){
        return undefined;
    }
}

async function getWorkExperience(){
    checkExpiration()
    try{
        const snapshot = await getDocs(collection(db,'work-experience'));
        let toRetrun = snapshot.docs.map(doc => {
            const data = doc.data();
            const experience = {
                title: data.title,
                startDate: data.startDate,
                endDate: data.endDate,
                text: data.text,
                keywords: data.keywords,

            };
            return experience;
        });
        return toRetrun.sort((a,b)=>b.rank-a.rank);
    }catch(error){
        return undefined;
    }
}

async function getHobbies(){
    checkExpiration()
    try{
        const snapshot = await getDocs(collection(db,'hobbies'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const hobby = {
                title: data.title,
                date: data.date,
                text: data.text
            };
            return hobby;
        });
    }catch(error){
        return undefined;
    }
}

function checkExpiration(){
    let current = date.getTime();
    if(current >= expirationTime){
        localStorage.setItem('login',"false");
    }
}

export {
    getEducations,
    getHobbies,
    getLanguages,
    getProgrammingLanguages,
    getTools,
    getWorkExperience,
    initialize,
    userLogin,
    sendLoggin
}