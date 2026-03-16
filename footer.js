class AppFooter extends HTMLElement {
  connectedCallback() {
    // Get the current year automatically
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer id="contact">
        <div class="footer-content">
          
          <div class="footer-col">
            <h4>House of Charming</h4>
            <p style="margin-bottom: 16px">Premium Product Catalog</p>
            <ul class="footer-links">
              <li><a href="https://www.instagram.com/charminghomeaids/" target="_blank" rel="noopener noreferrer">Instagram Profile</a></li>
              <li>GSTIN: 07APNPS0454A1Z1</li>
              <li>Legal Name: OMKAR SAXENA</li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="main.html">Home</a></li>
              <li><a href="#products">Collection</a></li>
              <li><a href="#brands">Partner Brands</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul class="footer-links">
              <li>
                <a href="mailto:houseofcharming1991@gmail.com">houseofcharming1991@gmail.com</a>
              </li>
              <li><a href="tel:+919811017918">+91 9811017918</a></li>
              <li>M26R+Q26, Rana Ji Enclave, Ranhola, Delhi, 110041</li>
            </ul>
          </div>
          
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${currentYear} House of Charming. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}

// Define the custom tag <app-footer>
customElements.define("app-footer", AppFooter);