import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <section className="w-full">
      <div className="sm:py-8 p-5 md:py-0 md:px-0 mx-auto max-w-screen-xl lg:py-8 text-red-10">
        <div className="pb-6">
          <h1 className="text-3xl text-left font-light text-gray-950">
            Faça uma lista. Monte um plano!
          </h1>
        </div>

        <Form />

        <hr className="border-blue-500" />

        <List />
      </div>
    </section>
  );
}

export default App;
