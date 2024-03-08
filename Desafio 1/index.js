const users = [
  {
    name: "Bruno",
    age: 23,
    email: "brunocabral035@gmail.com",
  },
  {
    name: "Pedro",
    age: 36,
    email: "pedro@gmail.com",
  },
  {
    name: "Vinícius",
    age: 42,
    email: "vinicius@gmail.com",
  },
];

const searchForUser = async (users, value) => {
  try {
    const user = await users.find(
      (user) =>
        user.name === value ||
        user.email === value ||
        user.age === Number(value)
    );

    if (!user) {
      throw new Error("Nenhum usuário encontrado");
    }

    console.log(user);
    return user;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

// Pode realizar a pesquisa por Nome, E-mail ou idade
const searchedUser = searchForUser(users, "Bruno");
