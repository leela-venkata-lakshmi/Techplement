const form=document.querySelector('input[type="search"]');
const input=document.getElementById("search");
const result=document.getElementById("result");
const innerDiv = document.getElementById("innerDiv");
result.classList.add("hidden");
form.addEventListener("input",(e)=> {
    e.preventDefault();
    const userInput=input.value;
    
 if(userInput){
     const apiKey="a75dc08915f9dc1d92ac02ebeda14de7";
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
   
      const wind=data.wind.speed;
      const humidity=data.main.humidity;
      

      const condition =data.weather[0].description;
      const image = data.weather[0].icon;


      result.innerHTML=`<div><h1>${userInput}</h1></div>
      <div id="output">
      <p style = "text-align :center"><b>${condition}</b><img src = "https://openweathermap.org/img/wn/${image}.png
      "></p>
        <p>Temperature: <b>${temperature}°C </b></p>
        <p>Wind: <b>${wind} m/s</b></p>
        <p>Humidity: <b>${humidity} %</b></p>
      </div>
    
    
    `;

    
    result.classList.remove("hidden");
   
    })
    .catch(error => {
              console.error(error);
              
              result.innerHTML= `<blockquote>Couldn't retrieve temperature for ${userInput}. <br>Please provide correct information.</blockquote>`;
             
              
            });
        
            }     
});
