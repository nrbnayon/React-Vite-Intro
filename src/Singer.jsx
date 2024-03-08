const Singer = ({ singer }) => {
  return (
    <div>
      <h3>Singer Name: {singer.name} </h3>
      <p>Singer Age: {singer.age}</p>
    </div>
  );
};

export default Singer;
