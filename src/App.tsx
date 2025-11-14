import ContactForm from "./components/ContactForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex justify-center">
      <ContactForm />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: "#383838",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "white",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
