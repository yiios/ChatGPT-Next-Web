"use client";

import React, { useEffect } from "react";

export const ClarityScript = () => {
  useEffect(() => {
    // 创建 script 元素
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.clarity.ms/tag/jt8dl9t2q5";

    // 定义脚本内容
    script.text = `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "jt8dl9t2q5");`;

    // 将脚本添加到文档中
    document.head.appendChild(script);

    // 清理函数
    return () => {
      document.head.removeChild(script);
    };
  }, []); // 空依赖数组确保脚本仅加载一次

  return null; // 如果不需要渲染任何东西
};

export default ClarityScript;
