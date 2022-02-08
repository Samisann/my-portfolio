import React from "react";
import image from "../green-chameleon-WvuTnXz1hSc-unsplash.jpg";


export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Desk setup"
        className="absolute object-cover w-full h-full"
      />

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name ">
          Welcome to my universe
        </h1>
      </section>
   

  <section class="white-section" id="features">
    <div class="container-fluid">

    <div class="row">
      <div class="features-box col-lg-4">
        <i class="icon fas fa-pencil-alt fa-4x"></i>
        <h3 class="feature-title">Illustration</h3>
        <p>Doing some illustrations on my free time</p>
      </div>

      <div class="features-box col-lg-4">
        <i class="icon fas fa-mouse-pointer fa-4x"></i>
        <h3 class="feature-title">Development Skills</h3>
        <p>We have all the current books and podcast.</p>
      </div>

      <div class="features-box col-lg-4">
        <i class="icon fas fa-window-restore fa-4x"></i>
        <h3 class="feature-title" >UI/UX Design.</h3>
        <p>Find the books and podcast you love to listen to</p>
      </div>

    </div>
  </div>


  </section>

 



<footer class="bottom-section" id="footer">

<div class="container-fluid">

  
</div>
</footer>
    </main>
  );
}
