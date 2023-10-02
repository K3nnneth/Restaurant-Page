const homeLoad = (() => {
    const content = document.querySelector('#content');
    const homepage = document.createElement('div');
    homepage.innerHTML = `
    <div class="home page active">
        <div class="content">
            <div class="header">
                <p> Come to the most delicious restaurant in California! We are more affordable than McDonalds and our ice cream machine actually works! <p>
            </div>
            <div class="info">
            Hours:
            <br>
            Monday-Friday: 11am - 10pm;
            <br>
            Saturday-Sunday: 11am - 12pm;
            </div>
        </div>
    </div>
    `;
    content.appendChild(homepage);
});

export {homeLoad};