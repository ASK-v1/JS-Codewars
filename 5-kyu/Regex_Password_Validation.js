function validate(password) {
  
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{6,}$/.test(password);
}
