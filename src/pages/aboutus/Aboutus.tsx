import { FC } from "react";
import "./aboutus.css";
import { useTranslation } from "react-i18next";

export const Aboutus: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" overflow-hidden px-6 pt-24 mx-auto background-radial-gradient">
        <section className="mb-32 text-gray-800 background-radial-gradient">
          <div className="px-6 py-12 md:px-12 text-center lg:text-left">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="mt-12 lg:mt-0" data-aos="fade-right">
                  <h1
                    className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                    style={{ color: "hsl(218, 81%, 95%)" }}
                  >
                    {t("aboutus.header")} <br />
                    <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    {t("aboutus.header2")}
                    </span>
                  </h1>
                  <p
                    className="text-lg"
                    style={{ color: "hsl(218, 81%, 95%)" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima officia consequatur adipisci tenetur repudiandae
                    rerum quos.
                  </p>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div
                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                    style={{ paddingTop: "56.25%" }} data-aos="fade-left"
                  >
                    <iframe
                      className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/7ZB3rz1LdFM"
                      allowFullScreen
                      data-gtm-yt-inspected-2340190_699="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-24 px-6 mx-auto" data-aos="zoom-in">
        <section className="mb-32 text-gray-800">
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6">{t("aboutus.card")}</h2>
                  <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    soluta corporis voluptate ab error quam dolores doloremque,
                    quae consectetur.
                  </p>
                  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      {t("aboutus.cardicon")}
                    </p>
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      {t("aboutus.cardicon2")}
                    </p>
                    <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      {t("aboutus.cardicon3")}
                    </p>
                  </div>
                  <p className="text-gray-500 mb-0">
                    In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                    pulvinar. Sed semper ligula sed lorem tincidunt dignissim.
                    Nam sed cursus lectus. Proin non rutrum magna. Proin
                    gravida, justo et imperdiet tristique, turpis nisi viverra
                    est, nec posuere ex arcu sit amet erat. Sed a dictum sem.
                    Duis pretium condimentum nulla, ut aliquet erat auctor sed.
                    Aenean facilisis neque id ligula maximus scelerisque. Nunc
                    sed velit rhoncus, interdum dolor at, lacinia lacus. Proin
                    eleifend viverra posuere. Ut commodo risus lacus, ac
                    scelerisque quam aliquam dictum. Etiam dignissim pulvinar
                    eros eget auctor. Quisque congue turpis quis libero
                    ullamcorper imperdiet. Vivamus a orci maximus, dignissim
                    ligula a, congue dui. Morbi et lectus sit amet neque luctus
                    viverra.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://hyperpc.ru/images/company/about-us/wallpaper/hyperpc-wallpaper-1080x1920-mobile.jpg"
                  className=" w-full rounded-lg shadow-lg"
                  alt="err"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr />
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <section className="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                'url("https://hyperpc.ru/images/company/about-us-hpc-banner.jpg")',
              height: 500,
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                  <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                  {t("aboutus.group")} <br />
                    <span>{t("aboutus.group2")} </span>
                    <br />
                    <span> {t("aboutus.group3")}</span>
                  </h2>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima officia consequatur adipisci tenetur repudiandae
                    rerum quos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-24 px-6 mx-auto">
        <hr />
        <section className="mb-32 text-gray-800">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">
              {t("aboutus.fqa")}
              </h2>
              <p className="text-gray-500 mb-12">
              {t("aboutus.fqasub")}
              </p>
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea13"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {t("aboutus.button")}
                </button>
              </form>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="font-bold mb-4">
              {t("aboutus.fqaqu")}
              </p>
              <p className="text-gray-500 mb-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>
              <p className="font-bold mb-4">
              {t("aboutus.fqaqu2")}
              </p>
              <p className="text-gray-500 mb-12">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>
              <p className="font-bold mb-4">{t("aboutus.fqaqu3")}</p>
              <p className="text-gray-500 mb-12">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>
              <p className="font-bold mb-4">
              {t("aboutus.fqaqu4")}
              </p>
              <p className="text-gray-500 mb-12">
                Laudantium perferendis, est alias iure ut veniam suscipit
                dolorem fugit. Et ipsam corporis earum ea ut quae cum non iusto
                blanditiis ipsum dolor eius reiciendis, velit adipisci quas.
              </p>
            </div>
          </div>
          <hr />
        </section>
      </div>
    </div>
  );
};
