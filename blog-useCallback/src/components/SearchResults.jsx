const SearchResults = ({ data }) => {
  const list = data.map(
    ({ id, name, publishedYear, author, intro, image, stars }) => {
      return (
        <div key={id} className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left" style={{ height: "150px" }}>
                <figure className="image is-96x96">
                  <img src={image} alt={name} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  By {author}, published in: {publishedYear}
                </p>
                <hr />
                {intro}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  console.log("component [SearchResults] was rendered");
  return <div style={{ marginTop: "25px" }}>{list}</div>;
};

export default SearchResults;
