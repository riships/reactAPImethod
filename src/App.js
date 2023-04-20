import './App.css';
import React, { useState, useEffect } from 'react'
import "../../reactAPImethod/src/components/style.css"

const api = "http://localhost:3001/data_array";
// this api is live now so wait and see

function App() {

  const [jdata, setData] = useState([]);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    getList()
  }, []);
  //console.log("jdata ",jdata)

  function getList() {
    fetch(api)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        //setId(data[0].id);
        // setName(data[0].name);
        // setAge(data[0].age);
        // setEmail(data[0].email);
        // setMobileno(data[0].mobileno);
        // setPhoto(data[0].photo);
        //console.log(data[0].name, " data.name"); 
        //console.log("data -- ",data)
      });
  }



  function SaveData() {
    console.log({ id, name, age, mobileno, email, photo });
    const savnewData = { name, age, mobileno, email, photo }
    fetch(api, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'applcation/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(savnewData)
    }).then((result) => {
      //console.warn(result);
      getList()
    })
  }

  function deleteUser(id) {
    //alert(id);
    fetch(`${api}/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        //console.log(resp);
        getList()
      })
    })

  }

  function editUser(id) {
    console.warn(jdata[id - 1], " --id");
    const idData = jdata[id - 1];
    setId(idData.id);
    setName(idData.name);
    setAge(idData.age);
    setEmail(idData.email);
    setMobileno(idData.mobileno);
    setPhoto(idData.photo);
    //console.log(idData.name, " -- idData.name");
  }

  function updateData() {
    console.log({ id, name, age, mobileno, email, photo });
    const updateOldData = { id, name, age, mobileno, email, photo }
    fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'applcation/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateOldData)
    }).then((result) => {
      result.json().then((resp) => {
        //console.log(resp);
        getList()
      })
    })
  }

  return (
    <>

      <div className='div1'>
        <span className='spanClass'>Tech Parichay</span>

        <div>
          <a className='atag' href="https://www.youtube.com/@TechParichay">Youtube</a>
        </div>

        <div className="floating-div">

          <div className="card">
            <div className="card-header">
              <h3>Add/Update Employees</h3>
            </div>

            <div className="card-body">

              <div>
                <button className='addbtn'>+</button></div>

              <div >
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Employee Name"></input>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} name="age" placeholder="Employee Age"></input>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Employee Email Id"></input>
                <input type="number" value={mobileno} onChange={(e) => setMobileno(e.target.value)} name="mobileno" placeholder="Employee Mobile No."></input>
                <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} name="photo" placeholder="Use Photo URL"></input>
                <br />

                <div className="info butDiv">
                  <button className='btn' type='submit' onClick={updateData}>Update</button>
                  <button className='btn' type='submit' onClick={SaveData}>Add New</button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* getting data from api */}
        {jdata.map((emp, i) => {
          return (
            <div key={i} className="floating-div">

              <div className="card">
                <div className="card-header">
                  <h3>Employees Details</h3>
                </div>

                <div className='divImg'>
                  <img src={emp.photo} alt="img" />
                </div>

                <div className="card-body">
                  <div className="info">
                    <p className="label">Name : </p>
                    <p className="value">{emp.name}</p>
                  </div>
                  <div className="info">
                    <p className="label">Age : </p>
                    <p className="value">{emp.age}</p>
                  </div>
                  <div className="info">
                    <p className="label">Email : </p>
                    <p className="value">{emp.email}</p>
                  </div>
                  <div className="info">
                    <p className="label">Mobile No. : </p>
                    <p className="value">{emp.mobileno}</p>
                  </div>
                  <div className="info butDiv">
                    <button className='btn' onClick={() => editUser(emp.id)}>Edit</button>
                    <button className='btn' onClick={() => deleteUser(emp.id)}>Delete</button>
                  </div>
                </div>
              </div>

            </div>
          );
        })
        }

      </div>

    </>
  );
}

export default App;
