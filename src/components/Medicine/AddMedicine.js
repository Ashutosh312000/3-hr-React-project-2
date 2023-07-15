import classes from './AddMedicine.module.css';
import InputField from '../UI/InputField'
import MedicineContext from '../../store/Medicine-context'
import { useContext } from 'react';

const AddMedicine = () => {
 const medicinectx=useContext(MedicineContext)

  const addItemToMedicine=(e)=>{
    e.preventDefault();
    let item={
      id:Math.random(),
      name:e.target.Name.value,
      description:e.target.Description.value,
      price:e.target.Price.value,
    }
    medicinectx.addItem(item)
  }

  return (
    <section className={classes.summary}>
    <form onSubmit={addItemToMedicine} className={classes.form}>
      <InputField
        label='Name'
        input={{
          id: 'Name',
          type: 'text',
          name:'Name'
        }}
      />
      <InputField
        label='Description'
        input={{
          id: 'Description',
          type: 'text',
          name:'Description'
        }}
      />
      <InputField
        label='Price'
        input={{
          id: 'Price',
          type: 'number',
          name:'Price',
          step:0.01
        }}
      />
      <button >+ Add</button>
    </form>
    </section>
  );
};

export default AddMedicine;
