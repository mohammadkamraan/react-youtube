import { IStaticSidebarOptions } from "../interfaces/index";

export const genericSection: ReadonlyArray<IStaticSidebarOptions> = [
  {
    option: "Home",
    link: "/",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
  },
  {
    option: "Shorts",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='256'
        height='256'
        viewBox='0 0 256 256'
      >
        <g fill='#000' strokeMiterlimit='10' strokeWidth='2'>
          <path
            d='M30.063 90c-6.765 0-13.323-3.634-16.759-10.009-4.669-8.691-1.799-19.627 6.535-24.901.049-.03.099-.06.15-.086.673-.349 1.33-.708 1.989-1.081-.487-.279-.972-.555-1.464-.83-5.12-2.956-8.263-7.114-9.115-12.038-1.115-6.588-1.112-14.914 8.886-20.927 7.687-4.595 15.564-9.093 23.183-13.444 2.527-1.443 5.056-2.887 7.585-4.338C56.332-.662 62.85-.783 68.489 2.017c5.692 2.826 9.569 8.152 10.373 14.247 1.166 7.769-2.72 15.545-9.677 19.315a175.3 175.3 0 00-1.313.751 59.1 59.1 0 001.227.715c5.715 3.216 9.323 8.684 9.899 14.999.568 6.244-1.953 12.194-6.916 16.325-1.584 1.287-3.325 2.268-5.008 3.216-.487.274-.975.549-1.455.83-7.804 4.547-17.067 9.922-26.608 15.32A18.808 18.808 0 0130.063 90zm-8.156-31.484c-6.513 4.174-8.746 12.756-5.08 19.579 3.927 7.284 13.009 10.041 20.251 6.138 9.485-5.367 18.734-10.735 26.526-15.275.497-.29 1.002-.574 1.507-.86 1.609-.906 3.129-1.762 4.432-2.821 3.918-3.26 5.918-7.958 5.472-12.872-.454-4.984-3.326-9.314-7.88-11.877a91.766 91.766 0 01-2.191-1.292c-.628-.378-1.277-.769-1.975-1.172a2.003 2.003 0 01-.05-3.436 131.767 131.767 0 014.329-2.551c5.513-2.987 8.576-9.111 7.654-15.256-.635-4.808-3.695-8.99-8.192-11.223-4.445-2.207-9.558-2.125-13.671.219-2.526 1.45-5.057 2.895-7.587 4.339-7.601 4.341-15.462 8.83-23.11 13.401-6.346 3.817-8.376 8.691-7 16.821.65 3.762 3.056 6.871 7.149 9.234a209.02 209.02 0 014.46 2.583 2.001 2.001 0 01.01 3.436c-1.745 1.05-3.333 1.991-5.054 2.885z'
            transform='matrix(2.81 0 0 2.81 1.407 1.407)'
          ></path>
          <path
            d='M36.741 59.95a2 2 0 01-2.001-2.001V32.417a1.999 1.999 0 013-1.732l22.085 12.737a2 2 0 01.004 3.464L37.744 59.681a2 2 0 01-1.003.269zm2-24.07v18.6l16.088-9.321-16.088-9.279z'
            transform='matrix(2.81 0 0 2.81 1.407 1.407)'
          ></path>
        </g>
      </svg>
    ),
    link: "/shorts",
  },
  {
    option: "Subscriptions",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          fill='#000'
          fillRule='evenodd'
          d='M1.5 9A1.5 1.5 0 013 7.5h18A1.5 1.5 0 0122.5 9v11a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 20V9zM3 8.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h18a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5H3z'
          clipRule='evenodd'
        ></path>
        <path
          fill='#000'
          fillRule='evenodd'
          d='M9.77 10.556a.5.5 0 01.517.034l5 3.5a.5.5 0 010 .82l-5 3.5A.5.5 0 019.5 18v-7a.5.5 0 01.27-.444zm.73 1.404v5.08l3.628-2.54-3.628-2.54zM20 6H4V5h16v1zM18 3.5H6v-1h12v1z'
          clipRule='evenodd'
        ></path>
      </svg>
    ),
    link: "/feed/subscriptions",
  },
];

