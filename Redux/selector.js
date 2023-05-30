
import Cookies from "js-cookie";
export const getCookiesAccepted = (state) => state.change_langue_reducer.cookies_accepted;
export const z = Cookies.get('cok')