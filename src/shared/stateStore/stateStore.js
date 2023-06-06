import { create } from 'zustand'
import Cookies from 'js-cookie';

export const useLoggedIn = create(set => ({
    loggedIn: Cookies.get('loggedIn') === 'true' || false, 
    setLoggedIn: (value) => {
        set(state => ({ loggedIn: value }));
        Cookies.set('loggedIn', value, { expires: 1 });
    }
}));

