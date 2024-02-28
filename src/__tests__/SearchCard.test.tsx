import Body from "../Components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_CARD from "../utils/MockData.json";
import Cart_Mock from "../utils/CardMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import DisplayCards from "../Components/DisplayCards";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_CARD);
    },
  });
}) as jest.Mock;

it("should render search input in the body component", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const getSearchInput = screen.getByTestId("searchInput");

  expect(getSearchInput).toBeInTheDocument();
});

it("should render search button in the body", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const getSearchBtn = screen.getByRole("button", { name: "Search" });
  expect(getSearchBtn).toBeInTheDocument();
});

it("should render cart items", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
        <DisplayCards resData={Cart_Mock} />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(1);
});

it("should render burger item should display",async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
          <DisplayCards resData={Cart_Mock} />
        </BrowserRouter>
      )
    );

  const getSearchInput = screen.getByTestId("searchInput");

  const getSearchBtn = screen.getByRole("button", { name: "Search" });


  fireEvent.change(getSearchInput, {targe: {value: 'La Pino`z Pizza'}})

  fireEvent.click(getSearchBtn)

  const afterClickSearchBtn = screen.getAllByTestId('resCard')

  expect(afterClickSearchBtn.length).toBe(1)

});
