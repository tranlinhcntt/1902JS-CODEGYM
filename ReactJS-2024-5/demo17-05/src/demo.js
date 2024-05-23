let x = 10;
let list = ["hello", "haha", "hehe"];
let obj = {
  name: "A",
  score: 10,
  age: 20,
};

let list0 = [
  {
    name: "A",
    score: 10,
    age: 20,
  },
  {
    name: "B",
    score: 10,
    age: 25,
  },
  {
    name: "C",
    score: 10,
    age: 40,
  },
];
export default function demo() {
    return (
        <>
         {/* <h1>{x}</h1> */}
    {/* {list.map(e => (
      <h2>{e}</h2>
    ))} */}
      <h2>{obj.name},{obj.age},{obj.score}</h2>
      {list0.map((e,index) => (
        <p>{index},{e.name},{e.score},{e.age}</p>
      ))}
        </>
    )
}

