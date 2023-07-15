import Input from '../../UI/Input';
import classes from './MedicineItemForm.module.css';
import CartContext from '../../../store/Cart-context';
import MedicinContext from '../../../store/Medicine-context';
import { useContext } from 'react';

const MedicineItemForm = (props) => {
  const cartctx=useContext(CartContext)
  const medicinectx=useContext(MedicinContext)
  const addItemToCart=(e)=>{
    e.preventDefault();
   
    cartctx.addItem({...props.item,quantity:e.target.amount.value})
    medicinectx.removeItem(props.item.id,e.target.amount.value)

  }
  return (
    <form onSubmit={addItemToCart} className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: props.item.quantity,
          step: '1',
          defaultValue: '1',
          name:'amount'
        }}
      />
      <button >+ Add To Cart</button>
    </form>
  );
};

export default MedicineItemForm;
