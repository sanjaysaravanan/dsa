const p1 = () =>
  new Promise((resolve, reject) => {
    console.log("Starting");
    resolve("success");
    console.log("ending");
  });

const Search = () => {
  const timeoutId = useRef(null);

  const handleChange = (e) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    } else {
      console.log(e.target.value);
      timeoutId.current = setTimeout(() => {
        p1();
      }, 750);
    }
  };

  return <input onChange={handleChange} />;
};

export default Search;
