export const checkBudget = ( budget, remaining ) => {
    let state;

    if( ( budget/4 ) > remaining ) {
        state = 'alert alert-danger';
    } else if ( ( budget/2 ) > remaining ) {
        state = 'alert alert-warning';
    } else {
        state = 'alert alert-success';
    }

    return state;
}