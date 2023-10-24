<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<br>
<section class="contact" id="contact">
<br>
<h1 class="heading"> Contáctanos</h1>

<div class="row">

    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.186343153539!2d-103.430732625621!3d20.743239997525635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af678831176d%3A0xcf18442b1f5f9ab7!2sColegio%20Tlamachtiani!5e0!3m2!1ses-419!2smx!4v1698092148952!5m2!1ses-419!2smx" loading="lazy"></iframe>

    <form action="">
        <h1><b> Puedes comunicarte con nosotros por los siguientes medios:</b></h1>
        <div class="inputBox">
            <span class="fas fa-map-marker-alt"></span>
            <h2>&nbsp C. Valle de Guadalupe 1789, Jardines del Valle, 45138 Zapopan, Jal.</h2>
        </div>
        <div class="inputBox">
            <span class="fas fa-envelope"></span>
            <h2>&nbsp tlamachtiani-primaria@hotmail.com</h2>
            
        </div>
        <div class="inputBox">
            <span class="fas fa-phone"></span>
            <h2>&nbsp 33 3550 2440</h2>
            
        </div>
        <div class="inputBox">
            <span class="fas fa-clock"></span>
           <h2> &nbsp
            Horario: Lunes a Viernes 8 a.m-2:30 p.m
            
          
        </h2>
        </div>
       
    </form>

</div>
<br>

</section>

</template>

<style scoped>

.heading{
    text-align: center;
    color:#000000;
    padding-bottom: 3.5rem;
    font-size: 3rem;
}
.contact .row{
    display: flex;
    flex-wrap: wrap;
    gap:1rem;
    margin: 20px 40px;
    background: rgb(255, 255, 255);
}

.contact .row .map{
    flex:1 1 45rem;
    width: 100%;
    object-fit: cover;
}

.contact .row form{
    flex:1 1 45rem;
    padding:5rem 2rem;
    text-align: center;
}

.contact .row form h1{
    font-weight: 500;
    color:#000000;
}

.contact .row form .inputBox{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border:var(--border);
}

.contact .row form .inputBox span{
    color:#000000;
    font-size: 2rem;
    padding-left: 2rem;
}


