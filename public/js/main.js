 
const menu = document.querySelector(".menu");

const navbar = document.querySelector(".navbar");
navbar.addEventListener("click", ()=>{
       menu.classList.add("active");
  })
const menuclose = document.getElementById("close");
  menuclose.addEventListener("click" ,()=>{
      menu.classList.remove("active");
  });      
      
 

  const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
let state = document.getElementById("state");
let temp = document.getElementById ("temp");
let pressure = document.getElementById("pressure");
let humidity = document.getElementById("humidity");
let speed = document.getElementById("speed");
let sunset = document.getElementById("sunset");
let place = document.getElementById("place");
let icon = document.getElementById("icon");

const punedata = async () => {
  const  pune =  "pune";
  const  mayur = cityname.value = "pune";
  try {
    if (mayur) {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${pune}&units=metric&appid=e4b538e274ce6766033cfbedb0600e18`;

      let respnse = await fetch(url);
      let data = await respnse.json();
      let arrdata = [data];
      console.log(arrdata);
      console.log();

      //  submitBtn.innerHTML =` `; 
      state.innerHTML = ` ${arrdata[0].weather[0].main}`;
      temp.innerHTML = `${arrdata[0].main.temp} °C`;
      pressure.innerHTML = ` ${arrdata[0].wind.speed}`;
      humidity.innerHTML = `${arrdata[0].main.feels_like}`;
      speed.innerHTML = ` ${arrdata[0].wind.speed}`;
      let sec = arrdata[0].sys.country;
      const sundatatime = sec * 1000;
      let suntime = new Date(sundatatime);
      sunset.innerHTML = suntime.getMinutes();
      place.innerText = ` ${arrdata[0].name} , ${arrdata[0].sys.country}`;


      const weathermood = arrdata[0].weather[0].main;

      switch (weathermood) {
        case "Clear": icon.innerHTML = " <i class='wi wi-day-cloudy '> </i>";
          break;
        case "Smoke": icon.innerHTML = " <i class='wi wi-day-fog' > </i>";
          break;
        case "Haze": icon.innerHTML = " <i class='wi wi-day-haze' > </i>";
          break;
        case "Rain": icon.innerHTML = " <i class='wi wi-day-rain' > </i>";
          break;
        case "Mist": icon.innerHTML = " <i class='wi wi-day-hail' > </i>";
          break;
        default: icon.innerHTML = " <i  class='wi wi-day-cloudy '> </i>";
          break;
      }

    }
  } catch {
   

  }
}

punedata();

const getinfo = async(e)=>{
  e.preventDefault();
   
 const  cityName = cityname.value;
try {
  if (cityName) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e4b538e274ce6766033cfbedb0600e18`;
     
  let respnse = await fetch(url);
  let data = await respnse.json();
  let arrdata = [data];
    console.log(arrdata);
    console.log();
 
    //  submitBtn.innerHTML =` `; 
     state.innerHTML =` ${arrdata[0].weather[0].main}`;  
    temp.innerHTML = `${arrdata[0].main.temp} °C`;
    pressure.innerHTML =` ${arrdata[0].wind.speed}`;
     humidity.innerHTML =`${arrdata[0].main.feels_like}`;
     speed.innerHTML =` ${arrdata[0].wind.speed}`;
    let  sec =  arrdata[0].sys.country ;
    const sundatatime =    sec * 1000;
    let suntime = new Date(sundatatime);
    sunset.innerHTML =   suntime.getMinutes() ;
    place.innerText = ` ${arrdata[0].name} , ${arrdata[0].sys.country}`;
  

    const weathermood =  arrdata[0].weather[0].main  ;

    switch (weathermood) {
      case "Clear": icon.innerHTML = " <i class='wi wi-day-cloudy '> </i>";
        break;
      case "Smoke": icon.innerHTML = " <i class='wi wi-day-fog' > </i>";
        break;
      case "Haze": icon.innerHTML = " <i class='wi wi-day-haze' > </i>";
        break;
      case "Rain": icon.innerHTML = " <i class='wi wi-day-rain' > </i>";
        break;
      case "Mist": icon.innerHTML = " <i class='wi wi-day-hail' > </i>";
        break;
      default: icon.innerHTML = " <i  class='wi wi-day-cloudy '> </i>";
        break;
    }

  }
} catch {
 
 
}
}

submitBtn.addEventListener("click",getinfo);


 






