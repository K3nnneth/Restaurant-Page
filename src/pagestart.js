const pageLoad = (() => {
    //container
    const content = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <h2>SplashPiggy's Restaurant</h2>
    <ul class="links">
      <li id="home" class="tab">Home</li>
      <li id="menu" class="tab">Menu</li>
      <li id="contact" class="tab">Contact us</li>
    </ul>
  </nav>`;
  
      content.appendChild(header);
  });


export {pageLoad};
