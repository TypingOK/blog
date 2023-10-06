import { useEffect } from "react";

export const useUtterances = (commentNodeId: string) => {
  useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId);

    if (scriptParentNode !== null) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "TypingOK/blog");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "comment :speech_ballon:");
      script.setAttribute("theme", "github-light");
      script.setAttribute("crossorigin", "anonymous");
      scriptParentNode.appendChild(script);
    }

    return () => {
      scriptParentNode?.firstChild &&
        scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, [commentNodeId]);
};

{
  /* <script
  src="https://utteranc.es/client.js"
  repo="TypingOK/blog"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>; */
}
