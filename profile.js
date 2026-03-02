class AppProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* The background stretches 100% of the screen */
        .profile-section {
          width: 100%;
          background-color: #fcfcfc;
          padding: 80px 5%;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          justify-content: center;
        }

        /* The inner content stays centered and readable */
        .profile-inner {
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          width: 100%;
          align-items: center;
          gap: 60px;
        }

        /* Left Side: Image is strictly controlled so it never gets too big */
        .profile-image-col {
          flex: 1 1 40%;
          max-width: 400px; /* Stops the image from exploding in size */
          margin: 0 auto; /* Centers it if it wraps */
        }

        .profile-image-col img {
          width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: cover;
          border-radius: 16px; /* Elegant rounded corners */
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); /* Soft luxury shadow */
        }

        /* Right Side: Text area */
        .profile-text-col {
          flex: 1 1 50%;
        }

        .profile-heading {
          font-family: "Playfair Display", serif;
          font-size: 42px;
          margin-bottom: 24px;
          background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.2;
        }

        /* Left-aligned gold accent line under the title */
        .profile-heading::after {
          content: "";
          display: block;
          height: 3px;
          width: 80px;
          margin-top: 16px;
          background: linear-gradient(to right, var(--gold, #d4af37), transparent);
        }

        .profile-desc {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--medium-gray, #4a4a4a);
          margin-bottom: 24px;
          font-family: "Lora", serif;
        }

        /* Mobile Adjustments */
        @media (max-width: 900px) {
          .profile-section {
            padding: 60px 24px;
          }
          .profile-inner {
            gap: 40px;
          }
          .profile-image-col {
            max-width: 350px;
          }
          .profile-heading {
            font-size: 34px;
          }
        }
      </style>

      <section id="about-profile" class="profile-section">
        <div class="profile-inner">
          
          <div class="profile-image-col">
            <img 
              src="images/profile_pic.png" 
              alt="House of Charming Founder" 
            />
          </div>

          <div class="profile-text-col">
            <h2 class="profile-heading">About House of Charming</h2>
            
            <p class="profile-desc">
              Welcome to House of Charming. We are dedicated to curating the finest premium products and luxury home essentials. With a keen eye for detail and a commitment to exceptional service, we bring you exclusive brands and bespoke designs tailored to elevate your living spaces.
            </p>
            
            <p class="profile-desc">
              Discover a world where quality meets elegance, and let us help you find the perfect pieces that reflect your unique style.
            </p>
          </div>

        </div>
      </section>
    `;
  }
}

// Define the custom tag <app-profile>
customElements.define("app-profile", AppProfile);