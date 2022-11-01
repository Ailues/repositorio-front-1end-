fetch("https://github.com/Ailues/repositorio-front-1end-/edit/main/lenguaje%20JSON"/modulo2.json).then((Response)=>Response.json()).then((data)=>{
    return console.log(data);
});