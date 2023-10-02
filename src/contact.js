const contactLoad = (() => {
    const content = document.querySelector('#content');
    const homepage = document.createElement('div');
    homepage.innerHTML = `
    <div class="contact page">
        <div class="content">
            <div class="header">
                <p>Questions? Leave us a message! </p>
            </div>
            <form>
                <label>Name</label>
                <input type="text">
                <label>Email</label>
                <input type="text">
                <label>Message</label>
                <input type="text" class="message">
                <input type="submit">
            </form>
        </div>
    </div>
    `;
    content.appendChild(homepage);
});

export {contactLoad};