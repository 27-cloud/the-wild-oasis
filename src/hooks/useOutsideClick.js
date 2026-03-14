import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  // 创建一个 ref 来引用模态框 DOM 元素
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //检查点击是否发生在ref指向元素的外部
        if (ref.current && !ref.current.contains(e.target)) {
          handler(); //不包含就关闭
        }
      }

      // 第三个参数：
      // false（默认）：事件冒泡阶段（从内到外）
      // true：事件捕获阶段（从外到内）
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
}
