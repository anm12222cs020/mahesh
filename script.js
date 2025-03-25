body {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(to bottom, #00111f, #002a40, #004466); /* Dark blue gradient */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #a8ffb4; /* Neon green text */
}

.container {
  background: rgba(10, 25, 25, 0.8); /* Dark glass effect */
  backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 2rem;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 10px 40px rgba(0, 255, 150, 0.5);
  text-align: center;
  border: 2px solid rgba(0, 255, 150, 0.3);
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  color: #00ff99;
  text-shadow: 0 0 15px rgba(0, 255, 150, 0.8);
}

/* Search Box */
.search {
  display: flex;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 25px 0 0 25px;
  background: rgba(255, 255, 255, 0.2);
  color: #a8ffb4;
  font-size: 1rem;
  outline: none;
}

input::placeholder {
  color: rgba(168, 255, 180, 0.7);
}

/* Button */
button {
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0 25px 25px 0;
  background: #00ff99;
  color: #00111f;
  font-size
