<script setup>
import logo from '@/assets/Nirvana-Smiley-Face-Logo-600x600.png'
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <img :src="logo" alt="Grunge University Logo" />

      <div class="logo-text">
        <h2>Grunge University</h2>
        <p>SCIENTIA ET FIDES</p>
      </div>
    </div>

    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <a href="#about">About</a>
      <RouterLink to="/admissions" class="nav-link">Admissions</RouterLink>
      <a href="#academics">Academics</a>
      <a href="#campus">Campus Life</a>
      <a href="#news">News</a>
    </nav>

    <div class="right">
      <button class="search">⌕</button>
      <button class="login">Portal Login</button>
    </div>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 6%;
  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  gap: 30px;
  font-family: 'Georgia', serif;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.logo img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.logo-text h2 {
  color: #111111;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
}

.logo-text p {
  color: #f4c542;
  font-size: 10px;
  letter-spacing: 3px;
  margin: 4px 0 0;
  font-weight: bold;
  font-style: italic;
}

nav {
  display: flex;
  align-items: center;
  gap: 25px;
}

nav a {
  text-decoration: none;
  color: #555555;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #d62828;
}

.nav-link.router-link-active {
  color: #d62828;
  position: relative;
  font-weight: 700;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  height: 2px;
  background: #d62828;
  border-radius: 2px;
}

.right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search {
  border: none;
  background: transparent;
  color: #111111;
  font-size: 25px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.search:hover {
  color: #d62828;
}

.login {
  border: none;
  background: #d62828;
  color: #ffffff;
  padding: 11px 22px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login:hover {
  background: #b91c1c;
}

@media (max-width: 1100px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .logo-text h2 {
    font-size: 16px;
  }

  .logo img {
    width: 45px;
    height: 45px;
  }

  nav {
    gap: 15px;
  }

  nav a {
    font-size: 12px;
  }

  .right {
    display: none;
  }
}
</style>
