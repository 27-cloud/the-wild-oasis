import { useMutation } from "@tanstack/react-query";
import { signup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    //user
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address.",
      );
    },
  });
  return { signup, isLoading };
}
