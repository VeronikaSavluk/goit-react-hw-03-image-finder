export const refs = {
    BASE_URL: `https://pixabay.com/api/?q=`,
    API_KEY: process.env.REACT_APP_API_KEY,
    parameters: {
        image_type: "photo",
        orientation: "horizontal",
    },
    photoGallery: document.querySelector(".gallery"),
    formEl: document.querySelector("#search-form"),
    reloadBtn: document.querySelector(".load-more"),
}

export const BASE_URL = `https://pixabay.com/api/?key=${refs.API_KEY}`;
export const encodeURIComponent = `image_type=${refs.parameters.image_type}&orientation=${refs.parameters.orientation}`;