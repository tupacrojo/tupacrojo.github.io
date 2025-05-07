import ReactPixel from "react-facebook-pixel";

export const initFacebookPixel = () => {
  ReactPixel.init("691906099990143"); // Reemplaza con tu Pixel ID
  ReactPixel.pageView(); // Registra la vista de página inicial
};