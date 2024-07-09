import Form from "./components/form";
import List from "./components/list";
import Header from "./components/header";
import Stats from "./components/footer";
import PermissionMessage from "./components/permissionMessage";

import { TravelItemProvider } from "./context/travelItemContext";

function App() {
  return (
    <TravelItemProvider>
      <section className="w-full px-1">
        <div className="sm:py-8 p-5 md:py-0 md:px-0 mx-auto max-w-screen-xl lg:py-8 text-red-10">
          <Header />

          <Form />

          <Stats />
          <List />
        </div>
      </section>

      <PermissionMessage />
    </TravelItemProvider>
  );
}

export default App;
