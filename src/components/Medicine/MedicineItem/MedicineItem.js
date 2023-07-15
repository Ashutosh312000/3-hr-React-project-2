import MedicineItemForm from './MedicineItemForm';
import classes from './MedicineItem.module.css';

const MedicineItem = (props) => {

  const price = (+props.price).toFixed(2)
  return (
    <li className={classes.meal}>
      <div>
        <h3>Name: {props.name}</h3>
        <div className={classes.description}>Description :{props.description}</div>
        <div className={classes.price}>Price: ${price}</div>
      </div>
      <div>
        <MedicineItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default MedicineItem;
