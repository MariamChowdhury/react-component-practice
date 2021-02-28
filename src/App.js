// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const product = [
    { name: "Photoshop", price: "$200" },
    { name: "Illustrator", price: "$10.30" },
    { name: "InDesign", price: "$1.30" },
  ];
  const names = ["mari", "blue", "sky", "pink"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>It's React!</h1>
        <Count></Count>
        <Users></Users>
        <ul>
          {names.map((nam) => (
            <li>{nam}</li>
          ))}
          {product.map((pdName) => (
            <li>{pdName.name}</li>
          ))}
        </ul>
        {product.map((pd) => (
          <Products singleProduct={pd}></Products>
        ))}
        {/* <Products singleProduct={product[0]}></Products>
        <Products singleProduct={product[1]}></Products>
        <Products singleProduct={product[2]}></Products> */}
        <PersonInfo name={names[0]} job="Developer"></PersonInfo>
        <PersonInfo name="Mari1" job="Developer1"></PersonInfo>
        <PersonInfo name="Mari2" job="Developer2"></PersonInfo>
        <PersonInfo name="Mari3" job="Developer3"></PersonInfo>
        <PersonInfo name={names[2]} job="Developer4"></PersonInfo>
        <PersonInfo name="Mari5" job="Developer5"></PersonInfo>
      </header>
    </div>
  );
}
function Users() {
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users:{user.length}</h3>
      <ul>
        {
          user.map(name=><li>{name.name}</li>)
        }
      </ul>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  // const handleIncrease=()=>{
  //   const newCount=count+1;
  //   setCount(newCount);
  // }
  // const handleIncrease=()=>setCount(count+1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/* <button onClick={handleIncrease}>Increase</button> */}
    </div>
  );
}

function Products(props) {
  var productStyle = {
    border: "1px solid gray",
    backgroundColor: "lightGray",
    float: "left",
    height: "200px",
    width: "200px",
    margin: "10px",
  };
  //  console.log(props);
  const { name, price } = props.singleProduct;
  //  console.log(name,price);
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <button>Buy Now!</button>
    </div>
  );
}

function PersonInfo(props) {
  var style = {
    width: "400px",
    border: "10px solid cyan",
    margin: "15px",
    padding: "20px",
  };
  return (
    <div style={style}>
      <h1>Name:{props.name}</h1>
      <p>Profession:{props.job}</p>
    </div>
  );
}
export default App;
