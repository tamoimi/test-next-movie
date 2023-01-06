const SearchBar = ({onChange, value}):any => {
  return (
    <>
      <div>
        <input
          type="search"
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default SearchBar;
