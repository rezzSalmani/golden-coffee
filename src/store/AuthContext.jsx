import { createContext, useEffect, useState, useContext } from 'react';

import { supabase } from '../supabaseClient';
import products from '../products';
import { toast } from 'react-toastify';
export const AuthContext = createContext({
  currentUser: null,
  userData: {},
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authFormOpen, setAuthFormIsOpen] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    phone: '',
    policy: false,
  });
  const handleChangeUserData = (event, identifier) => {
    setIsError('');
    return setUserData(prev => {
      return {
        ...prev,
        [identifier]: event.target.value,
      };
    });
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION') {
        // handle initial session
      } else if (event === 'SIGNED_IN') {
        setCurrentUser(session?.user);
      } else if (event === 'SIGNED_OUT') {
        setCurrentUser(null);
      } else if (event === 'PASSWORD_RECOVERY') {
        // handle password recovery event
      } else if (event === 'TOKEN_REFRESHED') {
        // handle token refreshed event
      } else if (event === 'USER_UPDATED') {
        // setCurrentUser(session?.user);
      }
    });
    // call unsubscribe to remove the callback
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const getUserCart = async () => {
      if (currentUser) {
        setUserCart(currentUser.user_metadata.cart);
      } else {
        setUserCart([]);
      }
    };
    getUserCart();
  }, [currentUser]);

  useEffect(() => {
    const updateUserCart = async () => {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          cart: userCart,
        },
      });
      if (error) console.log(error);
    };
    if (currentUser) updateUserCart();
  }, [userCart, currentUser]);

  const resetUserData = () => {
    setUserData({
      userName: '',
      email: '',
      password: '',
      phone: '',
      policy: false,
    });
  };
  const signUp = async () => {
    switch (true) {
      case !userData.userName:
        setIsError('لطفا نام کابری خود را وارد کنید.');
        return;
      case userData.userName.length < 4:
        setIsError('نام کابری  باید حداقل 4 کاراکتر باشد.');
        return;
      case !userData.email:
        setIsError('لطفا ایمیل خود را وارد کنید.');
        return;
      case !emailRegex.test(userData.email):
        setIsError('لطفا ایمیل صحیح وارد کنید.');
        return;
      case !userData.password:
        setIsError('لطفا رمز عبور خود را وارد کنید.');
        return;
      case userData.password.length < 6:
        setIsError('رمزعبور باید حداقل 6 کاراکتر باشد.');
        return;
      case userData.policy === false:
        setIsError('لطفا سیاست و قوانین را تایید کنید.');
        return;
      default:
        setIsLoading(true);
        try {
          const { data, error: signUpError } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
            options: {
              data: {
                username: userData.userName,
                phone: userData.phone,
                cart: [],
              },
            },
          });
          // const { error: insertError } = await supabase
          //   .from('users')
          //   .insert({ user_id: data.user.id, username: userData.userName });
          if (signUpError) {
            throw new Error(signUpError.message);
          } else {
            console.log('User signed up successfully');
          }
        } catch (error) {
          switch (error.message) {
            case 'Password should be at least 6 characters.':
              setIsError('رمزعبور باید حداقل 6 کاراکتر باشد.');
              break;
            case 'Unable to validate email address: invalid format':
              setIsError('ایمیل نا معتبر است.');
              break;
            case 'User already registered':
              setIsError('ایمیل قبلا ثبت نام شده است.');
              break;
            default:
              console.error(error);
          }
        }
        setIsLoading(false);
        setIsError('');
        resetUserData();
        setAuthFormIsOpen(false);
        break;
    }
  };
  const signIn = async () => {
    switch (true) {
      case !userData.email:
        setIsError('لطفا ایمیل خود را وارد کنید.');
        return;
      case !emailRegex.test(userData.email):
        setIsError('لطفا ایمیل صحیح وارد کنید.');
        return;
      case !userData.password:
        setIsError('لطفا رمز عبور خود را وارد کنید.');
        return;
      case userData.password.length < 6:
        setIsError('رمزعبور باید حداقل 6 کاراکتر باشد.');
        return;
      default:
        setIsLoading(true);
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: userData.email,
            password: userData.password,
          });
          if (error) {
            throw new Error(error.message);
          } else {
            console.log('User signed in successfully');
          }
        } catch (error) {
          if (error.message === 'Invalid login credentials') {
            setIsError('ایمیل یا رمز عبور نا معتبر است.');
          } else {
            console.error(error);
          }
        }
        setIsLoading(false);
        setIsError('');
        resetUserData();
        setAuthFormIsOpen(false);
        break;
    }
  };
  const signOut = () => {
    setIsLoading(true);
    supabase.auth
      .signOut()
      .then(() => {
        toast.success('شما با موفقیت خارج شدید', { autoClose: 2000 });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const addToCart = async data => {
    // Check if the product is already in the cart
    const existingProductIndex = userCart.findIndex(
      product => product.id === data.id
    );
    if (existingProductIndex !== -1) {
      // If the product exists, increase the cartQuantity by 1
      const updatedCart = [...userCart];
      updatedCart[existingProductIndex].cartQuantity += 1;
      setUserCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with a cartQuantity of 1
      const newProduct = { ...data, cartQuantity: 1 };
      setUserCart([...userCart, newProduct]);
    }
  };
  const removeFromCart = async id => {
    const existingProductIndex = userCart.findIndex(
      product => product.id === id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...userCart];
      if (userCart[existingProductIndex].cartQuantity > 1) {
        updatedCart[existingProductIndex].cartQuantity -= 1;
      } else {
        updatedCart.splice(existingProductIndex, 1);
      }
      setUserCart(updatedCart);
    }
  };

  const value = {
    currentUser,
    userData,
    userCart,
    isError,
    authFormOpen,
    isLoading,
    setIsError,
    setUserData,
    resetUserData,
    signUp,
    signIn,
    signOut,
    setAuthFormIsOpen,
    handleChangeUserData,
    addToCart,
    removeFromCart,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