export const feedSection: ReadonlyArray<IStaticSidebarOptions> = [
  {
    option: "Library",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z'></path>
      </svg>
    ),
    link: "/feed/library",
  },
  {
    option: "History",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='66.667'
        height='66.667'
        version='1'
        viewBox='0 0 50 50'
      >
        <path
          d='M70 435v-55h55c30 0 55 5 55 10 0 6-16 10-36 10-44 0-37 15 20 41 107 48 234-3 280-113 57-134-49-289-196-288-85 1-171 64-198 146-12 35-9 109 5 147 4 9 3 17-3 17-15 0-32-57-32-104 0-46 30-119 63-155s115-71 167-71 134 35 167 71c34 37 63 110 63 159 0 52-35 134-71 167-72 66-174 79-263 35l-56-29v34c0 18-4 33-10 33-5 0-10-25-10-55z'
          transform='matrix(.1 0 0 -.1 0 50)'
        ></path>
        <path
          d='M240 335c0-72-1-76-36-115-20-22-34-43-31-47 7-7 93 67 91 79-1 5-2 42-2 83-2 99-22 99-22 0z'
          transform='matrix(.1 0 0 -.1 0 50)'
        ></path>
      </svg>
    ),
    link: "/feed/history",
  },
  {
    option: "You're Videos",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='96'
        height='96'
        viewBox='0 0 64 64'
      >
        <path d='M32 15c-17.062 0-19.34.178-21.527 2.428C8.286 19.678 8 23.252 8 32s.286 12.323 2.473 14.572C12.66 48.822 14.938 49 32 49s19.34-.179 21.527-2.428C55.714 44.322 56 40.748 56 32s-.286-12.322-2.473-14.572S49.062 15 32 15zm0 4c13.969 0 17.38.062 18.535 1.232C51.691 21.402 52 24.538 52 32c0 7.462-.309 10.598-1.465 11.768C49.38 44.938 45.97 45 32 45c-13.969 0-17.38-.062-18.535-1.232-1.156-1.17-1.434-4.306-1.434-11.768 0-7.462.278-10.598 1.434-11.768S18.03 19 32 19zm-4.05 6.018v13.964l12.146-7.037-12.147-6.927z'></path>
      </svg>
    ),
    link: "studio.youtube.com",
  },
  {
    option: "Watch Later",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    link: "/playlist",
    appQueries: { list: "WL" },
  },
  {
    option: "Liked Videos",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
        />
      </svg>
    ),
    link: "/playlist",
    appQueries: { list: "LL" },
  },
];

