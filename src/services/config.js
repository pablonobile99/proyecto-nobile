// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnihql5TmGe7XR_OWmFSgwc9Txdq1710o",
  authDomain: "proyectofinalnobile.firebaseapp.com",
  projectId: "proyectofinalnobile",
  storageBucket: "proyectofinalnobile.firebasestorage.app",
  messagingSenderId: "455562894858",
  appId: "1:455562894858:web:98f5a9e087e8ca194509f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const productos = [
    { nombre: "Pepe", stock: 1, precio: 0, img: "../public/Images/g1.jpg", idCat: "gato", zona: "Tigre", tel: "11-32323285", detail: "GATO MACHO - 3 MESES . El es pepe, actualmente nos encontramos haciendole transito a hace 3 meses, ya come alimento balanciado y hace sus necesidades solito en su arenero. Pepe es muy cariñoso y se lleva muy bien con otros gatos y perros. Le gusta dormir siestitas al sol con sus hermanos de cuatros patas. Ronronea fuerte y le gustan los mimitos en su pancita. Actualmente se encuentra en adopcion, nosotros nos encontramos en Lugano y podemos acercarnos a zonas aledañas para su nuevo hogar. Les dejamos nuestro numero por cualquier consulta. 11-32323285- MARCELA" },
    { nombre: "Mishi", stock: 1, precio: 0, img: "../public/Images/g2.jpg", idCat: "gato", zona: "Munro", tel: "11-35719684", detail: "Gatito macho de 5 meses. muy jugueton. tiene todas sus vacunas y esta desparacitado. se adopta por zona norte. llamar y coordinar" },
    { nombre: "Saga", stock: 1, precio: 0, img: "../public/Images/g3.jpg", idCat: "gato", zona: "Quilmes", tel: "11-98524671", detail: "4 meses - gata hembra. llamar para arreglar un encuentro." },
    { nombre: "Poncho", stock: 1, precio: 0, img: "../public/Images/g4.jpg", idCat: "gato", zona: "CABA", tel: "11-32568741", detail: "poncho es un gato macho de 3 meses. fue rescatado junto a 2 hermanitos que ya fueron adoptados. Come alimento balanceado y esta entrenado para usar arenero. Es muy tranquilo. Llamar y preguntar por Juan Carlos para pasarle la info." },
    { nombre: "Hipo", stock: 1, precio: 0, img: "../public/Images/g5.jpg", idCat: "gato", zona: "CABA", tel: "11-19374852", detail: "Gato macho cariñoso. 5 meses. vacunado." },
    { nombre: "Spike", stock: 1, precio: 0, img: "../public/Images/g6.jpg", idCat: "gato", zona: "Moron", tel: "11-98742685", detail: "spike es una gatita de 4 meses. es muy juguetona y cariñosa. la rescatamos hace 1 mes y ya se encuentra vacunada. usa arenero y come comida balanceada. esta muy bien cuidada. llamar para coordinar encuentro o videollamada." },
    { nombre: "Transportadora para gatos", stock: 10, precio: 15000, img: "../public/Images/transp.jpg", zona: "Avellaneda", tel: "11-98741236", idCat: "productos", detail: "Fabricado con cordura impermeable premium, este bolso garantiza la protección de tu mascota en cualquier clima. Su base rígida extraìble proporciona estabilidad y seguridad durante el transporte.  Además, cuenta con ventilación en los 4 laterales lo que asegura la comodidad de tu mascota durante el viaje. Material: PVC. Costura Reforzada" },
    { nombre: "Rascador", stock: 10, precio: 9900, img: "../public/Images/rasca.png", idCat: "productos", zona: "San fernando", tel: "11-64985167", detail: "Este rascador combina elegancia y funcionalidad, proporcionando entretenimiento y bienestar a tu felino. Diseñado para mantener a tu gato ocupado, también protege tus muebles de arañazos." },
    { nombre: "Juguete de ratón", stock: 10, precio: 5400, img: "../public/Images/raton.jpg", idCat: "productos", zona: "Ituzaingo", tel: "11-35336959", detail: "Son juguetes diseñados para despertar el instinto cazador de tu gato y son ideales para el vínculo entre el ser humano y su mascota." },
    { nombre: "Arnes para gato", stock: 10, precio: 8000, img: "../public/Images/arnes.png", idCat: "productos", zona: "CABA", tel: "11-7531515", detail: "Uso típico del pecho: Permite reducir los tirones, mayor control y atención. De la espalda: Perros que pasean suavemente, viajes en auto y adiestramiento." },
    { nombre: "Pipeta para gatos", stock: 10, precio: 5000, img: "../public/Images/pipeta.jpg", idCat: "salud", zona: "Tigre", tel: "11-7896586", detail: "pipeta para gatos" },
    { nombre: "Comida balanceada xKg", stock: 10, precio: 3750, img: "../public/Images/comida.jpg", idCat: "salud", zona: "Ciudadela", tel: "11-98742563", detail: "es una fórmula exclusivamente diseñada con ingredientes de alta calidad, basada en la tecnología Active Health: una óptima combinación de nutrientes minuciosamente establecidos que ayudan a controlar el ph urinario, reducir la formación de cálculos y mantenener la salud del tracto urinario inferior." },
    { nombre: "Comida gatos bebe x Kg", stock: 10, precio: 4600, img: "../public/Images/bebe.jpg", idCat: "salud", zona: "CABA", tel: "11-96965856", detail: "Dale a tu gatito el mejor comienzo en la vida con el alimento Excellent Kitten para gatos de temprana edad. Este alimento de alta calidad, fabricado por Purina, está especialmente formulado para satisfacer las necesidades nutricionales de los gatitos en crecimiento. Con un delicioso sabor a pollo y arroz, tu pequeño felino disfrutará cada bocado mientras recibe todos los nutrientes esenciales para un desarrollo saludable." },
    { nombre: "Piedras de arenero Bolsa 2Kg", stock: 10, precio: 7000, img: "../public/Images/piedras.png", zona: "CABA", tel: "11-5965858", idCat: "salud", detail: "Granulado higiénico con doble acción, absorbe y desodoriza. 100% natural" },
    { nombre: "Veterinario El Salvador", stock: 999, precio: 0, img: "../public/Images/v1.jpg", idCat: "profesionales", zona: "San Martin", tel: "11-74858549", detail: "veterinaria a la calle zona norte" },
    { nombre: "Particular PetPet", stock: 999, precio: 0, img: "../public/Images/v2.jpg", idCat: "profesionales", zona: "Lanus", tel: "11-15253548", detail: "tenemos todos los productos que necesitas. realizamos castraciones y cuidados necesarios." },
    { nombre: "Veterinario particular", stock: 999, precio: 0, img: "../public/Images/v3.jpg", idCat: "profesionales", zona: "CABA", tel: "11-75325257", detail: "Somos un veterinario con mas de 15 años en el rubro. realizamos cualquier tipo de consutla necesaria. contamos con gran variedad de productos. utilizamos wpp o llamada al 1175325257" },
    { nombre: "Veterinaria Mascotitas", stock: 999, precio: 0, img: "../public/Images/v4.jpg", idCat: "profesionales", zona: "Gonzales Catan", tel: "11-15252369", detail: "VETERINARIA MASCOTITAS - gonzales catan. trae tu mascota. consultas y castraciones. ponemos vacunas y pipetas. tenemos mas de 200 productos para lo que tu mascota necesite." }
]

/* import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");

    productos.forEach((producto) => {
        const nuevoDoc = doc(productosRef);
        batch.set(nuevoDoc, producto);
    })

    try{
        await batch.commit();
        console.log("subido OK");
    } catch(error){
        console.log("error", error);
    }
}

subirProductos(); */