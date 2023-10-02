const menuLoad = (() => {
    const content = document.querySelector('#content');
    const menupage = document.createElement('div');
    menupage.innerHTML = `
    <div class="menu page">
        <div class="content2">
            <h1>Menu</h1>
            <div class="menucontent">
                <div class="entrees">
                    <h2>Entrees</h2>
                    <ul>
                        <li>Hamburger <span>$3.99</span></li>
                        <li>Cheeseburger <span>$4.99</span></li>
                        <li>Hot Dog <span>$4.99</span></li>
                        <li>Corndog <span>$3.99</span></li>
                        <li>Pizza Slice <span>$4.99</span></li>
                    </ul>
                </div>
                <div class="sides">
                    <h2>Sides</h2>
                    <ul>
                        <li>Seasoned Fries <span>$2.99</span></li>
                        <li>Curly Fries <span>$3.99</span></li>
                        <li>Garlic Bread <span>$2.99</span></li>
                    </ul>
                </div>
                <div class="drinks">
                    <h2>Drinks</h2>
                    <ul>
                        <li>Lemonade <span>$4.99</span></li>
                        <li>Pepsi <span>$3.99</span></li>
                        <li>Fruit Punch <span>$4.99</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
    content.appendChild(menupage);
});

export {menuLoad};