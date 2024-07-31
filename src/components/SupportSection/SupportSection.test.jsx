import { render } from "@testing-library/react";
import SupportSection from '.';

const accountOverviewStub = {
  name: "John Smith",
  email: "support@feefo.com",
  phone: "020 3362 4208",
};

const setup = (user = accountOverviewStub) =>
  render(
    <SupportSection
      email={user.email}
      name={user.name}
      phone={user.phone}
    />
  );

describe("renders the required content correctly", () => {
  test("render the correct title", () => {
    const { getByText } = setup();
    expect(getByText("Your feefo support contact")).toBeVisible();
  });
  test("render the avatar with the correct initials", () => {
    const { getByText } = setup();
    expect(getByText("JS")).toBeVisible();
  });
  test("render the name correctly", () => {
    const { getByText } = setup();
    expect(getByText(accountOverviewStub.name)).toBeVisible();
  });
  test("render the email correctly", () => {
    const { getByRole } = setup();
    const mailAnchor = getByRole("link", { name: accountOverviewStub.email });
    expect(mailAnchor).toHaveAttribute("href", `mailto:${accountOverviewStub.email}`);
  });
  test("render the phone correctly", () => {
    const { getByRole } = setup();
    const phoneAnchor = getByRole("link", { name: accountOverviewStub.phone });
    expect(phoneAnchor).toHaveAttribute(
      "href",
      `tel:${accountOverviewStub.phone.replace(/\s/g, "")}`
    );
  });
});
