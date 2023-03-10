var inp = document.getElementById("inp");
var bttn = document.getElementById("btn");
var e = document.getElementById("dive");
bttn.addEventListener("click", ()=>
{  

    if(inp.value=="")
    {
        alert("enter food name");
    }

    else
    {
        var userinp = inp.value;
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userinp}`
        fetch(url).then((result) =>result.json())
        .then(data => {
            console.log(data);
            if (data.meals === null) {
                alert("no recepies");
            }
            else {
                
                e.innerHTML = data.meals.map(e => 
                `<div class="divv">
                <img src = "${e.strMealThumb}" />
                <div>${e.strMeal}</div>
                <div>${e.strCategory}</div>
                <div>${e.strArea}</div>
                <a href="${e.strYoutube}">Video</a>
                </div>`

              
            );
            }
        })

        
        .catch(() => {
            alert("no data found");
        })
            
        
    }
})
 