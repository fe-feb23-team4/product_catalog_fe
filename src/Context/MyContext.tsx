import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Phone } from '../types/Phone';

interface MyContextType {
  phonesListNew: Phone[];
  setPhonesListNew: Dispatch<SetStateAction<Phone[]>>;
  phonesListDiscount: Phone[];
  setPhonesListDiscount: Dispatch<SetStateAction<Phone[]>>;
  phonesListRecommended: Phone[];
  setPhonesListRecommended: Dispatch<SetStateAction<Phone[]>>;
}

const MyContext = createContext<MyContextType>({
  phonesListNew: [],
  setPhonesListNew: () => {},
  phonesListDiscount: [],
  setPhonesListDiscount: () => {},
  phonesListRecommended: [],
  setPhonesListRecommended: () => {},
});

export const useMyContext = () => useContext(MyContext);
export const MyContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [phonesListNew, setPhonesListNew] = useState<Phone[]>([]);
  const [phonesListDiscount, setPhonesListDiscount] = useState<Phone[]>([]);
  const [
    phonesListRecommended, setPhonesListRecommended,
  ] = useState<Phone[]>([]);

  return (
    <MyContext.Provider
      value={{
        phonesListNew,
        setPhonesListNew,
        phonesListDiscount,
        setPhonesListDiscount,
        phonesListRecommended,
        setPhonesListRecommended,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
