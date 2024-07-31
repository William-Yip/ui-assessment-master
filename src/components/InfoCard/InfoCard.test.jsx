import { render } from "@testing-library/react";
import InfoCard from '.';

const accountOverviewStub = {
  uploads: 20,
  successfulUploads: 10,
  linesAttempted: 30,
  linesSaved: 20,
};

const setup = (salesOverview = accountOverviewStub) =>
  render(
    <InfoCard
      linesAttempted={salesOverview.linesAttempted}
      uploads={salesOverview.uploads}
      linesSaved={salesOverview.linesSaved}
      successfulUploads={salesOverview.successfulUploads}
    />
  );

describe("renders the required content correctly", () => {
  test("render the correct title", () => {
    const { getByRole } = setup();
    expect(getByRole("heading")).toHaveTextContent("Sales");
  });
  test("render the correct uploads and lines text", () => {
    const { getByTestId } = setup();
    expect(getByTestId("lines-upload-paragraph")).toHaveTextContent(
      `You had ${accountOverviewStub.successfulUploads} uploads and ${accountOverviewStub.linesSaved} lines added.`
    );
  });
 
  test("render the correct value for upload success", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(/upload success/i)).toHaveTextContent(
      `${Math.round((accountOverviewStub.successfulUploads / accountOverviewStub.uploads) * 100)}%`
    );
  });
  test("render the correct value for lines saved", () => {
    const { getByLabelText } = setup();
    expect(getByLabelText(/lines saved/i)).toHaveTextContent(
      `${Math.round((accountOverviewStub.linesSaved / accountOverviewStub.linesAttempted) * 100)}%`
    );
  });
});
