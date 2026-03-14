import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      //可以手动将一些数据设置为cache
      // queryClient.setQueriesData(["user"], user);
      queryClient.setQueryData(["user"], user.user);

      //抹去之前存在过的界面
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERRPR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
