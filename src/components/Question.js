import React, { Fragment, useState } from 'react';
import Error from './Error'

const Question = ({ setBudget, setRemaining, setQuestionState }) => {

    const [ inputBudget, setInputBudget ] = useState(0);
    const [ error, setError ] = useState(false);

    const defineBudget = (e) => {
        setInputBudget( parseInt(e.target.value, 10) )
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if( inputBudget < 1 || isNaN( inputBudget ) ) {
            setError(true);
            return;
        }

        setError(false);
        setBudget(inputBudget);
        setRemaining(inputBudget);
        setQuestionState(false);
    }


    return ( 
        <Fragment>
            <h2>Introduzca su presupuesto</h2>

        {error ? <Error message="El presupuesto es incorrecto" /> : null}

            <form 
            onSubmit={onSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Presupuesto"
                    onChange={defineBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;