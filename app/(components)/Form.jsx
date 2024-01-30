import { useState } from "react";

const Form = ({
  setCardHolderName,
  setCardNumber,
  cardHolderName,
  cardNumber,
  month,
  year,
  cvc,
  setCvc,
  setMonth,
  setYear,
  SetSubmitted,
}) => {
  const [error, setError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const validateCvc = () => {
    const sanitizedCvc = cvc.replace(/\s/g, ""); // Remove spaces

    if (sanitizedCvc === "") {
      setCvcError("Can't be blank");
    } else if (!/^\d{3,4}$/.test(sanitizedCvc)) {
      setCvcError("Invalid CVC");
    } else {
      setCvcError("");
    }
  };

  const validateCardNumber = () => {
    const sanitizedCardNumber = cardNumber.replace(/\s/g, ""); // Remove spaces

    if (sanitizedCardNumber === "") {
      setError("Can't be blank");
    } else if (!/^\d+$/.test(sanitizedCardNumber)) {
      setError("Number only");
    } else if (!/^\d{12,19}$/.test(sanitizedCardNumber)) {
      setError("Wrong format");
    } else {
      setError("");
    }
  };

  const validateMonth = () => {
    const sanitizedMonth = month.replace(/\s/g, ""); // Remove spaces

    if (sanitizedMonth === "") {
      setMonthError("Can't be blank");
    } else if (
      !/^\d{1,2}$/.test(sanitizedMonth) ||
      +sanitizedMonth < 1 ||
      +sanitizedMonth > 12
    ) {
      setMonthError("Invalid month");
    } else {
      setMonthError("");
    }
  };

  const validateYear = () => {
    const sanitizedYear = year.replace(/\s/g, ""); // Remove spaces

    if (sanitizedYear === "") {
      setYearError("Can't be blank");
    } else if (!/^\d{2}$/.test(sanitizedYear)) {
      setYearError("Wrong format");
    } else {
      setYearError("");
    }
  };

  const validateExpiryDate = () => {
    const currentYear = new Date().getFullYear() % 100; // Get the last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed, so add 1

    const enteredYear = +year;
    const enteredMonth = +month;

    if (
      enteredYear < currentYear ||
      (enteredYear === currentYear && enteredMonth < currentMonth)
    ) {
      setYearError("Expired card!");
    } else {
      setYearError("");
      setMonthError("");
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      setCardHolderName(value);
    } else if (name === "card_number") {
      setCardNumber(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error || monthError || yearError || nameError || cvcError) {
      console.log("mafi");
      return;
    } else {
      SetSubmitted(true);
      console.log("maf");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="text-md sm:text-xs flex flex-col items-center justify-center w-5/6 sm:3/4 md:w-2/3 mx-auto"
      >
        <div className="w-full flex flex-col mb-4 ">
          <label className="uppercase mb-2">cardholder name</label>
          <input
            className={`border w-full  h-10 sm:h-8 rounded-md p-2 ${
              nameError ? "border-red-500" : ""
            }`}
            type="text"
            name="name"
            placeholder="e.g. Maruf Sherefa"
            value={cardHolderName}
            onChange={changeHandler}
            onBlur={() => {
              const name = cardHolderName.trim();
              if (name.length === 0) {
                setNameError("Can't be blank");
              } else {
                setNameError("");
              }
            }}
          />
          {nameError && <div className="text-red-500">{nameError}</div>}
        </div>
        <div className="w-full flex flex-col mb-4">
          <label className="uppercase mb-2">card number</label>
          <input
            className={`border w-full rounded-md h-8 p-2 ${
              error ? "border-red-600" : ""
            }`}
            type="text"
            name="card_number"
            placeholder="e.g. 1234 5678 9101 1121"
            value={cardNumber}
            onChange={changeHandler}
            onBlur={validateCardNumber}
          />
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <label className="uppercase mb-2">Exp. Date (MM/YY)</label>
            <div className="grid grid-cols-2">
              <div>
                <input
                  className={`border mt-2 rounded-md h-8 p-2 w-full ${
                    monthError ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="MM"
                  name="month"
                  value={month}
                  onChange={changeHandler}
                  onBlur={() => {
                    validateMonth();
                  }}
                />

                {monthError && (
                  <div className="text-red-500 mt-2">{monthError}</div>
                )}
              </div>
              <div className="ml-4">
                <input
                  className={`border mt-2 rounded-md h-8 p-2 w-full ${
                    yearError ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="YY"
                  name="year"
                  value={year}
                  onChange={changeHandler}
                  onBlur={() => {
                    validateYear();
                    validateExpiryDate();
                  }}
                />
                {yearError && (
                  <div className="text-red-500 mt-2">{yearError}</div>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/2 ml-4">
            <label className="uppercase">Cvc</label>
            <div>
              <input
                className={`border w-full mt-2 rounded-md h-8 p-2 ${
                  cvcError ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="e.g. 123"
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
                onBlur={validateCvc}
              />
              {cvcError && <div className="text-red-500">{cvcError}</div>}
            </div>
          </div>
        </div>
        <div className="w-full h-fit">
          <button
            style={{ backgroundColor: "#220930" }}
            className="w-full border rounded-md h-9 mt-5 text-white"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
