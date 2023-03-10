// munna@gmail.com
// munna

const store = document.querySelector(".cont")

// const access_token = localStorage.getItem("access_token");

async function dispalynotes() {
    try {
        let out = await fetch("https://relieved-outerwear-fish.cyclic.app/lipstick/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(out)
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}

dispalynotes();
dispalynotes1()

async function dispalynotes1() {
    try {
        let out = await fetch("https://relieved-outerwear-fish.cyclic.app/primer/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(out)
        if (out.ok) {
            let res = await out.json();
            console.log(res);
            render(res)
            // alert("Data displayed")
        } else {
            alert("Not displayed")
        }
    } catch (error) {
        console.log(error)
    }
}


// title
// "Frontend"
// note
// "Full stack crud FE psc"
// category
// "livesession"
// userID
// "63c27136c53b669f17a0bbe9"

function render(res) {
    res.forEach((ele) => {
        let div = document.createElement("div")
        let img=document.createElement("img");
        img.setAttribute("src",ele.image);
        let btn = document.createElement("button")
        btn.innerText = "DELETE";
        btn.addEventListener("click", () => {
            console.log(ele._id)
            deletediv1(ele._id)
            deletediv(ele._id)
        })
        let hr = document.createElement("hr")
        div.append(img, btn, hr)
        store.append(div)
    })
}

async function deletediv(ID) {
    try {
        let res = await fetch(`https://relieved-outerwear-fish.cyclic.app/lipstick/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                
            }
           
        });
        console.log(res); 
        if (res.ok) {
            let out = await res.json();
            console.log(out)
            window.location.href="adminalldetails.html"
        } else {
            alert("cannot delete")
        }
    } catch (error) {
        console.log(error)
    }
}


async function deletediv1(ID) {
    try {
        let res = await fetch(`https://relieved-outerwear-fish.cyclic.app/primer/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                
            }
           
        });
        console.log(res); 
        if (res.ok) {
            let out = await res.json();
            console.log(out)
            window.location.href="adminalldetails.html"
        } else {
            alert("cannot delete")
        }
    } catch (error) {
        console.log(error)
    }
}


document.querySelector('#job').addEventListener('mouseover', () => {
    document.querySelector('.hover1').style.display = 'grid';
  })
  document.querySelector('#job').addEventListener('mouseleave', () => {
    document.querySelector('.hover1').style.display = 'none';
  })
  
  document.querySelector('#recruit').addEventListener('mouseover', () => {
    document.querySelector('.hover2').style.display = 'grid';
  })
  document.querySelector('#recruit').addEventListener('mouseleave', () => {
    document.querySelector('.hover2').style.display = 'none';
  })
  