export const exploreSection: ReadonlyArray<IStaticSidebarOptions> = [
  {
    option: "Trending",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
        />
      </svg>
    ),
    link: "/feed/trending",
    appQueries: { bp: "6gQJRkVleHBsb3Jl" },
  },
  {
    option: "Music",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z'
        />
      </svg>
    ),
    link: "/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
  },
  {
    option: "Live",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100'
        height='100'
        viewBox='0 0 50 50'
      >
        <path d='M8.031 8.457a.97.97 0 00-.71.313A23.91 23.91 0 001 25a23.91 23.91 0 006.32 16.23c.38.414 1.037.413 1.434.016l2.129-2.129c.383-.383.38-.992.017-1.394A18.92 18.92 0 016 25a18.92 18.92 0 014.9-12.723 1.009 1.009 0 00-.017-1.394l-2.13-2.13a1.012 1.012 0 00-.722-.296zm33.938 0a1.013 1.013 0 00-.723.297l-2.13 2.13c-.384.384-.381.991-.018 1.393A18.916 18.916 0 0144 25a18.92 18.92 0 01-4.9 12.723 1.009 1.009 0 00.017 1.394l2.13 2.13c.396.396 1.053.396 1.433-.017A23.91 23.91 0 0049 25a23.91 23.91 0 00-6.32-16.23.968.968 0 00-.711-.313zm-6.344 6.38a.993.993 0 00-.754.292l-2.13 2.13a.986.986 0 00-.073 1.327A9.955 9.955 0 0135 25a9.948 9.948 0 01-2.332 6.412.986.986 0 00.072 1.326l2.131 2.133c.417.417 1.097.38 1.483-.066A14.945 14.945 0 0040 25c0-3.748-1.374-7.176-3.646-9.805a1.03 1.03 0 00-.729-.357zm-21.25.003a1.03 1.03 0 00-.729.357A14.938 14.938 0 0010 25c0 3.748 1.374 7.176 3.646 9.805a1.012 1.012 0 001.483.066l2.13-2.13a.986.986 0 00.073-1.327A9.955 9.955 0 0115 25c0-2.439.876-4.675 2.332-6.412a.986.986 0 00-.072-1.326l-2.131-2.133a.991.991 0 00-.754-.29zM25 19a6 6 0 100 12 6 6 0 000-12z'></path>
      </svg>
    ),
    link: "/channel/UC4R8DWoMoI7CAwX8_LjQHig",
  },
  {
    option: "Gaming",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='128'
        height='128'
        version='1'
        viewBox='0 0 96 96'
      >
        <path
          d='M95 678C58 557 37 433 44 376c7-60 42-116 93-147 38-24 39-24 344-24h305l41 27c52 34 82 84 89 145 7 56-14 181-51 301l-26 82H121l-26-82zm718-118c36-146 33-199-12-243l-31-32H190l-31 31c-45 45-47 92-14 234 15 63 29 118 32 123 2 4 140 6 306 5l301-3 29-115z'
          transform='matrix(.1 0 0 -.1 0 96)'
        ></path>
        <path
          d='M280 560v-40h-80v-80h80v-80h80v80h80v80h-80v80h-80v-40zM610 585c-15-18-10-45 13-59 34-22 73 27 47 59-16 19-44 19-60 0zM690 425c-26-32 13-81 48-59 22 14 27 41 12 59-16 19-44 19-60 0z'
          transform='matrix(.1 0 0 -.1 0 96)'
        ></path>
      </svg>
    ),
    link: "/gaming",
  },
  {
    option: "News",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
        />
      </svg>
    ),
    link: "/channel/UCYfdidRxbB8Qhf0Nx7ioOYw",
  },
  {
    option: "Sports",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='85.333'
        height='85.333'
        version='1'
        viewBox='0 0 64 64'
      >
        <path
          d='M167 554c-4-4-7-54-7-111 0-59-4-103-10-103-30 0-44 135-15 146 25 10 17 24-15 24H90v-73c0-79 14-111 55-127 15-6 25-20 29-42 7-40 59-94 99-103 23-6 27-12 27-41 0-34-1-34-45-34-43 0-45-1-45-30s-1-30-50-30-66-12-34-24c20-8 78-8 98 0 9 3 16 17 16 30 0 23 2 24 80 24 64 0 80-3 80-15s-13-15-60-15c-57 0-78-11-44-24 20-8 198-8 218 0 32 12 15 24-34 24s-50 1-50 30-2 30-45 30c-45 0-45 0-45 34 0 30 4 35 30 41 35 8 89 66 97 106 3 16 11 29 18 29s25 14 39 31c23 27 26 39 26 105v74h-34c-28 0-35 4-38 23-3 22-6 22-154 25-82 1-153-1-157-4zm273-160V258l-34-34c-30-30-40-34-86-34s-56 4-86 34l-34 34v272h240V394zm80 28c0-46-4-63-20-77-20-18-20-17-20 58 0 70 2 77 20 77s20-7 20-58z'
          transform='matrix(.1 0 0 -.1 0 64)'
        ></path>
        <path
          d='M227 474c-10-11-8-77 3-94 16-23 31 7 28 54-3 38-16 55-31 40zM230 310c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10z'
          transform='matrix(.1 0 0 -.1 0 64)'
        ></path>
      </svg>
    ),
    link: "channel/UCEgdi0XIXXZ-qJOFPf4JSKw",
  },
  {
    option: "Learning",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
        />
      </svg>
    ),
    link: "/channel/UCtFRv9O2AHqOZjjynzrv-xg",
  },
  {
    option: "Fashion",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='85.333'
        height='85.333'
        version='1'
        viewBox='0 0 64 64'
      >
        <path
          d='M258 530c-31-32-33-47-4-64 13-9 20-6 35 13 22 28 55 25 59-7 2-16-3-25-21-31-25-10-37-29-37-61 0-11-10-24-21-31-47-25-249-180-259-198-5-11-10-32-10-46 0-22 3-26 18-19 26 13 583 17 596 4 5-5 14-10 18-10 12 0 10 48-3 71-10 19-209 172-257 198-29 15-28 24 8 59 40 41 40 83 1 123-40 39-82 39-123-1zm109-12c32-30 29-68-7-103-16-16-30-35-30-42s-4-13-10-13c-20 0-10 49 13 61 40 21 49 56 21 83-22 22-50 20-74-6-11-12-23-18-27-15-12 12 40 57 66 57 13 0 35-10 48-22zm110-267c105-78 153-124 141-136-2-2-32 18-68 44-143 105-202 141-229 141-26 0-113-49-127-72-14-22 6-16 52 17 27 19 60 35 74 35 19 0 165-92 198-125 3-3-87-5-199-5H115l30 25c52 42 5 27-61-21-35-25-64-42-64-39 0 23 36 57 143 135 160 118 155 118 314 1zm-34-128c-68-2-178-2-245 0-68 1-13 3 122 3s190-2 123-3z'
          transform='matrix(.1 0 0 -.1 0 64)'
        ></path>
      </svg>
    ),
    link: "channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ",
  },
];

