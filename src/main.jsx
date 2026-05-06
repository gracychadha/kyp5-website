import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SiteProvider } from "./context/SiteContext";
import App from "./App.jsx";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      >
        <SiteProvider>
          <App />
        </SiteProvider>
      </GoogleReCaptchaProvider>
    </ChakraProvider>
  </StrictMode>,
);
