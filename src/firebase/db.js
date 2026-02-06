import { getFirestore, collection, getDocs , query, where, doc, getDoc, addDoc, serverTimestamp} from "firebase/firestore";
import {app} from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id,data: doc.data()})
    });
    return items;
}

export const getCategorys = async () => {
    const querySnapshot = await getDocs(collection(db, "category"));
    const category = [];
    querySnapshot.forEach((doc) => {
        category.push({id: doc.id, data: doc.data()});
    });
    return category;
}

export const getCategory = async (cat) => {
    const q = query (collection(db, "items"), where("category", "==", `${cat}`))

    const querySnapshot = await getDocs(q);
    const category = [];
    querySnapshot.forEach((doc) => {
        category.push({id: doc.id, data: doc.data()});
    });
    return category;
}

export const getProductId = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef); 
    if(docSnap.exists())
        return {id: docSnap.id, data: docSnap.data()};
    else
        console.log("No se encontro el producto");
}

export const createOrder =  async(user, items, total) => {
    const order = {
        user,
        items,
        total,
        time: serverTimestamp()
    }
    try{
        const docRef = await addDoc(collection(db, "orders"), order)
        console.log("Se creo el documento: ", docRef.id)
    }
    catch{
        console.log("Error al guardar en db")
    }
};




