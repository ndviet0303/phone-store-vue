import { ref, type Ref } from "vue";

interface User {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  role: number;
}

const user: Ref<User | null> = ref(null);

export function useUser() {
  function setUser(newUser: User) {
    user.value = newUser;
  }

  return {
    user,
    setUser,
  };
}
