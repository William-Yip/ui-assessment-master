import AccountOverviewPage from "pages/AccountOverview";
import "./app.css";

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      phone: "020 3362 4208",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  return <AccountOverviewPage data={accountOverviewStub} />;
}

export default App;
