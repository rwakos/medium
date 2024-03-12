const SearchBox = ({ onChange }) => {
  console.log("component [SearchBox] was rendered");

  return (
    <div className="field has-addons">
      <div className="control" style={{ width: "100%" }}>
        <input
          className="input"
          type="text"
          placeholder="Search books..."
          style={{ width: "100%" }}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
