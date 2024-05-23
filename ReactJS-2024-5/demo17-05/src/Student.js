let listStudent = [
    {
      id: 1,
      name: "ABC",
      score: 10,
      age: 20,
    },
    {
      id: 2,
      name: "adfd",
      score: 9,
      age: 18,
    },
    {
      id: 3,
      name: "bcd",
      score: 8,
      age: 22,
    },
  ];
  
  export default function Student() {
    return (
      <>
       <table>
       <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
              <th>age</th>
            </tr>            
        {listStudent.map((item) => ( 
            <tr>
             <td>{item.id}</td>
              <td> {item.name}</td>
              <td>{item.score}</td>
              <td>{item.age}</td>
            </tr>         
        ))}
        </table>
      </>
    );
  }
  