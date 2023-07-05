import Image from "next/image";

const InfoPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <section className="w-full flex justify-center flex-col items-center">
          <div>저는</div>
          <div>함께 성장하는 것을 좋아하는</div>
          <div>새로운 것을 배우기 힘쓰는</div>
          <div>프론트엔드 개발자입니다.</div>
        </section>
        <section>
          <div>다음과 같이 3가지로 저를 표현한다면</div>
          <div>
            <div className="w-48 h-64 relative">
              <Image src="/사진.jpg" alt="profile image" fill></Image>
            </div>
            <ul>
              <li>1. 다른 팀원들과 소통에 힘쓰는</li>
              <li>2. 배운 것을 나누기 위해 힘쓰는</li>
              <li>3. 새로운 기술 적용에 관심이 많은</li>
            </ul>
          </div>
          <div>사람입니다.</div>
        </section>
        <section className="w-full justify-center flex flex-col items-center">
          <div>제가 지금까지 사용했던 기술스택들은 다음과 같습니다.</div>
          <div className="w-full flex flex-wrap">
            <a href="https://reactjs.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/React.svg"
                alt="React"
                height={50}
                width={50}
              />
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/CSS3.svg"
                alt="CSS3"
                height={50}
                width={50}
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/typescript.svg"
                alt="TypeScript"
                height={50}
                width={50}
              />
            </a>
            <a href="https://www.javascript.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/javascript.svg"
                alt="JavaScript"
                height={50}
                width={50}
              />
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/vue.svg"
                alt="Vue.js"
                height={50}
                width={50}
              />
            </a>
            <a href="https://www.chartjs.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/chartjs.svg"
                alt="Chart.js"
                height={50}
                width={50}
              />
            </a>
            <a href="https://redux.js.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/redux.svg"
                alt="Redux"
                height={50}
                width={50}
              />
            </a>
            <a href="https://jquery.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/jquery.svg"
                alt="jQuery"
                height={50}
                width={50}
              />
            </a>
            <a href="https://www.tailwindcss.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/tailwind.svg"
                alt="Tailwind CSS"
                height={50}
                width={50}
              />
            </a>
            <a href="https://nextjs.org/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/next.svg"
                alt="NextJS"
                height={50}
                width={50}
              />
            </a>
            <a href="https://chakra-ui.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/chakraui.png"
                alt="Chakra UI"
                height={50}
                width={50}
              />
            </a>
            <a href="https://mui.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/material.svg"
                alt="Material UI"
                height={50}
                width={50}
              />
            </a>
            <a href="https://styled-components.com/" target="_blank">
              <Image
                className="m-[10px]"
                src="/기술스택/styledcomponent.svg"
                alt="Styled Components"
                height={50}
                width={50}
              />
            </a>
          </div>
        </section>
        <section>
          <div>함께한 프로젝트는 다음과 같습니다.</div>
          <div>
            <div>Banana Vote</div>
            <div>Drawee</div>
            <div>大東HIP地圖</div>
            <div>RECHEFI</div>
            <div>ATTI</div>
            <div>StartPlayUp</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoPage;
