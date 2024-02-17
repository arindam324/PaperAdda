function isPhoneNumber(value: string) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
}


export default isPhoneNumber