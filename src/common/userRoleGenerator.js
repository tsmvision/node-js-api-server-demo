const userRoleGenerator = (role=null) => {
  switch(role) {
    case role === "admin":
      return "admin";
    default:
      return "guest";
  }
};

export default userRoleGenerator;