import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {

  const [siteData, setSiteData] = useState(null);

  const [loading, setLoading] = useState(true);

  // fetch api
  const fetchSiteConfig = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}settings/site-config`
      );

      console.log(res.data);

      setSiteData(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchSiteConfig();

  }, []);

  return (
    <SiteContext.Provider
      value={{
        siteData,
        loading,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

// custom hook
export const useSite = () => useContext(SiteContext);