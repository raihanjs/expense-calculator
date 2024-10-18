import { useState } from "react";
import StatementForm from "./StatementForm";
import ExpenseTable from "./ExpenseTable";
import IncomeTable from "./IncomeTable";
import Balance from "./Balance";

export default function Dashboard() {
  const [statement, setStatement] = useState([
    {
      id: "2e3fcc6e-584a-46f3-a9b3-58bf5c07385b",
      category: "Salary",
      amount: "25000",
      date: "2022-02-06",
      type: "Income",
    },
    {
      id: "c2542eeb-12fd-4143-a1a2-da017dbb108e",
      category: "Bill",
      amount: "3000",
      date: "2024-10-09",
      type: "Expense",
    },
    {
      id: "36a8d66e-f040-4428-8982-d5840ff6e8bc",
      category: "Health",
      amount: "5000",
      date: "2024-10-09",
      type: "Expense",
    },

    {
      id: "8e18a601-4f9a-47b7-b8b0-de265b0eacc2",
      category: "Health",
      amount: "3500",
      date: "2024-05-28",
      type: "Expense",
    },
    {
      id: "7444f36e-9748-473c-b69e-f870a2107b44",
      category: "Outsourcing",
      amount: "50000",
      date: "2024-03-06",
      type: "Income",
    },
    {
      id: "2e3fcc6e-584a-46f3-a9b3-38bf5c07385b",
      category: "Bond",
      amount: "15000",
      date: "2023-01-06",
      type: "Income",
    },
  ]);

  const handleAddStatement = (newStatement, isAdd) => {
    if (isAdd) setStatement([...statement, newStatement]);
    else {
      setStatement(
        statement.map((item) => {
          if (item.id === newStatement.id) {
            return newStatement;
          }
          return item;
        })
      );
    }
  };

  const [editStatement, setEditStatement] = useState(null);
  const handleEditStatement = (currStatement) => {
    setEditStatement(currStatement);
  };

  const handleDeleteStatement = (statementId) => {
    const reaminingStatement = statement.filter(
      (item) => item.id !== statementId
    );
    setStatement(reaminingStatement);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <StatementForm
        onAddStatement={handleAddStatement}
        onEdit={editStatement}
      />

      <div className="lg:col-span-2">
        <Balance statement={statement} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <IncomeTable
            statement={statement}
            onEditStatement={handleEditStatement}
            onDeleteStatement={handleDeleteStatement}
          />
          <ExpenseTable
            statement={statement}
            onEditStatement={handleEditStatement}
            onDeleteStatement={handleDeleteStatement}
          />
        </div>
      </div>
    </section>
  );
}
