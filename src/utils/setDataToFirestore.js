import { doc, setDoc ,collection} from "firebase/firestore";

import { db } from "./firebaseConfig";

export function setDataToFirestore(props){
    const {data} = props;

    setDoc(doc(db,"products"),data).then(result =>{
        console.log(result)
    }).catch(error =>console.log(error))
}

