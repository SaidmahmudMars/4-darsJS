async function getUser() {
  try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];

    // DOM elementlarni yangilash
    document.getElementById("user-img").src = user.picture.large;
    document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById("user-address").textContent = `${user.location.city}, ${user.location.country}`;
    document.getElementById("user-phone").textContent = user.phone;

  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
}

// Sahifa ochilganda avtomatik yuklash
getUser();
