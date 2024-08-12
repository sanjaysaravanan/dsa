import { Suspense } from "";

import { BrowerRouter } from "react-router-dom";

// import Home from './Home';

const Home = React.lazy(() => import("./Home"));
const Skills = React.lazy(() => import("./Skills"));
const Contact = React.lazy(() => import("./Contact"));

// fetch -> new api which introduced in es6
// axios - library use xhr()

const TwoApi = async () => {
  const valus = Promise.all([fetch("/api-one"), fetch("/api-two")]);

  // Array of response objects
  // ontop this we may need to parse bring the data
};

const Context = React.createContext(null);

const AppRoutes = () => {
  return (
    <Context.Provider value={{ data, setData }}>
      <Suspense fallback={<h1>Loading</h1>}>
        <BrowerRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowerRouter>
      </Suspense>
    </Context.Provider>
  );
};

const Contact = () => {
  const { data } = React.useContext(context);
  return <h1>Coming SOo</h1>;
};

const Child = () => {
  const data = useSelecter((state) => state.data);

  return <h1>Data: {data}</h1>;
};

const Child = () => {
  const d = useDipatch();

  const triggerAction = () => dispatch({ type: "add" });

  return <h1>Data: {data}</h1>;
};

// Redux Store - Initial have some data
const Parent = () => {
  return (
    <Provider store={store}>
      <Child />
      <ChildDispatch />
    </Provider>
  );
};

// Asynchronous actions
// callback
// Promise (pending, fulfilled, rejected)

// methods
"aync process".then((data) => console.log(data)).catch(() => "rejection");

// making the things go like a sync
const doAsync = async () => {
  try {
    console.log("starting");
    const data = await "async process"; // handling reject/failures
    console.log("done", data);
  } catch (err) {
    console.error("error", err);
  }
};

// Prmitive Types: string, boolean, number, undefined, null, symbol, enum, any, unknown, never
// array string[], type/interface to specify shape of the objects
// noimplicti, strict null checking - helps to avoid error codes at time writing it

// let, const - block scoped
// template literals
// shorthand operators
// classes -> to avoid function contrustors
// module
// default parameters
// arrow functions
// fetch

// rendering - react.memo(); // render only when the props changes
// useMemo - to store/memoize the value
// useCallback - to memoize the function/callback depends on the dependencies
// code splitting - lazy, suspense, we can use webpack to further optimize the build and fetching of assets
