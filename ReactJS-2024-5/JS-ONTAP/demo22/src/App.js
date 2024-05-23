import logo from "./logo.svg";
import "./App.css";

let names = ["TRLink", "22", "09090"];
let x = 101010;
let listP = [
  {
    id: 1,
    name: "A",
    price: 102,
    quantity: 5,
  },
  {
    id: 2,
    name: "AB",
    price: 123,
    quantity: 52,
  },
  {
    id: 3,
    name: "C",
    price: 15,
    quantity: 3,
  },
];

function App() {
  return (
    <>
      <h1> Hello {x}</h1>
      {names.map((item) => (
        <h2>{item}</h2>
      ))}

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              Price
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              Quantity{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {listP.map((e, index) => (
            <tr
              key={e.id}
              style={{
                textAlign: "center",
                backgroundColor: index % 2 == !0 ? "#f5f5f5" : "white",
              }}
            >
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
