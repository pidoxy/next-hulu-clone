import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import { AppWrapper } from '../components/context';

const CLIENT_ID = "2ef0f1d2a16344ca92d32b269cba9f3c";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

// export function getCode() {
//     useEffect(() => {
//         let code = localStorage.getItem('code');
//         return () => {
//             code
//         }
//     }, [])

//     return code;
// }
export default function login() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(AUTH_URL);
    }

    // return (
    //     <AppWrapper.Consumer>
    //         {sharedState => (sharedState.code ? <Dashboard code={sharedState.code} /> : (
    //             <div className={styles.container}>
    //                 <Link href={AUTH_URL} ><a>Login</a></Link>
    //                 <button onClick={handleClick}>Click me</button>
    //             </div>
    //         )
    //         )}</AppWrapper.Consumer>
    // )
    return (
        <div className={styles.container}>
            <Link href={AUTH_URL} ><a>Login</a></Link>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
// export async function getStaticPaths() {
//     const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=https://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
//     const CLIENT_ID = "2ef0f1d2a16344ca92d32b269cba9f3c";
    // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    // const pokemon = await res.json();

    // let paths = pokemon.results.map(p => {
    //     return `/pokemon/${p.name}`
    // })

    // return {
    //     paths, 
    //     fallback: true,
    // }
// }

// export async function getStaticProps({ params }) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
//     const pokemon = await res.json();

//     return {
//         props: {
//             pokemon,
//         }
//     }
// }

// export default Pokemon;