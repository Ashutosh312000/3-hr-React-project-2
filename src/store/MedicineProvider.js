import {  useState } from 'react';

import MedicineContext from './Medicine-context';




const MedicineProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToMedicineHandler = (item) => {
    let newadd=true;
    const updateitems=items.map((ele)=>{
      if(ele.id===item.id){
        ele.quantity=(+ele.quantity)+(+item.quantity);
        newadd=false;
      }
      return ele;
    })
    newadd===false?setItems(updateitems):setItems([...items,item])
  };

  const removeItemFromMedicineHandler = (id,quantity) => {
 
    const updateitems=items.map((ele)=>{
      if(ele.id===id){
        if(ele.quantity===(+quantity)){  
          return null;
        }
        else{
          ele.quantity-=(+quantity);
          return ele;
        }
      }
      return ele;
    })
    
    const finalupdateitems=updateitems.filter((ele)=>{
      return ele!=null;
    })

    setItems(finalupdateitems);
   

  };

  const medicineContext = {
    items:items,
    addItem: addItemToMedicineHandler,
    removeItem: removeItemFromMedicineHandler,
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
