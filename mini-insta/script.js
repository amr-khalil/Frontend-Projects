// Unsplash API

const count = 1;
const apiKey = 'rMsZK7OlBZR08FQOyd_4GCZ9rhSolscWiTAp32TQVaM'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

function setAttributes(element, attributes){
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function imageLoaded(){
    console.log('image loaded');
    imagesLoaded++;
    if (imagesLoaded === totalImages){
        ready = true;
        console.log('ready = ', ready);
    }
}

function displayPhotos(){
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        img.addEventListener('load', imageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });

    
}
  

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // console.log(photosArray);
        //img.src = data.urls.regular;
        displayPhotos();
    } catch(error) {
        console.log(error);
    }
    
}

window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetWidth - 1000){
        getPhotos();
        // console.log("load more!");
    }
} );


getPhotos();