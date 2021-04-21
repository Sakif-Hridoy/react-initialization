import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products=[{name:'Photoshop',price:'$19'},
                  {name:'SEO',price:'$9'},
                  {name:'React',price:'$89'}];
  const naikas=[{name:'Shabnur',age:'40'},
                {name:'Moushumi',age:'42'},
                {name:'Purnima',age:'36'},
                {name:'Porimoni',age:'29'}]
  const productName = products.map(abal=> abal.name);
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
        <ul>
          {
            naikas.map(women=><li>{women.name}</li>)
          }
          <li>{naikas[0].name}</li>
          <li>{naikas[1].name}</li>
          <li>{naikas[2].name}</li>
          <li>{naikas[3].name}</li>
        </ul>
        <h1>React Heading</h1>
      <p>My First React Paragraph</p>
      {/* {
        products.map(product=><Product pd={product}></Product>)
      } */}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Users></Users>
      {/* <Person name="Rubel" age="40"></Person>
      <Person name="Moushumi" age="31"></Person>
      <Person name="Purnima" age="27"></Person> */}
      </header>
    </div>
  );
}


function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease = () =>{
    const newCount = count+1;
    setCount(newCount);
  }
  const handleDecrease = () =>{
    const alterCount = count-1;
    setCount(alterCount)
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'olive',
    height:'200px',
    width:'250px',
    float:'left'
  }
  
  return (
    <div style={productStyle}>
      <h3>Name:{props.product.name}</h3>
      <h4>Price:{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })
  return(
    <div>
      <h4>Dynamic Users:{users.length}</h4>
      {
        users.map(data=><li>{data.name}</li>)
      }
      
    </div>
  )
}

// function Person(props){
//   const personStyle={
//     border: '2px solid red',
//     margin:'10px'
//   }
//   console.log(props)
//   return (
//     <div style={personStyle}>
//       <h1>Name: {props.name}</h1>
//       <p>Age:{props.age}</p>
//     </div>
//   )
// }

export default App;
// export default Person;
