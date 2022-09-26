/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "./AddForm";

const setup = () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  const utils = render(
    <AddForm onSubmit={onSubmit} />
  );

  return {
    ...utils,
    onSubmit,
    user,
  }
}

test("'Add a Product' link is rendered", () => {
  setup();
  const link = screen.getByRole("link", { name: /Add A Product/ });
  expect(link).toBeInTheDocument();
});

test("'Add A Product' form displays when link is clicked", () => {
  setup();
});


// in case of bug, checkout fetch dependency
 
/*
1. Does it display the things
  - Does it display the inputs?
  - Does it display the appropriate buttons?
    - it shouldn't display the 'Add' button > button to access the form
    - it should display the 'submit' button
2. If we interact with it, does it do the things we expect?
*/
