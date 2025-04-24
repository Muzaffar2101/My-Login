function showForm(formId) {
  document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));
  document.getElementById(`${formId}-form`).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[onclick="showForm('${formId}')"]`).classList.add('active');
}

function getUsers() {
  const users = sessionStorage.getItem("users");
  return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
  sessionStorage.setItem("users", JSON.stringify(users));
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  const users = getUsers();

  if (users[username] && users[username] === password) {
    alert(`✅ Welcome back, ${username}!`);
  } else {
    alert("❌ Invalid username or password.");
  }
}

function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  if (!username || !password) {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== confirm) {
    alert("❌ Passwords do not match!");
    return;
  }

  const users = getUsers();

  if (users[username]) {
    alert("⚠️ Username already exists!");
    return;
  }

  users[username] = password;
  saveUsers(users);

  alert(`✅ Account created for ${username}! You can now log in.`);
  showForm('login');
}