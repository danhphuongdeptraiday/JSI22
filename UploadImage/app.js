import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import {
  getDatabase,
  ref as dbRef,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOCXXqepwWg79PepOhnouFoB2U1VRaO9I",
  authDomain: "upload-img-43e1f.firebaseapp.com",
  projectId: "upload-img-43e1f",
  storageBucket: "upload-img-43e1f.appspot.com",
  messagingSenderId: "390595631766",
  appId: "1:390595631766:web:1a3b474e39cca7de1cc0b7",
  measurementId: "G-GXQYETCFHK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

const fileInput = document.getElementById("fileInput"); // Input element for file selection
const imageGallery = document.getElementById("imageGallery"); // Container for displaying images

fileInput.addEventListener("change", async function (e) {
  const file = e.target.files[0]; // Get the selected file

  // Create a storage reference
  const storageRef = ref(storage, "images/" + file.name);

  try {
    // Upload file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);

    // Get the download URL after successful upload
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(downloadURL);

    // Store downloadURL in Firebase Database for retrieval
    const dbImagesRef = dbRef(database, "images");
    push(dbImagesRef, {
      imageURL: downloadURL,
    });
  } catch (error) {
    // Handle any errors while uploading
    console.error(error);
  }
});

let uploadImage = document.getElementById("uploadImage");
// Retrieve image URLs from Firebase Database
const dbImagesRef = dbRef(database, "images");
uploadImage.addEventListener("click", function () {
  onValue(dbImagesRef, (snapshot) => {
    console.log("hello");
    imageGallery.innerHTML = ""; // Clear the container before populating images
    snapshot.forEach((childSnapshot) => {
      const imageURL = childSnapshot.val().imageURL;
      // Create an image element and append it to the gallery
      const imgElement = document.createElement("img");
      imgElement.src = imageURL;
      imgElement.style.width = "200px"; // Set image width for display
      imageGallery.appendChild(imgElement);
    });
  });
});
