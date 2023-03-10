const btn = document.getElementById("signup")

btn.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let gender = document.querySelector("#gender").value;
    if (name != "" && email != "" && password != "" && gender != "") {
        let obj = {
            name,
            email,
            password,
            gender
        }
        register(obj);
    }else{
        alert("Please Fill In All The Fields")
    }

    
})

async function register(obj) {
    try {
        let res = await fetch("https://relieved-outerwear-fish.cyclic.app/users/register", {
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        // console.log(res);
        if (res.ok) {
            alert("user has been created")
            let out = await res.json();
            console.log(out);
            window.location.href = "login.html"
        }
    } catch (error) {
        console.log(error)
    }
}



document.querySelector('#job').addEventListener('mouseover', () => {
    document.querySelector('.hover1').style.display = 'grid';
  })
  document.querySelector('#job').addEventListener('mouseleave', () => {
    setTimeout(()=>{
      document.querySelector('.hover1').style.display = 'none';
    },3000)
  })
  
  
  document.querySelector('#recruit').addEventListener('mouseover', () => {
    document.querySelector('.hover2').style.display = 'grid';
  })
  document.querySelector('#recruit').addEventListener('mouseleave', () => {
    document.querySelector('.hover2').style.display = 'none';
  })
  