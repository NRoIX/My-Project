import { FC } from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import * as Aos from "aos";
import { UseTranslationOptions, useTranslation } from "react-i18next";

export const Home: FC = () => {
  const {t} = useTranslation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-16">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover "
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            'url("https://hyperpc.ru/images/company/about-us/hyperpc-wallpaper.jpg")',
          height: 500,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                {t("home.header")} <br />
                <span>{t("home.header2")}</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container my-24 px-6 mx-auto">
          <h2 className="mb-2 mt-0 text-3xl font-bold leading-tight">{t("home.service")}</h2>
          <hr />
          <div className="flex flex-wrap mb-12" data-aos="flip-down">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://hyperpc.ru/images/company/tour/watercooling_assembly/gallery_1/hyperpc_assembly_custom_new_photo_19.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 " >
              <h3 className="text-2xl font-bold mb-4">{t("home.servicetype")} </h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium"></div>
              <p className="text-gray-500 mb-6">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                nulla saepe rerum aspernatur odio amet perferendis tempora
                mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                dolore placeat rem dignissimos?
              </p>
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-row-reverse mb-12" data-aos="flip-down">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://hyperpc.ru/images/company/upgrade-center/update/main/hpc-upgrade-center-fix-issue_webp.jpg?1"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4">
              {t("home.servicetype2")}
              </h3>
              <div className="text-blue-600 text-sm mb-4 flex items-center font-medium"></div>
              <p className="text-gray-500">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                porta dui, sit amet rutrum enim massa in ante. Curabitur in
                justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam
                mattis faucibus imperdiet. Proin tempor lorem at neque tempus
                aliquet. Phasellus at ex volutpat, varius arcu id, aliquam
                lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam
                luctus sagittis massa, sed iaculis est vehicula ut.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-12" data-aos="flip-down">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://hyperpc.ru/images/company/upgrade-center/update/main/we-can-more/hpc-upgrade-center-increase-performance_webp.jpg?1"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">
              {t("home.servicetype3")}
              </h3>
              <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium"></div>

              <p className="text-gray-500">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                euismod dignissim malesuada, lacus lorem commodo leo, tristique
                blandit ante mi id metus. Integer et vehicula leo, vitae
                interdum lectus. Praesent nulla purus, commodo at euismod nec,
                blandit ultrices erat. Aliquam eros ipsum, interdum et mattis
                vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in
                feugiat ipsum condimentum ac. Maecenas sed blandit dolor.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="container my-24 px-6 mx-auto" data-aos="zoom-in-up">
        <section className="mb-32 text-gray-800">
          <h3 className="mb-2 mt-0 text-3xl font-bold leading-tight">{t("home.card")}</h3>
          <hr />
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={{ backgroundPosition: "50%" }}
              >
                <img
                  src="https://hyperpc.ru/images/company/about-us/wallpaper/hyperpc-wallpaper-1080x1920-mobile.jpg"
                  className="w-full"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  ></div>
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
              <div className="flex mb-12">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "hsl(204, 30%, 20%)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{t("home.cardicon")}</p>
                  <p className="text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil quisquam quibusdam modi sapiente magni molestias
                    pariatur facilis reprehenderit facere aliquam ex.
                  </p>
                </div>
              </div>
              <div className="flex mb-12">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "hsl(204, 30%, 20%)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{t("home.cardicon2")}</p>
                  <p className="text-gray-500">
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia
                    a omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>
              <div className="flex mb-12">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "hsl(204, 30%, 20%)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">{t("home.cardicon3")}</p>
                  <p className="text-gray-500">
                    Enim cupiditate, minus nulla dolor cumque iure eveniet
                    facere ullam beatae hic voluptatibus dolores exercitationem?
                    Facilis debitis aspernatur amet nisi iure eveniet facere?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>

      <div className="container my-24 px-6 mx-auto" data-aos="zoom-in">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12">{t("home.reviews")} </h2>
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Maria Smantha</h5>

              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul className="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star-half-alt"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 536 512"
                  >
                    <path
                      fill="currentColor"
                      d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Lisa Cudrow</h5>

              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">John Smith</h5>

              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="flex justify-center mb-0">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
      </div>

      <div className="container my-24 px-6 mx-auto  " data-aos="fade-up">
        <section className="mb-32 text-gray-800 ">
          <style dangerouslySetInnerHTML={{__html:"\n      .map-container-2 {\n        height: 500px;\n      }\n    ",}}/>
          <div className="block rounded-lg shadow-lg " data-aos="zoom-in-up">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="map-container-2 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.393584543498!2d49.85036431146669!3d40.40013087132311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d5a2c1005%3A0x5ede1cc1418ccc54!2sG%C9%99nclik%20Mall!5e0!3m2!1saz!2saz!4v1681931047404!5m2!1saz!2saz"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder={0}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap pt-12 lg:pt-0">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div
                          className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center"
                          style={{ backgroundColor: "hsl(204, 30%, 20%)" }}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="headset"
                            className="w-5 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">{t("home.mapicon")}</p>
                        <p className="text-gray-500">support@example.com</p>
                        <p className="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12" >
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div
                          className="p-4  rounded-md shadow-md w-14 h-14 flex items-center justify-center"
                          style={{ backgroundColor: "hsl(204, 30%, 20%)" }}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="dollar-sign"
                            className="w-3 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 288 512"
                          >
                            <path
                              fill="currentColor"
                              d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">{t("home.mapicon2")}</p>
                        <p className="text-gray-500">sales@example.com</p>
                        <p className="text-gray-500">+1 234-567-89</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
