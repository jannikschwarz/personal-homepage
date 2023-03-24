import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, setDoc, addDoc} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
let firebaseApp;
let db; 
let auth; 
let date;

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
    db = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
    date = new Date();
}

async function userLogin(password){
    try{
        const emails = await getEmails();
        let passChars = `${password.charAt(0)}${password.charAt(1)}`
        console.log("Tried to log in : " + passChars);
        let emailToUse = emails.find(el => {
            let chars = `${el.charAt(0)}${el.charAt(el.indexOf("@") - 1)}`
            console.log(chars);
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
        return response;
    } catch (error) {
        return undefined;
    }
}

async function sendLoggin(emailToUse, password){
    let logginData = {
        email: emailToUse, 
        password: password,
        timestamp: `${date.toDateString()}`
    }
    await addDoc(collection(db,'loggins'),logginData);
}

async function getEmails(){
    if(!db){
        initialize();
    }
    try{
        const snapshot = await getDocs(collection(db,'emails'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            return data.email;
        }); 
    }catch(error){
        return undefined;
    }
}

async function getEducations(){
    if(!db){
        initialize();
    }
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
    if(!db){
        initialize();
    }
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
    if(!db){
        initialize();
    }
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
    if(!db){
        initialize();
    }
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
    if(!db){
        initialize();
    }
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
    if(!db){
        initialize();
    }
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