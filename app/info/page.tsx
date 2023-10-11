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
          <h1 className="text-3xl w-48 text-end font-extrabold text-etc-blue">
            Tech Stack
          </h1>
        </div>
        <div className="w-full text-end ml-5 text-xs align-text-bottom mt-3 flex">
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
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={15}
                height={15}
              ></Image>
              Git
            </span>
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
      <section className="mt-5 md:mt-14 md:flex w-full">
        <div>
          <h1 className="text-3xl md:text-end w-48 font-extrabold text-etc-blue">
            Projects
          </h1>
        </div>
      </section>
      <div className="w-full flex">
        <div className="font-bold ml-3 md:w-1/5 text-end mt-3">
          2023-07~2023-08
        </div>
        <section className="md:w-4/5">
          <div>
            <div className="md:mt-3 text-2xl font-extrabold md:ml-5 ">
              LMS 클래스룸 수강시스템
            </div>
            <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
              배포 주소:{"  "}
              <Link
                href="https://lms-a.sniperfactory.com/"
                target="_blank"
                className="underline"
              >
                바로가기(클릭)
              </Link>
              {"  "} | 깃허브:{" "}
              <Link
                href="https://github.com/TypingOK/sfac-lms-team-a"
                target="_blank"
                className="underline"
              >
                바로가기(클릭)
              </Link>
              {"  "} | 프로젝트 자세히보기(Notion):{"  "}
              <Link
                href="https://spectrum-bracket-f5c.notion.site/LMS-d61982f1a871414e84edd775d403f619"
                target="_blank"
                className="underline"
              >
                바로가기(클릭)
              </Link>
            </div>
            <div className="md:ml-5 md:mt-3">
              <div className="font-bold">
                - 5개의 팀이 각자 기능을 만들고 합쳐 하나의 사이트를 완성하는
                프로젝트
              </div>
              <div className="text-sm">
                &nbsp; &nbsp; &nbsp; - 참여하는 모든 팀의 팀장 전체를 모아
                회의를 주도하고 공용 컴포넌트를 설계
                <br></br>
                &nbsp; &nbsp; &nbsp; - 참여하는 전체 팀의 총 책임자의 역할을
                수행.
                <br></br>
                &nbsp; &nbsp; &nbsp; - 메인 브랜치로 합치는 경우 각 팀장들을
                리뷰어로 두어 코드 컨벤션 및 진행 상황 트래킹 시도
              </div>
              <div className="">
                - Firebase를 사용하여 NoSQL을 Eraser를 통해 모든 팀들이 다 같이
                협력하면서 DB구조를 설계
              </div>
              <div className="">- 강의 수강 페이지를 담당</div>
              <div className="text-sm">
                &nbsp; &nbsp; &nbsp; - 동영상 강의, Markdown 형식의 문서, 링크
                형식의 글을 확인할 수 있도록 함.
                <br></br>
                &nbsp; &nbsp; &nbsp; - 댓글, 대댓글, 타임스탬프, 동영상 강의
                플레이 시간 기록 기능을 구현함.
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2023-05 ~
        </div>
        <section className="md:w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">
            Next.js 블로그 개발
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            배포 주소:{"  "}
            <Link
              href="https://blog-typingok.vercel.app/"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 깃허브:{" "}
            <Link
              href="https://github.com/TypingOK/blog"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/Develop-Blog-5985e09e05094ac58b366109c6554b98?pvs=4"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12">
            <div className="font-bold">
              - 개발하고 공부한 내용을 정리하기 위해 만드는 블로그
            </div>
            <div className="">
              - Next.js App router를 사용하였으며, 프론트엔드 개발만으로 백엔드
              개발 없이 직접 DB와 연결할 수 있도록 함.
            </div>
            <div className="">
              - Vercel에서 지원하는 Postgresql을 사용하여 빠르게 DB를 구축 및
              배포하였으며 Prisma를 사용하여 Next.js에서 접근
            </div>
            <div>- Vercel을 이용하여 CI&CD를 구현함</div>
            <div>- Next auth를 이용하여 Github 로그인 구현</div>
            <div>- Yarn berry를 이용하여 Zero Install 방식으로 모듈 관리</div>
          </div>
        </section>
      </div>
      <div className="w-full flex">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2023-03 ~ 2023-05
        </div>
        <section className="w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            BananVote
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            깃허브:{" "}
            <Link
              href="https://github.com/Cocktail-Masters/Banana-Vote-FE"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/Banana-Vote-57399684471b423ab94947bbd83c0799"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 text-bold">
            <div className="font-bold">
              - 간편하게 투표하고 의견을 적을 수 있는 사이트. 투표 작성 페이지,
              이벤트 페이지, 마이페이지 담당하여 개발.
            </div>
            <div className="">- Next.js App router를 활용하여 개발.</div>
            <div className="">- React-Query를 사용하여 서버 상태를 관리.</div>
            <div>
              - Tailwind CSS를 사용하였으며 다크모드 설정하였을 때에도
              새로고침시 화면 깜빡임이 없도록 함.
            </div>
            <div>- PlayWright를 활용한 E2E 테스트 시도.</div>
            <div>- i18n을 활용하여 영어, 한국어, 일본어 지원</div>
          </div>
        </section>
      </div>
      <div className="w-full flex">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-12 ~ 2023-01
        </div>
        <section className="w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">Drawee</div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            배포 주소:{"  "}
            <Link
              href="https://drawee.art/"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 깃허브:{" "}
            <Link
              href="https://github.com/coop-game/coop"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/Drawee-59f9b3533d9f41e49fc66eebaa05d514"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12">
            <div className="font-bold">
              - WebRTC와 Next.js를 활용한 그림그리기 사이트. 모노레포를 이용하여
              게임 핵심 기능을 따로 관리함. 이어달리기 모드, 게임 결과 페이지,
              Home 페이지 담당하여 개발
            </div>
            <div className="">
              - Next.js, i18n을 활용하여 한국어, 영어 지원.
            </div>
            <div className="">
              - Framer-motion을 사용하여 다양한 애니메이션 추가
            </div>
            <div>- SEO 최적화</div>
            <div className="text-sm">
              &nbsp; &nbsp; &nbsp; - 최적화 이후 지속적으로 구글에서 검색량이
              많아지고 있음.
            </div>
          </div>
        </section>
      </div>
      {/* Certificate */}
      {/* Education */}
      {/* ETC */}
    </div>
  );
};

export default InfoPage;
