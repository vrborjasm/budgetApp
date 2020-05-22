import React, { Fragment } from 'react';
import { checkBudget } from '../helpers'

const ControlBudget = ({ budget, remaining }) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>

            <div className={checkBudget(budget, remaining)}>
                Restante: $ {remaining}
            </div>
        </Fragment>
     );
}
 
export default ControlBudget;