/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function StatementForm({ onAddStatement, onEdit }) {
  const [tab, setTab] = useState("Expense");
  const expenseCategories = [
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
  ];
  const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];

  const [statement, setStatement] = useState({
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  });
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    if (onEdit) {
      setIsAdd(Object.is(onEdit, null));
      setTab(onEdit.type);
      setStatement(onEdit);
    }
  }, [onEdit]);

  const handleAddStatement = (evt) => {
    evt.preventDefault();

    statement.type = tab;
    onAddStatement(statement, isAdd);

    setStatement({
      id: crypto.randomUUID(),
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;

    setStatement({ ...statement, [name]: value });
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={handleAddStatement}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              tab === "Expense" && "bg-teal-500 text-white font-semibold"
            }`}
            onClick={() => setTab("Expense")}
          >
            Expense
          </div>
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              tab === "Income" && "bg-teal-500 text-white font-semibold"
            }`}
            onClick={() => setTab("Income")}
          >
            Income
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={statement.category}
              autoComplete="category-name"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              {tab === "Expense"
                ? expenseCategories.map((expense) => (
                    <option key={expense}>{expense}</option>
                  ))
                : incomeCategories.map((income) => (
                    <option key={income}>{income}</option>
                  ))}
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              value={statement.amount}
              id="amount"
              autoComplete="off"
              placeholder="12931"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={statement.date}
              id="date"
              autoComplete="off"
              placeholder="12931"
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
