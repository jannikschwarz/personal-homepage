import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
let firebaseApp;
let db; 

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
                keywords: data.keywords
            }
            return education;
        }); 
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
        });
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
        });
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
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const experience = {
                title: data.title,
                startDate: data.startDate,
                endDate: data.endDate,
                text: data.text,
                keywords: data.keywords
            };
            return experience;
        });
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
    initialize
}