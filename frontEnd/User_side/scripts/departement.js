//let uuid=localStorage.getItem("uuid") || "";
let uuid="wt0Ob5";
let baseURL = `http://localhost:8080`;
 let DepartementForm=document.getElementById("DepartementForm");
 let Departement_name=document.getElementById("Departement_name")
 
 document.getElementById("DepartementForm").addEventListener("submit",function (event) {
  event.preventDefault();
  console.log(Departement_name.value);
    let obj={ 
         "departmentName":Departement_name.value,
     
    }
    fetch(`${baseURL}/addDepartment`,{
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      }).then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          alert("Network response was not ok");
        }
        // Assuming the response contains JSON data, you can parse it
        
      })
      .then((data) => {
        // Handle the response data if required
        alert("Succefully Added");
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Fetch error:", error);
      });
      
    });
    
 