export const moreFromYoutube: ReadonlyArray<IStaticSidebarOptions> = [
  {
    option: "YouTube Studio",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='96'
        height='96'
        viewBox='0 0 48 48'
      >
        <path
          fill='#ef4754'
          d='M16 10c1.209-.701 1-.5 2.25-1 .255-1.771.471-3.584.726-5.355.038-.267.082-.547.25-.758.286-.36.814-.389 1.274-.387 2.026.007 4.256.253 6.25.25.74-.001 1.228-.257 1.978-.252.491.003.905.37.976.856.167 1.146.538 2.451.562 3.485.015.624.108 2.036.108 2.036s1.861.684 2.5 1.25c.265.234 1.125 1 1.125 1s1.537-.419 1.875-.5c1.615-.389 2.191-1.192 3.807-1.581.229-.055.469-.109.694-.044.283.082.478.333.653.57 1.391 1.88 2.398 4.687 3.79 6.567.405.547.83 1.239.557 1.863-.166.381-.605.536-.911.817-1.33 1.218-2.557 2.13-3.964 2.933.5 1.875.375 3.25.125 4.5 1.493 1.159 2.873 1.682 4.193 3.034.202.207.335.463.508.694.269.357.114.673.017.999a5.422 5.422 0 01-1.146 2.054c-1.149 1.291-2.374 4.321-3.38 5.613-.307.394-.851.489-1.292.254-1.512-.804-3.149-1.398-5.399-2.023-.875 1-2.125 1.5-3.625 2.125-.134 1.856-.5 3.875-.614 5.516-.022.322-.337.565-.607.741-.334.217-.756.234-1.154.243-2 .045-3.875-.209-5.875-.25-.699-.014-1.524.221-2.223.196-.214-.008-.446-.022-.608-.161-.186-.159-.223-.428-.244-.671-.108-1.249-.613-2.986-.549-4.238.016-.315-.097-1.094-.338-1.182-.91-.333-.628-.611-1.537-.943-.561-.205-1.5-.875-2.066-1.49-1.267.714-3.821 1.782-5.222 2.173-.275.074-.589.066-.839.066a.654.654 0 01-.555-.344c-1.634-3.403-3.277-5.061-4.511-7.855a.72.72 0 01.057-.676c.819-1.289 3.51-2.5 4.76-4.125.102-.329-.125-1.5-.125-2.25 0-.32.125-1.75.125-1.75s-2.696-2.136-4-3.375c-.28-.266-.704-.484-.836-.825-.043-.113-.012-.246.037-.356 1.407-3.209 2.699-5.389 4.547-8.014a1.01 1.01 0 011.252-.338c1.565.733 3.62 1.407 5.124 1.908 0 0 1.11-.774 1.5-1z'
        ></path>
        <path
          fill='#fff'
          d='M19.75 17.5s-.25.625-.25 2c0 1.469.25 4.156.25 5.625 0 1.281-.25 5.375-.25 5.375s2.25-1.5 3.625-2.25 3.5-1.448 4.75-2.286C29.125 25.125 31.5 24 31.5 24s-1.25-.625-2.125-1.125-1.964-.704-3.357-1.79S19.75 17.5 19.75 17.5z'
        ></path>
        <path
          fill='#010101'
          d='M27.646 46.005c-1.015 0-2.006-.066-2.969-.131-.803-.053-1.61-.107-2.438-.125-.306-.005-.644.042-1.007.093-.405.057-.825.113-1.224.102-.229-.008-.612-.022-.916-.281-.355-.303-.396-.761-.417-1.007-.041-.465-.14-1.007-.245-1.582-.171-.936-.348-1.904-.306-2.726.01-.2-.051-.57-.115-.727-.478-.19-.678-.384-.84-.542-.138-.134-.237-.231-.591-.36-.561-.206-1.376-.762-1.986-1.342-1.391.729-3.692 1.672-4.996 2.036-.316.089-.64.083-.905.087-.481 0-.895-.258-1.072-.628-.801-1.668-1.598-2.9-2.369-4.092-.779-1.204-1.514-2.341-2.149-3.777a1.215 1.215 0 01.092-1.146c.458-.72 1.363-1.369 2.322-2.056.884-.633 1.797-1.287 2.388-2.011.006-.18-.038-.595-.068-.882a11.927 11.927 0 01-.085-1.158c0-.254.067-1.084.104-1.526-.665-.531-2.716-2.185-3.823-3.237-.076-.072-.165-.14-.254-.208-.265-.204-.564-.435-.705-.8-.059-.153-.099-.405.045-.736 1.333-3.041 2.579-5.236 4.597-8.102a1.506 1.506 0 011.873-.501c1.458.683 3.407 1.332 4.834 1.807.345-.238 1.027-.705 1.328-.879.866-.502 1.05-.567 1.494-.724.142-.05.314-.111.553-.203.112-.79.216-1.586.321-2.384.118-.898.236-1.796.364-2.683.041-.284.097-.674.354-.998.461-.58 1.238-.579 1.667-.577 1.009.003 2.077.066 3.109.126 1.042.061 2.118.124 3.11.124.297-.007.606-.054.902-.116a5.473 5.473 0 011.108-.137 1.506 1.506 0 011.468 1.284c.061.415.149.851.236 1.288.155.768.314 1.562.331 2.258.01.432.059 1.245.087 1.695.585.23 1.808.745 2.353 1.229l.923.821c.457-.124 1.376-.372 1.628-.433.743-.179 1.247-.453 1.781-.743.567-.309 1.154-.627 2.026-.837.249-.06.589-.143.95-.038.456.132.732.506.916.753.72.973 1.339 2.183 1.938 3.353.581 1.134 1.181 2.307 1.852 3.214.31.418 1.035 1.398.613 2.361-.167.382-.486.598-.743.771-.1.067-.201.134-.289.214-1.267 1.161-2.429 2.038-3.726 2.808.39 1.681.288 2.98.098 4.045.487.359.968.661 1.436.954.848.532 1.726 1.082 2.566 1.943.15.154.271.331.389.51.052.078.104.157.161.232.392.52.235 1.008.131 1.332l-.034.11a5.955 5.955 0 01-1.252 2.244c-.588.66-1.222 1.853-1.834 3.007-.536 1.008-1.042 1.961-1.525 2.581a1.52 1.52 0 01-1.921.389c-1.352-.718-2.861-1.292-5.007-1.901-.87.872-2.007 1.364-3.308 1.905a59.045 59.045 0 01-.3 2.614c-.121.928-.234 1.803-.289 2.593-.043.614-.618.986-.835 1.126-.466.302-1.014.314-1.414.323-.165.002-.328.004-.491.004zm-5.459-1.255h.074c.844.018 1.666.072 2.483.127 1.146.077 2.228.149 3.37.123.364-.008.682-.026.893-.163.363-.234.38-.344.381-.356.057-.82.173-1.71.295-2.653.124-.95.251-1.933.319-2.865a.498.498 0 01.306-.425l.139-.058c1.414-.589 2.531-1.054 3.302-1.935a.5.5 0 01.51-.153c2.376.66 4.021 1.277 5.5 2.064a.52.52 0 00.663-.121c.43-.552.916-1.467 1.431-2.435.641-1.206 1.303-2.453 1.971-3.203a4.94 4.94 0 001.041-1.864l.041-.13c.094-.293.089-.336.022-.425-.069-.092-.132-.187-.195-.282-.084-.126-.165-.254-.271-.363-.757-.775-1.546-1.271-2.382-1.794-.565-.354-1.15-.721-1.76-1.194a.5.5 0 01-.184-.493c.228-1.137.371-2.442-.118-4.273a.499.499 0 01.235-.563c1.364-.777 2.559-1.662 3.874-2.867.124-.113.264-.21.405-.305.18-.122.335-.227.386-.343.167-.383-.18-.931-.501-1.365-.72-.973-1.339-2.183-1.938-3.353-.581-1.134-1.181-2.307-1.852-3.214-.109-.147-.258-.349-.391-.388-.106-.031-.289.015-.437.05-.745.179-1.249.453-1.782.744-.567.309-1.154.627-2.025.837-.335.08-1.86.496-1.861.496a.505.505 0 01-.464-.109l-1.124-.999c-.466-.414-1.848-.974-2.341-1.155a.5.5 0 01-.327-.436s-.094-1.426-.109-2.057c-.014-.608-.165-1.359-.311-2.085-.091-.454-.183-.908-.246-1.34a.5.5 0 00-.484-.429c-.319-.011-.605.056-.9.116-.331.069-.643.142-1.104.136-1.021 0-2.112-.064-3.168-.125-1.019-.06-2.073-.122-3.055-.125-.371.003-.741.022-.88.199-.088.111-.121.336-.146.518-.127.884-.245 1.778-.362 2.672-.118.898-.236 1.796-.364 2.683a.5.5 0 01-.31.393c-.406.162-.661.252-.86.322-.403.143-.539.19-1.324.646-.305.177-1.161.766-1.465.978a.5.5 0 01-.444.064l-.224-.075c-1.452-.483-3.44-1.145-4.956-1.855a.507.507 0 00-.631.172c-1.976 2.806-3.195 4.954-4.498 7.927.012.08.193.22.354.343.117.09.232.181.333.275 1.272 1.209 3.939 3.324 3.966 3.345a.501.501 0 01.188.436c-.051.567-.125 1.488-.125 1.707 0 .309.042.692.08 1.054.071.676.107 1.072.023 1.344a.489.489 0 01-.081.157c-.676.879-1.692 1.606-2.674 2.31-.878.629-1.707 1.223-2.061 1.779a.224.224 0 00-.021.206c.603 1.364 1.317 2.468 2.073 3.638.788 1.218 1.602 2.477 2.431 4.203.031.052.14.061.202.061.238 0 .444-.004.605-.049 1.332-.371 3.863-1.424 5.111-2.126a.5.5 0 01.613.097c.552.6 1.429 1.198 1.871 1.359.555.203.772.414.946.583.138.134.237.231.591.36.706.258.666 1.663.666 1.677-.036.705.13 1.615.291 2.495.109.599.212 1.164.257 1.674.022.253.054.318.071.334.041.033.237.04.302.042.315.013.669-.039 1.048-.093.36-.053.732-.105 1.093-.105zM16 10h.01H16z'
        ></path>
        <path
          fill='#010101'
          d='M19.5 31a.502.502 0 01-.499-.53c.002-.041.249-4.093.249-5.345 0-.719-.063-1.768-.124-2.783C19.064 21.313 19 20.25 19 19.5c0-1.43.256-2.113.286-2.186a.5.5 0 01.692-.26c.201.103 4.934 2.534 6.347 3.636.868.677 1.617.993 2.277 1.271a9.21 9.21 0 011.021.479c.853.487 2.088 1.105 2.101 1.112a.5.5 0 01-.01.899c-.023.011-2.356 1.119-3.561 1.927-.763.512-1.809.963-2.821 1.399-.726.312-1.411.607-1.968.912-1.339.73-3.564 2.212-3.587 2.227A.498.498 0 0119.5 31zm.589-12.761A8.107 8.107 0 0020 19.5c0 .719.063 1.768.124 2.783.062 1.029.126 2.093.126 2.842 0 .898-.118 3.111-.192 4.412.786-.508 1.966-1.255 2.828-1.726.598-.326 1.304-.63 2.051-.952.97-.418 1.973-.85 2.659-1.311.784-.525 1.972-1.148 2.788-1.558a40.783 40.783 0 01-1.257-.681c-.28-.16-.584-.287-.914-.426-.682-.288-1.53-.646-2.503-1.403-1.063-.828-4.303-2.551-5.621-3.241z'
        ></path>
      </svg>
    ),
    link: "https://studio.youtube.com",
  },
  {
    option: "YouTube Kids",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='128'
        height='128'
        baseProfile='basic'
        viewBox='0 0 64 64'
      >
        <ellipse cx='32' cy='61' opacity='0.3' rx='24' ry='3'></ellipse>
        <path
          fill='#fd3c4f'
          d='M58 41.664a8.785 8.785 0 01-6.911 8.575C46.941 51.154 40.74 52 32 52s-14.941-.846-19.089-1.76A8.786 8.786 0 016 41.664v-17.87a8.764 8.764 0 016.307-8.422C16.448 14.166 22.825 13 32 13s15.552 1.166 19.693 2.372A8.762 8.762 0 0158 23.794v17.87z'
        ></path>
        <path
          fill='#fff'
          d='M25 40.265V23.739c0-1.598 1.781-2.55 3.11-1.664l12.394 8.271a2 2 0 01-.001 3.328l-12.394 8.255C26.78 42.815 25 41.862 25 40.265z'
        ></path>
        <path
          d='M53 34v7.665c0 1.786-1.229 3.304-2.988 3.692C46.611 46.106 40.726 47 32 47a4.995 4.995 0 00-4.99 4.901c1.564.063 3.222.099 4.99.099 8.74 0 14.941-.846 19.089-1.76A8.786 8.786 0 0058 41.664V29a5 5 0 00-5 5z'
          opacity='0.15'
        ></path>
        <path
          fill='#fff'
          d='M32 18a4.994 4.994 0 004.988-4.878A99.976 99.976 0 0032 13c-9.175 0-15.552 1.166-19.693 2.372A8.762 8.762 0 006 23.794V38a5 5 0 005-5v-9.207a3.784 3.784 0 012.704-3.621C17.108 19.181 23.046 18 32 18z'
          opacity='0.3'
        ></path>
        <path
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='3'
          d='M9.5 29v-5.207c0-2.331 1.557-4.413 3.786-5.062'
        ></path>
      </svg>
    ),
    link: "https://www.youtube.com/kids/",
  },
];

export const settingsSection: ReadonlyArray<IStaticSidebarOptions> = [
  {
    option: "Settings",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    link: "/account",
  },
  {
    option: "Report history",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5'
        />
      </svg>
    ),
    link: "reporthistory",
  },
  {
    option: "Help",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
        />
      </svg>
    ),
    link: "",
  },
  {
    option: "Send feedback",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
        />
      </svg>
    ),
    link: "",
  },
];