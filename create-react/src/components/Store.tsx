// eslint-disable-next-line
import * as React from 'react';
import { createContainer } from "unstated-next";
// import moment from 'moment';
// import _ from 'lodash';


interface IProduct {
  "id": string,
  "type": string,
  "name": string,
  "color": string[],
  "price": number,
  "manufacturer": string
}
// eslint-disable-next-line
interface IAvailability {
  "id": string,
  "DATAPAYLOAD": string, // "<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
}


export const useStore = () => {
  const [jackets, setJackets] = React.useState<IProduct[]>([]);
  const [shirts, setShirts] = React.useState<IProduct[]>([]);
  const [accessories, setAccessories] = React.useState<IProduct[]>([]);
  const [allProducts, setAllProduct] = React.useState<IProduct[]>([]);
  // const [availabilities, setAvailabilities] = React.useState<IAvailability[]>([]);
  const [availabilities, setAvailabilities] = React.useState<any>([]);
  const [arrayAvailabilities, setArrayAvailabilities] = React.useState<string[]>([]);
  const [arrayManufacturers, setArrayManufacturers] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
  const debug: boolean = true;

  // GETTER : function get all questions from the server
  const getJackets = async () => {
    try {
      const response = await fetch("https://bad-api-assignment.reaktor.com/products/jackets");
      const json = await response.json();
      setJackets(json);
    } catch (err) {
      console.error(err.message);
    }
  };
  // GETTER : function get all questions from the server
  const getShirts = async () => {
    try {
      const response = await fetch("https://bad-api-assignment.reaktor.com/products/shirts");
      const json = await response.json();
      setShirts(json);
    } catch (err) {
      console.error(err.message);
    }
  };

  // GETTER : function get all questions from the server
  const getAccessories = async () => {
    try {
      const response = await fetch("https://bad-api-assignment.reaktor.com/products/accessories");
      const json = await response.json();
      setAccessories(json);
    } catch (err) {
      console.error(err.message);
    }
  };

  // // GETTER : function get all answers from the server
  // const getAvailability = async (ref: string) => {
  //   try {
  //     const response = await fetch(`https://bad-api-assignment.reaktor.com/availability/${ref}`);
  //     const json = await response.json();
  //     setAvailability(json.response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // GETTER : function get all answers from the server
  const getAvailabilities = (myArray: string[]) => {
    try {
      let res: any = [];
      myArray.forEach((element: string, i: number) => {
        fetch(`https://bad-api-assignment.reaktor.com/availability/${element}`)
          .then((response: any) => response.json())
          .then((json: any) => {
            // setAvailabilities([...availabilities, ...json.response]);
            res = [...res, ...json.response]
            setAvailabilities(res);
          });
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // const getAvailabilityByItem = async (ref: string, id: string) => {
  //   try {
  //     return await fetch(`https://bad-api-assignment.reaktor.com/availability/${ref}`)
  //       .then((response: any) => response.json())
  //       .then((resp: any) => resp.response);
  //     // return json.response.filter((i: string) => i === id)
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const reduceManufacturer = (myArray: any) => {
  //   let res: string[] = myArray.map((i: any) => i.manufacturer)
  //   // return [... new Set(res)]// typescript config pb es6 :-/
  //   return res.filter((x, i, a) => a.indexOf(x) === i)
  // }

  React.useEffect(() => {
    setAllProduct(shirts.concat(jackets).concat(accessories))
  }, [shirts, jackets, accessories])

  React.useEffect(() => {
    setArrayAvailabilities(
      allProducts.map(({ manufacturer }) => manufacturer)
    );
    // reduceManufacturer
    setArrayManufacturers(
      (allProducts.map((i: any) => i.manufacturer))
        .filter((x, i, a) => a.indexOf(x) === i)
    )
  }, [allProducts])

  React.useEffect(() => {
    setArrayAvailabilities(allProducts.map(({ manufacturer }) => manufacturer))
  }, [allProducts])

  React.useEffect(() => {
    setArrayManufacturers(
      arrayAvailabilities.filter((x, i, a) => a.indexOf(x) === i)
    )
  }, [arrayAvailabilities])

  React.useEffect(() => {
    getAvailabilities(arrayManufacturers);
  }, [arrayManufacturers])


  React.useEffect(() => {
    getJackets();
    getShirts();
    getAccessories();
  }, [])

  React.useEffect(()=>{
    setLoading(false);
  },[allProducts, availabilities])

  // Load data at beginning
  const start = () => {
    // getJackets();
    // getShirts();
    // getAccessories();
    // setAllProduct(shirts.concat(jackets).concat(accessories))
    // // setArrayAvailabilities([... new Set(allProducts)])
    // // array of manufacturer only
    // setArrayAvailabilities(
    //   allProducts.map(({ manufacturer }) => manufacturer)
    // );
    // // Reduce like spread operator of only manufacturer
    // console.log(reduceManufacturer(arrayAvailabilities));
    // setArrayManufacturers(
    //   ((jackets.concat(accessories).concat(shirts)).map((i: any) => i.manufacturer))
    //     .filter((x, i, a) => a.indexOf(x) === i)
    // )
    // getAvailabilities(arrayManufacturers);
  }

  return {
    debug,
    search,
    loading,
    jackets,
    shirts,
    accessories,
    availabilities,
    arrayAvailabilities,
    allProducts,
    arrayManufacturers,
    setSearch,
    getShirts,
    getJackets,
    getAccessories,
    setAvailabilities,
    setArrayAvailabilities,
    getAvailabilities,
    setLoading,
    start,
  };
}
export const StoreContainer = createContainer(useStore)