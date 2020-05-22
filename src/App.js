import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ questionState, setQuestionState ] = useState(true)
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);

  useEffect(() => {
    if(createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);
      setRemaining(remaining-expense.expenseCount);
      setCreateExpense(false);
    }
  }, [expense]);

  const addExpenses = expense => {
      
  }
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          { questionState ? 
            (
              <Question 
                setBudget={setBudget}
                setRemaining={setRemaining}
                setQuestionState={setQuestionState} 
              />
            ) : 
            (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <ControlBudget 
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            ) 
          }
        </div>
        
      </header>
    </div>
  );
}

export default App;
