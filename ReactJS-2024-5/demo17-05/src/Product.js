import { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        { id: 1, name: "iphone", price: 20000 },
        { id: 2, name: "samsung", price: 50000 },
        { id: 3, name: "oppo", price: 20000 },
        { id: 4, name: "nokia", price: 50000 },
      ],
      ipId: "",
      ipName: "",
      ipPrice: "",
    };
  }

  add = () => {
    this.state.listProduct.push({
      id: this.state.ipId,
      name: this.state.ipName,
      price: this.state.ipPrice,
    });
  };
  changeInp(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <>
        <table style={{ border: "1px" }}>
          <tr>
            <td colSpan={3} style={{ color: "darkgreen" }}>
              <h2>Danh Sách</h2>
            </td>
          </tr>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
          {this.state.listProduct.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
            </tr>
          ))}
        </table>
        <table style={{ border: "1px" }}>
          <tr>
            <td></td>
            <div style={{ background: "lightblue" }}>
              <td>
                <label style={{ margin: "10px" }}>ID:</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="inpId"
                  onChange={(e) => {
                    this.changeInp(e);
                  }}
                />
              </td>
              <tr>
                <td>
                  {" "}
                  <label style={{ margin: "10px" }}>Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="inpName"
                    onChange={(e) => {
                      this.changeInp(e);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "10px" }}>Price: </label>
                </td>
                <td>
                  <input
                    type="type"
                    name="inpPice"
                    onChange={(e) => {
                      this.changeInp(e);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button
                    style={{ margin: "10px" }}
                    onClick={() => {
                      this.add();
                    }}
                  >
                    Thêm
                  </button>
                </td>
              </tr>
            </div>
          </tr>
        </table>
      </>
    );
  }
}

export default Product;

// import React, { Component } from "react";

// class Product extends Component {
//     render() {
//         return(
//             <h1>Hello xin chào </h1>
//         )
//     }
// }

// export default Product;
