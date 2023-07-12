import MyInfoTop from "@/src/component/info/MyInfoTop";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <section className="w-full flex justify-center flex-col items-center mt-5">
          <MyInfoTop
            className="flex justify-between w-full h-72"
            coordX={"-20%"}
          >
            <div className="w-full h-full flex flex-col justify-center">
              <div className="h-11 text-2xl font-extrabold mb-auto">저는</div>
              <div className="h-11 text-3xl font-extrabold ml-7">
                함께 성장하는 것을 좋아하는
              </div>
              <div className="h-11 text-3xl font-extrabold ml-24">
                새로운 것을 배우기 힘쓰는
              </div>
              <div className="h-11 text-2xl font-extrabold ml-48 mt-auto">
                프론트엔드 개발자입니다.
              </div>
            </div>
            <div className="w-56 h-64 relative">
              <Image src="/사진.jpg" alt="profile image" fill></Image>
            </div>
          </MyInfoTop>
        </section>
        <section className="w-full flex justify-center flex-col items-center mt-5">
          <MyInfoTop
            className="justify-center flex flex-col items-center w-full h-72"
            coordY={"20%"}
          >
            <div className="h-11 text-xl font-extrabold ">
              다음과 같이 3가지로 저를 표현한다면
            </div>
            <div className=" text-3xl font-extrabold">
              <ul>
                <li>1. 다른 팀원들과 소통에 힘쓰는</li>
                <li>2. 배운 것을 나누기 위해 힘쓰는</li>
                <li>3. 새로운 기술 적용에 관심이 많은</li>
              </ul>
            </div>
            <div className="h-11 text-xl font-extrabold mt-3">사람입니다.</div>
          </MyInfoTop>
        </section>
        <section className="w-full justify-center h-96 flex flex-col items-center">
          <MyInfoTop className="mb-auto h-14" coordX={"-20%"}>
            <div>제가 지금까지 사용했던 기술스택들은 다음과 같습니다.</div>
          </MyInfoTop>
          <MyInfoTop className="flex flex-wrap mb-auto h-full" coordX={"20%"}>
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
          </MyInfoTop>
        </section>
        <section>
          <div>함께한 프로젝트는 다음과 같습니다.</div>

          <div>
            <MyInfoTop className="w-full h-64">
              <div>Banana Vote</div>
            </MyInfoTop>
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
