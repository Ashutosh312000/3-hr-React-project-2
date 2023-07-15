import Card from '../UI/Card';
import MedicineItem from './MedicineItem/MedicineItem';
import classes from './AvailableMedicine.module.css';
import MedicineContext from '../../store/Medicine-context';
import { useContext } from 'react';




const AvailableMedicine = () => {

  const medicinectx=useContext(MedicineContext);


  const medicineList = medicinectx.items.map((medicine) => (
    <MedicineItem
      id={medicine.id}
      key={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{medicineList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
