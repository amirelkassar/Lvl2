import './ExpenseItem.css'
const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
            <h4 className='expense-item__title'>Car</h4>
            <p>Date : </p>
            <p>Price : </p>
        </div>
    );
}

export default ExpenseItem;