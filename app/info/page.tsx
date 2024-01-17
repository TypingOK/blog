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
                href="https://www.typingok-blog.site"
                className="underline"
                target="_blank"
              >
                https://www.typingok-blog.site
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
      <div className="mt-5 md:mt-14 md:flex w-full">
        <h1 className="text-3xl font-extrabold md:w-1/5 md:text-end text-etc-blue">
          Introduction
        </h1>
        <div className="ml-0 md:ml-5 mt-2">
          <div>
            <h1 className="text-xl font-bold">
              전공 및 프로젝트로 실력을 키우는 개발자
            </h1>
            <br></br>
            대학에서 Java, 웹개발, 자료구조, 알고리즘 등 각종 전공 지식을
            쌓았으며 졸업 논문으로 웹 개발 팀 프 로젝트를 진행하였습니다. 이후
            만든 것을 바로 활용해 볼 수 있고 사람들과 여러 상호작용을 하는
            프론트엔드에 흥미를 느껴 여러 개인, 팀 프로젝트를 통해 많은 것들을
            배우고 시도하면서 성장해오고 있습니다.
          </div>
          <br />
          <div className="mt-10">
            <h1 className="text-xl font-bold">
              새로운 기술을 지속적으로 시도합니다.
            </h1>
            <br />
            프로젝트를 진행하면서 새로운 기술들을 도입 하고 공부하면서 성장하고
            있습니다. 다만 기술들을 아무렇게나 선택하기보다는 신중하게 팀원들과
            함께 이야기 하며 현재 프로젝트에 어울리는지 토론하고 결정 합니다.
            또한 지속적으로 사후지원이 잘 되고 있는지 확인하며 문서나 사용자들이
            얼마나 많은지 확인하여 사용합니다.
          </div>
          <br />
          <div className="mt-10">
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
      <section className="mt-5 md:mt-24 md:flex w-full">
        <div className="md:w-1/5 w-full md:text-end">
          <h1 className="text-3xl w-full md:text-end font-extrabold text-etc-blue">
            Tech Stack
          </h1>
        </div>
        <div className="w-full md:w-4/5 md:text-end ml-0 md:text-sm md:ml-5 text-[0.6rem] align-text-bottom mt-3 flex">
          기술 스택 옆
          <Image
            src="/number1.svg"
            alt="1 아이콘"
            width={12}
            height={12}
            className="mb-1 md-2 md:ml-2"
          ></Image>
          아이콘은 문서를 보지 않고도 개발할 수 있음을 나타냅니다.
        </div>
      </section>

      <section className="mt-5 md:flex w-full">
        <div className="md:text-end w-full md:w-48 text-xl font-bold">
          Front-End
        </div>
        <div className="ml-0 md:ml-5 w-full text-xs md:text-sm ">
          <div className="w-full flex justify-evenly">
            <span className="w-32 flex items-center">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              HTML
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              CSS
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              JavaScript
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              TypeScript
            </span>
            <span className="w-32">jQuery</span>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              React.js
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              Next.js
            </span>
            <span className="w-32">Vue.js</span>
            <span className="w-32">Vuex.js</span>
            <span className="w-32">Redux-Toolkit</span>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <span className="w-32">Zustand</span>
            <span className="w-32">Recoil</span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              React-Query
            </span>
            <span className="w-32 flex">
              <Image
                src="/number1.svg"
                alt="1 아이콘"
                width={12}
                height={12}
              ></Image>
              Tailwind-CSS
            </span>
            <span className="w-32">Styled-Component</span>
          </div>
          <div className="w-full flex justify-evenly items-center">
            <span className="w-32">Emotion.js</span>
            <span className="w-32">MUI</span>
            <span className="w-32">StoryBook</span>
            <span className="w-32">PlayWright</span>
            <span className="w-32">Chart.js</span>
          </div>
        </div>
      </section>
      {/* 백엔드 */}
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <section className="mt-10 md:flex w-full">
        <div className="md:text-end w-full md:w-48 text-xl font-bold">
          Back-End, CI/CD
        </div>
        <div className="ml-0 md:ml-5 w-full md:text-sm text-xs">
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
      <section className="mt-5 md:mt-24 md:flex w-full">
        <div>
          <h1 className="text-3xl md:text-end w-48 font-extrabold text-etc-blue">
            Projects
          </h1>
        </div>
      </section>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2023-08 ~ 현재
        </div>
        <section className="md:w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">
            Next.js 블로그 개발
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
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
          <div className="md:ml-5 md:mt-3 md:w-11/12  leading-8">
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
            <div>
              - Lighthouse에서 모바일 기준 성능 98, 접근성 100, 권장사항 100,
              검색엔진 최적화 92점을 받음
            </div>
            <div>
              - Vercel Speed Insights에서 데스크탑 기준 99점, 모바일 기준
              100점을 받음
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold ml-3 md:w-1/5 text-end mt-3">
          2023-07~2023-08
        </div>
        <section className="md:w-4/5">
          <div>
            <div className="md:mt-3 text-2xl font-extrabold md:ml-5 ">
              LMS 클래스룸 수강시스템
            </div>
            <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
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
            <div className="md:ml-5 md:mt-3 leading-8">
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
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />

      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2023-03 ~ 2023-05
        </div>
        <section className="w-full md:w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            BananVote
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
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
          <div className="md:ml-5 md:mt-3 text-bold  leading-8">
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
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-12 ~ 2023-01
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">Drawee</div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
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
          <div className="md:ml-5 md:mt-3 md:w-11/12  leading-8">
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
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-10~2022-11
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">
            ⼤東HIP地圖
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
            깃허브:{" "}
            <Link
              href="https://github.com/TypingOK/HipMap"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/HIP-dac24cf7640848549eecbd5412dcf066"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12 leading-8">
            <div className="font-bold">
              - 짧은 영상 혹은 사진과 함께 위치를 공유하여 자신만의 Hip한 공간을
              공유하는 SNS. 회원관리, 글작성, 쇼츠 영상 보기, 댓글 밑 대댓글
              달기 구현.
            </div>
            <div className="">
              - Redux-Toolkit, React-Query를 사용한 사용자 상태 관리
            </div>
            <div className="">- PWA를 사용하여 웹앱으로 제작</div>
            <div>- 카카오맵을 사용하여 사용자의 위치를 저장할 수 있도록 함</div>
            <div>
              - Lazy Loading을 적용하여 짧은 영상 혹은 사진이 동시에 여러개가
              로드 되지 않도록 함
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-08~2022-10
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">RECEHFI</div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
            깃허브:{" "}
            <Link
              href="https://github.com/TypingOK/RECHEFI"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/RECHEFI-72ed18072f8b4c9b8a82dc11dc20c3ca"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12 leading-8">
            <div className="font-bold">
              - 인공지능을 이용하여 레시피를 읽어주고 음성 명령을 내릴 수 있는
              요리 레시피 공유 사이트. 요리 레시피 읽어주기, 음성 명령 기능,
              요리 사진 공유 페이지, 댓글, 대댓글, 음성 녹음 기능 구현.
            </div>
            <div className="">
              - WebAPIs의 TTS와 STT기능을 사용하여 요리 레시피를 읽어주도록 하고
              인공지능을 사용하기 위한 시동어를 감지 하도록 함
            </div>
            <div className="">
              - React-Query를 사용하여 서버와의 상태 관리하여 요리 사진을
              과도하게 가져오지 않도록 캐싱함
            </div>
            <div>
              - 직접 제작한 인공지능과 연결하기 위해 Recorder.js를 통해 사용자의
              음성을 녹음하고 mp4 형태로 변형하여 백엔드에 전송
            </div>
            <div>
              - 인공지능 학습을 위한 우분투, 아나콘다, 주피터 노트북 환경을 직접
              구축하였으며 원격으로 접속하기 위한 SSH 포트 설정 및 포트포워딩
              설정 함
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-07~2022-08
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">ATTI</div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
            깃허브:{" "}
            <Link
              href="https://github.com/TypingOK/ATTI"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
            {"  "} | 프로젝트 자세히보기(Notion):{"  "}
            <Link
              href="https://spectrum-bracket-f5c.notion.site/ATTI-2085e1ceee074415b77fa7fe7767d5b3"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12 leading-8">
            <div className="font-bold">
              - WebRTC를 이용한 비대면 학습 사이트. 관리자 페이지의 시간표 생성,
              시간표를 통한 강의장 입실 및 출석체크, 화상 수업, 채팅, 1대1
              귓속말 등 화상 강의실 페이지 제작
            </div>
            <div className="">
              - WebRTC를 구현한 OpenVidu 오픈소스 라이브러리를 이용하여
              사용자들의 영상 및 음성, 채팅을 구현. 1대1 비공개 채팅을 구현
              하였으며 질문 채팅을 하면 실제 질문 게시판에 업로드 되도록 연동.
              수업하는 사람인 경우 익명모드를 활성화 할 수 있으며 학생은
              익명모드를 요청할 수 있도록 구현
            </div>
            <div className="">
              - 시간표를 통해 강의실을 입장하도록 하였으며 30분전에 입장하면
              정상 출석, 수업 시간 이후에 출석하면 지각처리 하도록 함
            </div>
            <div>- 익명 모드시 채팅은 TTS를 통해 읽을 수 있도록 함</div>
            <div>- Redux-Toolkit을 이용하여 사용자의 상태 관리를 하도록 함</div>
            <div>- TypeScript를 사용하여 개발</div>
          </div>
        </section>
      </div>
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2021-04~2021-07
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5">
            StartPlayUp
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-2 mt-3">
            깃허브:{" "}
            <Link
              href="https://github.com/StartPlayUp/startPlayUp"
              target="_blank"
              className="underline"
            >
              바로가기(클릭)
            </Link>
          </div>
          <div className="md:ml-5 md:mt-3 md:w-11/12 leading-8">
            <div className="font-bold">
              - WebRTC, React를 이용한 보드게임 웹사이트. 보드게임 Yhatzee 구현,
              로그인 및 회원가입과 같은 회원 관리 기능 담당
            </div>
            <div className="">
              - Context api를 사용하여 사용자의 상태를 관리하도록 함
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 border-t mb-10 mr-10 ml-10 border-primary-300" />
      {/* Certificate */}
      <section className="mt-5 md:mt-14 md:flex w-full">
        <div className="md:w-1/5 md:text-end">
          <h1 className="text-3xl md:text-end md:w-full font-extrabold text-etc-blue">
            Certificate
          </h1>
        </div>
      </section>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">2021-06</div>
        <section className="w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            정보처리기사
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            발급처: 한국산업인력공단
          </div>
        </section>
      </div>

      {/* Education */}
      <section className="mt-5 md:mt-24 md:flex w-full">
        <div className="md:w-1/5 md:text-end">
          <h1 className="text-3xl md:text-end md:w-full font-extrabold text-etc-blue">
            Education
          </h1>
        </div>
      </section>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2023-06~2023-08
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 w-full text-2xl font-extrabold md:ml-5 md:w-11/12">
            10주 완성! 프로젝트 캠프 - React
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            웅진 씽크빅, Udemy, 청년 일경험 프로젝트로 진행한 React 부트캠프
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2022-01~2022-12
        </div>
        <section className="md:w-4/5 w-full">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            삼성청년SW아카데미 7기
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            삼성전자에서 진행하는 개발자 부트캠트. HTML, CSS, JavaScript,
            Vue.js, Java, Spring Boot 뿐만 아니라 여러 팀 프로젝트와 알고리즘
            문제 풀이 교육
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">
          2016-03~2022-02
        </div>
        <section className="w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            한신대학교
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            정보통신학부 전공 졸업
          </div>
        </section>
      </div>
      {/* ETC */}
      <section className="mt-5 md:mt-24 md:flex w-full">
        <div className="md:w-1/5 md:text-end">
          <h1 className="text-3xl md:text-end md:w-full font-extrabold text-etc-blue">
            ETC
          </h1>
        </div>
      </section>
      <div className="w-full flex flex-col md:flex-row">
        <div className="font-bold md:ml-3 md:w-1/5 text-end mt-3">2023-08</div>
        <section className="w-4/5">
          <div className="md:mt-2 text-2xl font-extrabold md:ml-5 md:w-11/12">
            10주 완성! 프로젝트 캠프 팀 프로젝트 최우수상
          </div>
          <div className="md:ml-5 md:text-sm text-xs md:mt-0 mt-3">
            LMS 클래스룸 수강시스템 프로젝트
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoPage;
