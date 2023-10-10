import MyInfoTop from "@/src/component/info/MyInfoTop";
import Image from "next/image";
import Link from "next/link";

const InfoPage = () => {
  return (
    <div className="w-full h-full flex flex-col md:p-0 p-3">
      {/* 이름, 프로필 이미지 영역 */}
      <div className="mt-10 flex w-full md:h-64 h-fit  flex-col md:flex-row items-center">
        <Image src="/사진.jpg" alt="프로필 이미지" width={180} height={200} />
        <div className="md:ml-5 mt-auto">
          <h1 className="text-5xl font-extrabold text-etc-blue md:mt-0 mt-5 flex md:justify-start justify-center">
            정 진
          </h1>
          <div className="text-xl font-medium">
            <div className="mt-2">Email: supermilktank8@gmail.com</div>
            <div className="mt-2">
              Blog(Naver):{" "}
              <Link
                href="https://blog.naver.com/wjdwls717"
                className="underline"
                target="_blank"
              >
                https://blog.naver.com/wjdwls717
              </Link>
            </div>
            <div className="mt-2">
              Blog2:{" "}
              <Link
                href="https://blog-typingok.vercel.app/"
                className="underline"
                target="_blank"
              >
                https://blog-typingok.vercel.app/
              </Link>
            </div>
            <div className="mt-2">
              GitHub:{" "}
              <Link
                href="https://github.com/TypingOK"
                className="underline"
                target="_blank"
              >
                https://github.com/TypingOK
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 자기소개 부분 */}
      <div className="mt-5 md:mt-14 md:flex">
        <h1 className="text-3xl font-extrabold text-etc-blue">Introduction</h1>
        <div className="ml-0 md:ml-5 mt-2">
          <div>
            <h1 className="text-xl font-bold">
              전공 및 프로젝트로 실력을 키우는 개발자
            </h1>
            <br></br>
            대학에서 Java, 웹개발, 자료구조, 알고리즘 등 각종 전공 지식을
            쌓았으며 졸업 논문으로 웹 개발 팀 프로젝트를 진행하였습니다. 이후 좀
            더 웹 개발에 대해 깊게 알고 싶어 삼성청년SW아카데미에 들어가 HTML,
            CSS, JS, JAVA, 알고리즘을 학습하였습니다. 또 Spring Boot, Vue.js를
            활용하여 토이 프로젝트를 진행하였으며 여러 개인, 팀 프로젝트를
            진행하고 있습니다.
          </div>
          <br />
          <div>
            <h1 className="text-xl font-bold">
              항상 새로운 것들을 시도하고자 노력해오고 있습니다.
            </h1>
            <br />
            개인 프로젝트나 팀 프로젝트에서 새로운 기술 스택을 사용하려고 해오고
            있습니다. 이를 통해서 매번 바뀌는 개발의 흐름을 놓치지 않을 수
            있었으며 지속적으로 노력하고 있습니다. 덕분에 새로운 기술스택을
            만나더라도 당황하지 않고 빠르게 학습하고 적응할 수 있게 되었습니다.
          </div>
          <br />
          <div>
            <h1 className="text-xl font-bold">
              함께 협업 하는 것을 좋아합니다.
            </h1>
            <br />
            특히 제가 과감하게 새로운 기술스택을 시도할 수 있었던 것은 항상
            팀원들을 의지하고 신뢰하고 적극적으로 지지하기 때문입니다. 또한
            프로젝트를 할 때 팀장을 주로 맡아왔으며 팀원들의 이야기를 많이
            들어주고 문제를 해결하기 위해 함께 고민하면서 발전하고 성장 할 수
            있었습니다.
          </div>
        </div>
      </div>
      {/* 기술 스택 부분 */}
      <section className="mt-5 md:mt-14 md:flex w-full">
        <div>
          <h1 className="text-3xl w-48 font-extrabold text-etc-blue">
            Tech Stack
          </h1>
        </div>
        <div className="w-full text-end text-xs align-text-bottom mt-3 flex">
          기술 스택 옆
          <Image
            src="/number1.svg"
            alt="1 아이콘"
            width={15}
            height={15}
            className="mb-5 ml-2"
          ></Image>
          아이콘은 문서를 보지 않고도 개발할 수 있음을 나타냅니다.
        </div>
      </section>
      <section className="mt-2 md:flex w-full">
        <div className="md:text-end w-full md:w-48 text-xl font-bold">
          Front-End
        </div>
        <div className="ml-0 md:ml-5 w-full text-sm">
          <div className="w-full flex justify-evenly">
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              HTML
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              CSS
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              JavaScript
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              TypeScript
            </span>
            <span className="w-32">jQuery</span>
          </div>
          <div className="w-full flex justify-evenly">
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              React.js
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              Next.js
            </span>
            <span className="w-32">Vue.js</span>
            <span className="w-32">Vuex.js</span>
            <span className="w-32">Redux-Toolkit</span>
          </div>
          <div className="w-full flex justify-evenly">
            <span className="w-32">Zustand</span>
            <span className="w-32">Recoil</span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              React-Query
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              Tailwind-CSS
            </span>
            <span className="w-32">Styled-Component</span>
          </div>
          <div className="w-full flex justify-evenly">
            <span className="w-32">Emotion.js</span>
            <span className="w-32">MUI</span>
            <span className="w-32">StoryBook</span>
            <span className="w-32">PlayWright</span>
            <span className="w-32">Chart.js</span>
          </div>
        </div>
      </section>
      {/* 백엔드 */}
      <section className="mt-10 md:flex w-full">
        <div className="md:text-end w-full md:w-48 text-xl font-bold">
          Back-End, CI/CD
        </div>
        <div className="ml-0 md:ml-5 w-full text-sm">
          <div className="w-full flex justify-evenly">
            <span className="w-32">Java</span>
            <span className="w-32">SpringBoot</span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              Docker
            </span>
            <span className="w-32">AWS</span>
            <span className="w-32">Git</span>
          </div>
          <div className="w-full flex justify-evenly">
            <span className="w-32">Nginx</span>
            <span className="w-32">Vercel</span>
            <span className="w-32">MySQL</span>
            <span className="w-32">Prisma</span>
            <span className="w-32">Postgresql</span>
          </div>
        </div>
      </section>
      {/* Projects */}
      {/* Certificate */}
      {/* Education */}
      {/* ETC */}
    </div>
  );
};

export default InfoPage;
