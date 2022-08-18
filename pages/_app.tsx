// Styles
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                autoClose={5000}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                draggable
                theme="dark"
            />
        </>
    )


}