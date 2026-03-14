import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-550);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  //1. 加载经过身份验证的用户
  const { isLoading, isAuthenticated } = useUser();

  //2. 如果用户没有经过身份验证，重新指向login界面
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //3. 当加载时，展示spinner
  if (isLoading) return;
  <FullPage>
    <Spinner />
  </FullPage>;

  //4. 如果用户登录成功，渲染app
  if (isAuthenticated) return children;
}
