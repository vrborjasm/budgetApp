import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({setExpense, setCreateExpense}) => {

    const [ expenseName, setExpenseName] = useState('');
    const [ expenseCount, setExpenseCount] = useState(0);
    const [ error, setError ] = useState(false);
    

    const addExpense = (e) => {
        e.preventDefault();

        if( expenseCount < 1 || isNaN( expenseCount ) || expenseName.trim() === "" ) {
            setError(true);
            return;
        }

        setError(false);

        const expenses = {
            expenseName,
            expenseCount,
            id: shortid.generate()
        }

        setExpense(expenses);
        setCreateExpense(true);
        setExpenseName('');
        setExpenseCount(0);
    }

    return ( 
        <form
            onSubmit={addExpense}
        >
           <h2>Agrega tus gastos</h2>

           { error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto" /> : null }

           <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={expenseName}
                    onChange={ e => setExpenseName(e.target.value) }
                />
            </div> 

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={expenseCount}
                    onChange={ e => setExpenseCount(parseInt( e.target.value, 10 )) }
                />
            </div>

            <input
                type="submit"
                 className="button-primary u-full-width"
            />

        </form>
     );
}
 
export default Form;