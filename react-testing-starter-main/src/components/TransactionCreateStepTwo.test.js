import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

describe("<TransactionCreateStepTwo>", () => {
  const initialProps = {
    sender: { id: "1" },
    receiver: { id: "2" },
  };

  test("On initial render, pay button is disabled", async () => {
    render(<TransactionCreateStepTwo {...initialProps} />);
    //screen.debug();
    const payButton = await screen.findByRole("button", { name: /pay/i });
    expect(payButton).toBeDisabled();
  });

  test("pay button is enabled when an amount and note are entered", async () => {
    render(<TransactionCreateStepTwo {...initialProps} />);
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "This is for you");
    userEvent.type(screen.getByPlaceholderText(/amount/i), "$50");
    const payButton = await screen.findByRole("button", { name: /pay/i });
    expect(payButton).toBeEnabled();
  });
});
