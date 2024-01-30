"use client";
import Display from "./(components)/Display";
import Form from "./(components)/Form";
import { useState } from "react";
import Thank from "./(components)/Thank";

const Home = () => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("000");
  const [submitted, SetSubmitted] = useState(false);

  return (
    <main className=" flex flex-col w-full h-screen sm:flex-row">
      <Display
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      {!submitted ? (
        <Form
          setCardNumber={setCardNumber}
          setCardHolderName={setCardHolderName}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          month={month}
          year={year}
          cvc={cvc}
          setCvc={setCvc}
          setMonth={setMonth}
          setYear={setYear}
          SetSubmitted={SetSubmitted}
        />
      ) : (
        <Thank />
      )}
    </main>
  );
};

export default Home;
