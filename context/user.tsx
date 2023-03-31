import { createContext, useContext, useState, useEffect } from "react";
import { loadState, saveState } from "utils/localstorage";
import { CourseStoreType } from "types";

type UserContextType = {
  user: any;
  cartItems: CourseStoreType[];
  favCourses: [];
  setUser: (user: any) => void;
  addToCart: (cartItem: CourseStoreType) => void;
  removeFromCart: (courseId: string) => void;  
  toggleFavCourse: (id: string) => void;
};
const Context = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  return useContext(Context) as UserContextType;
};

export const UserProvider: React.FC<React.ReactNode> = ({ children }: any) => {
  const [user, setUser] = useState(loadState("user") || {});
  const [cartItems, setCartItems] = useState(loadState("cartItems") || []);
  const [favCourses, setfavCourses] = useState(
    loadState("favCourses") || []
  );
  const addToCart = (cartItem: CourseStoreType) => {
    let _cartItems = [...cartItems];
    const _index = _cartItems.indexOf(
      (_p: { course: { id: string } }) => _p.course.id == cartItem.id
    );
    if (_index !== -1) {
      _cartItems[_index].count += cartItem.count;
    } else {
      _cartItems.push(cartItem);
    }
    setCartItems(_cartItems);
  };
  const removeFromCart = (id: string) => {
    let _cartItems = [...cartItems];
    const _index = _cartItems.indexOf(
      (_p: { course: { id: string } }) => _p.course.id == id
    );
    _cartItems.splice(_index, 1);
    setCartItems(_cartItems);
  };
  const toggleFavCourse = (id: any) => {
    let _favCourses = [...favCourses];
    if (_favCourses.findIndex((courseId: string) => courseId == id) > 0) {
      _favCourses = _favCourses.filter(
        (courseId: string) => courseId != id
      );
    } else {
      _favCourses.push(id);
    }
    setfavCourses(_favCourses);
  };
  useEffect(() => {
    saveState("user", user);
  }, [user]);
  useEffect(() => {
    saveState("cartItems", cartItems);
  }, [cartItems]);
  useEffect(() => {
    saveState("favCourses", favCourses);
  }, [favCourses]);
  return (
    <Context.Provider
      value={{
        user,
        cartItems,
        favCourses,
        setUser,
        addToCart,
        removeFromCart,
        toggleFavCourse,
      }}
    >
      {children}
    </Context.Provider>
  );
};
