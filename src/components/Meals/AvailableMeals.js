import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'including tomatoes and cheese and often other toppings and baked.',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Burger',
      description: 'Meat and cheese and some vegetables',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Sandwich',
      description: 'Is better then a burger',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Pasta',
      description: "Best food ever",
      price: 18.99,
    },
  ];


const AvailableMeals = (props) =>
{
    const mealList = DUMMY_MEALS.map(meal => (
    <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}        
    />
));

    return (<section className={classes.meals}>
        <Card>
        <ul>
           {mealList}
        </ul>
        </Card>
        
    </section>)
}

export default AvailableMeals;