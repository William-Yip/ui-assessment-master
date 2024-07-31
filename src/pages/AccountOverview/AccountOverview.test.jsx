import { render } from "@testing-library/react";
import AccountOverviewPage from ".";

const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    phone: "020 3326 4208",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

const setup = (data = accountOverviewStub) => render(<AccountOverviewPage data={data} />);

test("render the title correctly", () => {
  const { getByRole } = setup();
  expect(getByRole("heading", { level: 1 })).toHaveTextContent(
    "Account Overview"
  );
});
