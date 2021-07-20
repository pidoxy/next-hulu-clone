// import { createContext, useContext } from 'react';
// import { useEffect } from 'react';

// const AppContext = createContext();

// export function AppWrapper({ children }) {
//     let sharedState = {
//         code:''
//     }

//   useEffect(() => {
//     sharedState.code = new URLSearchParams(window.location.search).get('code');
//     console.log(sharedState.code);
//     localStorage.setItem('code', code);
//   }, []);

//   return (
//     <AppContext.Provider value={sharedState}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }