import { render } from "@react-email/render";
import "./App.css";
import { EmailTemplate } from "./EmailTemplate";

function App() {
  console.log(
    render(<EmailTemplate body="Testing in new repo" />, {
      pretty: true,
    })
  );

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-white">
        {"Test app for Sero <> Resend"}
      </div>
    </div>
  );
}

export default App;
