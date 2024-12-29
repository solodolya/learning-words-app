import { createContext, useEffect, useState } from 'react';
import Loader from '../Components/Loader/Loader.jsx';
import GET from '../Services/GET.js';

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [stateContext, setStateContext] = useState();
  const [loading, setLoading] = useState(false);
  const contextData = { stateContext, setStateContext, loading };

  useEffect(() => {
    getDataServer();
  }, [loading]);

  async function getDataServer() {
    const dataServer = await GET.getData();
    setStateContext(dataServer);
    setLoading(!loading);
  }

  if (!stateContext) {
    return <Loader />;
  }

  return (
    <MyContext.Provider value={contextData}>{ children }</MyContext.Provider>
  )
}