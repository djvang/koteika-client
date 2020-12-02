const Heading = () => {
  return (
    <div className="heading">
      <div className="container">
        <div className="heading__container">
          <div className="heading__start">
            <h1>Наши номера</h1>
          </div>
          <div className="heading__end">
            <form>
              <select defaultValue={1}>
                <option defaultValue={1}>По площади</option>
                <option defaultValue={2}>По цене</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
