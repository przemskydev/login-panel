export const addItem = itemContent => ({
  type: "ADD",
  payload: itemContent
});

export const auth = (email, password) => ({
  type: "AUTH",
  payload: {
    email,
    password
  }
});