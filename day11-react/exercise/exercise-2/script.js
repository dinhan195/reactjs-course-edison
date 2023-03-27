/** @format */
let array = [1, 'array', 3, 4];
let object = { name: 'hey', age: 22 };
console.log(typeof array.length);
function CheckType({ data }) {
  if (typeof data.length === 'number') {
    return data.map((value, index) => {
      return <h1 key={index}>{value}</h1>;
    });
  } else {
    return (
      <h1>
        {data.name}, {data.age}
      </h1>
    );
  }
}

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <CheckType data={array} />
  </div>
);
