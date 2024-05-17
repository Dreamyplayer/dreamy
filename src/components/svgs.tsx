import { cn } from "@/utils/cn";

export type IconType = {
  type: 'light' | 'dark' | 'system' | 'github' | 'youtube' | 'instagram' | 'twitter' | 'discord';
  className: string;
  data: string;
};

const IconsData: IconType[] = [
  {
    type: 'light',
    className: 'fill-yellow-400',
    data: 'M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z',
  },
  {
    type: 'system',
    className: 'fill-blue-500',
    data: 'M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z',
  },
  {
    type: 'dark',
    className: 'fill-[#808080]',
    data: 'M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z',
  },
  {
    type: 'github',
    className: 'fill-[#2b3137] dark:fill-white',
    data: 'M6.68952 15.5234C6.68952 15.6016 6.59677 15.6641 6.47984 15.6641C6.34677 15.6758 6.25403 15.6133 6.25403 15.5234C6.25403 15.4453 6.34677 15.3828 6.46371 15.3828C6.58468 15.3711 6.68952 15.4336 6.68952 15.5234ZM5.43548 15.3477C5.40726 15.4258 5.4879 15.5156 5.60887 15.5391C5.71371 15.5781 5.83468 15.5391 5.85887 15.4609C5.88306 15.3828 5.80645 15.293 5.68548 15.2578C5.58064 15.2305 5.46371 15.2695 5.43548 15.3477ZM7.21774 15.2813C7.10081 15.3086 7.02016 15.3828 7.03226 15.4727C7.04435 15.5508 7.14919 15.6016 7.27016 15.5742C7.3871 15.5469 7.46774 15.4727 7.45564 15.3945C7.44355 15.3203 7.33468 15.2695 7.21774 15.2813ZM9.87097 0.3125C4.27823 0.3125 0 4.42578 0 9.84375C0 14.1758 2.81452 17.8828 6.83468 19.1875C7.35081 19.2773 7.53226 18.9688 7.53226 18.7148C7.53226 18.4727 7.52016 17.1367 7.52016 16.3164C7.52016 16.3164 4.69758 16.9023 4.10484 15.1523C4.10484 15.1523 3.64516 14.0156 2.98387 13.7227C2.98387 13.7227 2.06048 13.1094 3.04839 13.1211C3.04839 13.1211 4.05242 13.1992 4.60484 14.1289C5.4879 15.6367 6.96774 15.2031 7.54435 14.9453C7.6371 14.3203 7.89919 13.8867 8.18952 13.6289C5.93548 13.3867 3.66129 13.0703 3.66129 9.3125C3.66129 8.23828 3.96774 7.69922 4.6129 7.01172C4.50806 6.75781 4.16532 5.71094 4.71774 4.35937C5.56048 4.10547 7.5 5.41406 7.5 5.41406C8.30645 5.19531 9.17339 5.08203 10.0323 5.08203C10.8911 5.08203 11.7581 5.19531 12.5645 5.41406C12.5645 5.41406 14.504 4.10156 15.3468 4.35937C15.8992 5.71484 15.5565 6.75781 15.4516 7.01172C16.0968 7.70313 16.4919 8.24219 16.4919 9.3125C16.4919 13.082 14.1169 13.3828 11.8629 13.6289C12.2339 13.9375 12.5484 14.5234 12.5484 15.4414C12.5484 16.7578 12.5363 18.3867 12.5363 18.707C12.5363 18.9609 12.7218 19.2695 13.2339 19.1797C17.2661 17.8828 20 14.1758 20 9.84375C20 4.42578 15.4637 0.3125 9.87097 0.3125ZM3.91935 13.7852C3.86694 13.8242 3.87903 13.9141 3.94758 13.9883C4.0121 14.0508 4.10484 14.0781 4.15726 14.0273C4.20968 13.9883 4.19758 13.8984 4.12903 13.8242C4.06452 13.7617 3.97177 13.7344 3.91935 13.7852ZM3.48387 13.4687C3.45565 13.5195 3.49597 13.582 3.57661 13.6211C3.64113 13.6602 3.72177 13.6484 3.75 13.5938C3.77823 13.543 3.7379 13.4805 3.65726 13.4414C3.57661 13.418 3.5121 13.4297 3.48387 13.4687ZM4.79032 14.8594C4.72581 14.9102 4.75 15.0273 4.84274 15.1016C4.93548 15.1914 5.05242 15.2031 5.10484 15.1406C5.15726 15.0898 5.13306 14.9727 5.05242 14.8984C4.96371 14.8086 4.84274 14.7969 4.79032 14.8594ZM4.33065 14.2852C4.26613 14.3242 4.26613 14.4258 4.33065 14.5156C4.39516 14.6055 4.50403 14.6445 4.55645 14.6055C4.62097 14.5547 4.62097 14.4531 4.55645 14.3633C4.5 14.2734 4.39516 14.2344 4.33065 14.2852Z'
  },
  {
    type: 'twitter',
    className: 'fill-black dark:fill-white',
    data: 'M15.2031 1.875H17.9609L11.9375 8.75781L19.0234 18.125H13.4766L9.12891 12.4453L4.16016 18.125H1.39844L7.83984 10.7617L1.04688 1.875H6.73437L10.6602 7.06641L15.2031 1.875ZM14.2344 16.4766H15.7617L5.90234 3.4375H4.26172L14.2344 16.4766Z'
  },
  {
    type: 'youtube',
    className: 'fill-[#FF0000]',
    data: 'M19.087 4.84766C18.8683 3.92187 18.2259 3.19531 17.4099 2.94922C15.9308 2.5 10.0002 2.5 10.0002 2.5C10.0002 2.5 4.06966 2.5 2.59049 2.94922C1.77452 3.19531 1.13216 3.92187 0.913411 4.84766C0.517578 6.52344 0.517578 10.0156 0.517578 10.0156C0.517578 10.0156 0.517578 13.5078 0.913411 15.1836C1.13216 16.1094 1.77452 16.8047 2.59049 17.0508C4.06966 17.5 10.0002 17.5 10.0002 17.5C10.0002 17.5 15.9308 17.5 17.4099 17.0508C18.2259 16.8047 18.8683 16.1055 19.087 15.1836C19.4829 13.5078 19.4829 10.0156 19.4829 10.0156C19.4829 10.0156 19.4829 6.52344 19.087 4.84766ZM8.06272 13.1875V6.84375L13.0176 10.0156L8.06272 13.1875Z'
  },
  {
    type: 'instagram',
    className: 'fill-black dark:fill-white',
    data: 'M16.4943 1.51792C16.9477 1.97114 17.3015 2.51404 17.533 3.11186C17.7999 3.82111 17.9423 4.57113 17.954 5.32886C18.01 6.28586 18.01 6.59586 18.01 9.03886C18.01 11.4819 17.997 11.7869 17.954 12.7489C17.939 13.4969 17.798 14.2349 17.535 14.9349C17.3031 15.5326 16.9493 16.0755 16.4959 16.5288C16.0426 16.9822 15.4997 17.336 14.902 17.5679C14.2022 17.83 13.4631 17.9717 12.716 17.9869C11.761 18.0419 11.448 18.0419 9.00595 18.0419C6.56395 18.0419 6.25895 18.0289 5.29595 17.9869C4.54732 17.9622 3.80839 17.8101 3.11095 17.5369C2.51302 17.3054 1.96993 16.9518 1.51639 16.4986C1.06285 16.0454 0.708831 15.5026 0.476953 14.9049C0.213953 14.2039 0.0729532 13.4659 0.0579531 12.7179C0.00195312 11.7609 0.00195312 11.4499 0.00195312 9.00786C0.00195312 6.56486 0.0149531 6.25986 0.0579531 5.29786C0.0725677 4.5507 0.214258 3.81147 0.476953 3.11186C0.708182 2.51388 1.06186 1.97085 1.51529 1.51759C1.96872 1.06433 2.51189 0.710861 3.10995 0.479859C3.80871 0.216461 4.54734 0.0744162 5.29395 0.0598593C6.24895 0.00585938 6.56195 0.00585938 9.00395 0.00585938C11.446 0.00585938 11.751 0.0178592 12.714 0.0598593C13.4611 0.0752006 14.2003 0.217216 14.9 0.479859C15.4979 0.71113 16.0409 1.06469 16.4943 1.51792ZM16.004 14.3319C16.2033 13.7911 16.3085 13.2202 16.315 12.6439V12.6449H16.326C16.369 11.6889 16.369 11.4269 16.369 8.99086C16.369 6.55386 16.358 6.28686 16.315 5.33586C16.3056 4.76602 16.2005 4.20181 16.004 3.66686C15.8537 3.27793 15.6238 2.92472 15.3289 2.62989C15.0341 2.33506 14.6809 2.10513 14.292 1.95486C13.7573 1.75593 13.1924 1.65072 12.622 1.64386C11.655 1.58886 11.405 1.58886 8.96795 1.58886C6.53095 1.58886 6.26395 1.60086 5.31295 1.64386C4.74298 1.65182 4.17854 1.757 3.64395 1.95486C2.85495 2.25686 2.22995 2.87786 1.92495 3.66686C1.72561 4.20728 1.62042 4.77788 1.61395 5.35386C1.56095 6.32285 1.56095 6.57186 1.56095 9.00879V9.00886C1.56095 11.4449 1.57095 11.7129 1.61395 12.6629C1.62326 13.2327 1.7284 13.7969 1.92495 14.3319C2.07579 14.7215 2.30673 15.0751 2.60284 15.3698C2.89895 15.6646 3.25364 15.8938 3.64395 16.0429C4.17828 16.2417 4.74288 16.3469 5.31295 16.3539C6.28095 16.4089 6.52995 16.4089 8.96795 16.4089C11.404 16.4089 11.672 16.3979 12.622 16.3539C13.1923 16.3465 13.7572 16.2413 14.292 16.0429C14.6809 15.8929 15.0342 15.6632 15.329 15.3685C15.6239 15.0739 15.8538 14.7207 16.004 14.3319ZM13.8055 5.28491C14.4009 5.28491 14.8835 4.80227 14.8835 4.20691C14.8835 3.61154 14.4009 3.12891 13.8055 3.12891C13.2102 3.12891 12.7275 3.61154 12.7275 4.20691C12.7275 4.80227 13.2102 5.28491 13.8055 5.28491ZM8.999 4.37695C7.77264 4.37695 6.59651 4.86412 5.72934 5.73129C4.86217 6.59846 4.375 7.77459 4.375 9.00095C4.375 10.2273 4.86217 11.4034 5.72934 12.2706C6.59651 13.1378 7.77264 13.625 8.999 13.625C10.2254 13.625 11.4015 13.1378 12.2687 12.2706C13.1358 11.4034 13.623 10.2273 13.623 9.00095C13.623 7.77459 13.1358 6.59846 12.2687 5.73129C11.4015 4.86412 10.2254 4.37695 8.999 4.37695ZM8.999 12.004C8.20229 12.004 7.43821 11.6875 6.87485 11.1241C6.31149 10.5607 5.995 9.79666 5.995 8.99995C5.995 8.20324 6.31149 7.43916 6.87485 6.8758C7.43821 6.31245 8.20229 5.99595 8.999 5.99595C9.79571 5.99595 10.5598 6.31245 11.1231 6.8758C11.6865 7.43916 12.003 8.20324 12.003 8.99995C12.003 9.79666 11.6865 10.5607 11.1231 11.1241C10.5598 11.6875 9.79571 12.004 8.999 12.004Z'
  },
  {
    type: 'discord',
    className: 'fill-[#5865F2]',
    data: 'M16.3947 2.72576C16.3893 2.71314 16.3804 2.70341 16.3697 2.69842C15.1789 2.01553 13.9223 1.5284 12.6313 1.2492C12.6197 1.24654 12.6077 1.24851 12.597 1.25482C12.5864 1.26112 12.5776 1.27146 12.5719 1.28436C12.4006 1.67275 12.2452 2.0717 12.1061 2.47967C10.7138 2.21556 9.29751 2.21556 7.90515 2.47967C7.76553 2.07069 7.60797 1.67164 7.43317 1.28436C7.42714 1.27184 7.41828 1.26183 7.40772 1.25558C7.39715 1.24932 7.38535 1.2471 7.37378 1.2492C6.08053 1.52714 4.82174 2.01431 3.62914 2.69842C3.61868 2.70396 3.60992 2.71354 3.60414 2.72576C1.22233 7.17498 0.569048 11.5109 0.887873 15.7961C0.888776 15.8069 0.891465 15.8173 0.89577 15.8267C0.900075 15.8361 0.905902 15.8443 0.912879 15.8508C2.30028 17.1332 3.85186 18.112 5.50146 18.7453C5.51332 18.7499 5.52602 18.7497 5.5378 18.7448C5.54957 18.7399 5.55982 18.7305 5.5671 18.7179C5.92104 18.1158 6.23468 17.4782 6.50482 16.8117C6.50842 16.8025 6.51046 16.7925 6.51082 16.7823C6.51119 16.7721 6.50986 16.7619 6.50692 16.7524C6.50399 16.7429 6.49951 16.7342 6.49377 16.7269C6.48803 16.7196 6.48115 16.7139 6.47357 16.7101C5.97799 16.4728 5.49825 16.1868 5.03885 15.8547C5.03073 15.8485 5.02393 15.8399 5.01901 15.8297C5.01409 15.8195 5.01121 15.808 5.0106 15.7961C5.00998 15.7843 5.01166 15.7724 5.01549 15.7615C5.01932 15.7506 5.02519 15.741 5.0326 15.7336C5.1295 15.6437 5.2264 15.55 5.31704 15.4562C5.32504 15.4475 5.33487 15.4417 5.34538 15.4396C5.35589 15.4376 5.36666 15.4392 5.37643 15.4445C8.38339 17.1594 11.6404 17.1594 14.613 15.4445C14.6225 15.4387 14.6331 15.4364 14.6436 15.4378C14.6541 15.4391 14.6641 15.4442 14.6724 15.4523C14.763 15.5461 14.8599 15.6437 14.9568 15.7336C14.9642 15.741 14.9701 15.7506 14.9739 15.7615C14.9778 15.7724 14.9794 15.7843 14.9788 15.7961C14.9782 15.808 14.9753 15.8195 14.9704 15.8297C14.9655 15.8399 14.9587 15.8485 14.9506 15.8547C14.4924 16.1885 14.0124 16.4734 13.5159 16.7062C13.5083 16.71 13.5014 16.7157 13.4956 16.723C13.4899 16.7303 13.4854 16.739 13.4825 16.7485C13.4796 16.758 13.4782 16.7682 13.4786 16.7784C13.479 16.7886 13.481 16.7986 13.4846 16.8078C13.7595 17.471 14.0729 18.1081 14.4223 18.714C14.4296 18.7266 14.4398 18.736 14.4516 18.7409C14.4634 18.7458 14.4761 18.746 14.488 18.7414C16.1423 18.1109 17.6984 17.132 19.089 15.8469C19.0962 15.8406 19.1021 15.8324 19.1064 15.823C19.1107 15.8135 19.1133 15.803 19.114 15.7922C19.4954 10.8429 18.4701 6.54217 16.3947 2.72576ZM6.95493 13.1867C6.04847 13.1867 5.30454 12.1476 5.30454 10.8742C5.30454 9.60076 6.03596 8.55779 6.95493 8.55779C7.88327 8.55779 8.62095 9.60467 8.60532 10.8703C8.60532 12.1476 7.8739 13.1867 6.95493 13.1867ZM13.0626 13.1867C12.1562 13.1867 11.4122 12.1476 11.4122 10.8742C11.4122 9.60076 12.1405 8.55779 13.0626 8.55779C13.991 8.55779 14.7286 9.60467 14.713 10.8703C14.713 12.1476 13.9878 13.1867 13.0626 13.1867Z" fill="#5865F2'
  }
];

export const SVGIcons = ({ type, className }: { type: IconType['type']; className?: string }) => {
  return (
    <div>
      {IconsData.map((mode, i) => (
        <div key={i}>
          {mode.type === type && (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className={cn(`${mode.className} h-4 w-4 cursor-pointer`, className)}>
              <path fillRule='evenodd' d={mode.data} clipRule='evenodd' />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
