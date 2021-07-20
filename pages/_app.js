import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
// import { AppWrapper } from '../components/context'



function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   const code = new URLSearchParams(window.location.search).get('code');
  //   console.log(code); return () => {
  //     code
  //   }
  // }, [])

  const code = 'AQAlZFGrdF3JTtOlCbcKaziA08N_CPZQW-DbLxHAKn8Rp9FA2QZ1tl7v0S4LwNV7Ll0yN73Ga25krkrrxHizbuacMhrLdqF9gwkwFyZ1LFRIRgHON-lgwr4tGaFwKgnGNAr04iQMmWeE7SiZFk_GtjWMJs2Ncune_C9IeGtF3EHO47DuK54zG6zTs-x23HYVmT83vx-DZx2Xc_cNG8a5FEsqe5FwS79MRYZKfyyqBlUxR7KXUGQyEkP_bZ1vI3ARzfqC1TjuuaIwe-A8Rs75DWoxTKhwqlFWuvbrae_dtvr2-pwRpH6xDONBmuk4S5fgfkpB8AFxe_Brd-ciyeeU52VVJhwGTg'


  return (
    // <AppWrapper>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </AppWrapper>
  )
}

export default MyApp
