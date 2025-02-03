const user = {
    name: "Alice",
    address: {
      city: "Wonderland",
    },
  };
  
  console.log(user.address.city); // "Wonderland"
  console.log(user.address?.country); // undefined
  console.log(user.profile?.bio); // undefined (doesn't throw an error)
  