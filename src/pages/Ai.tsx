import { useRef, useState } from "react";
import { requestToGroqAi } from "./utils/groq";
import { Light as SyntaxHighLight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaArrowAltCircleLeft } from "react-icons/fa";

declare global {
  interface Window {
    vapiSDK: any;
  }
}



function Ai() {

  const [data, setData] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (inputRef.current) {
      const content = inputRef.current.value;
      const ai = await requestToGroqAi(content);
      setData(ai);
    }
  };


  // // type vapiSdk end

  // const useVapi = () => {
  //   const assistant = "0df3cc54-4c60-4390-8974-01341d0596b3";
  //   const apiKey = "5c81e316-e8f8-492e-ac7f-227d0e186d4f";

  //   const assistantOverrides = {
  //     firstMessage:
  //       "Hallo Saya Eva, saya dibuat oleh ser arroofi untuk tim Ka Ka N nya..... saya akan jelaskan sedikit mengenai website ini.... website ini dibuat untuk mendukung kegiatan Ka Ka N di nagari simabur kecamatan pariangan kabupatenn tanah datar, setiap hari website ini akan meng upload dokumentasi kegiatan yang dilakukan oleh tim ka ka n simabur. website ini juga sebagai tanda profesionalitas tim kami, untuk menjalankan program kerja di nagari simabur, jika anda memiliki pertanyaan saya akan mencoba  menjawabnya",
  //   };

  //   const [vapiInstance, setVapiInstance] = useState<any>(null);
  //   const iconRef = useRef<HTMLDivElement>(null);

  //   const updateButtonState = (state: string) => {
  //     if (iconRef.current) {
  //       iconRef.current.className = state;
  //     }
  //   };

  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src =
  //       "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  //     script.defer = true;
  //     script.async = true;

  //     script.onload = () => {
  //       const vapi = window.vapiSDK.run({
  //         apiKey: apiKey,
  //         assistant: assistant,
  //         assistantOverrides: assistantOverrides,
  //       });

  //       if (vapi) {
  //         setVapiInstance(vapi);

  //         vapi.on("speech-start", () => {
  //           console.log("Speech has started");
  //         });

  //         vapi.on("speech-end", () => {
  //           console.log("Speech has ended");
  //         });

  //         vapi.on("call-start", () => {
  //           console.log("Call has started");
  //           updateButtonState("active");
  //         });

  //         vapi.on("call-end", () => {
  //           console.log("Call has stopped");
  //           updateButtonState("idle");
  //         });

  //         vapi.on("volume-level", (volume: any) => {
  //           console.log(`Assistant volume level: ${volume}`);
  //         });

  //         vapi.on("message", (message: any) => {
  //           console.log(message);
  //         });

  //         vapi.on("error", (e: any) => {
  //           console.error(e);
  //           updateButtonState("idle");
  //         });
  //       }
  //     };

  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  //   return { vapiInstance, iconRef };
  // };

  return (
    <div className="text-white flex flex-col justify-center items-center text-center " >

      <div className="w-full text-white ">
        <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]  ">
          <a href="/" className="w-[25%] flex justify-start items-start text-center pl-5  ">
            <p className="hover:text-black cursor-pointer text-[20px] ">
              <FaArrowAltCircleLeft />
            </p>
          </a>
          <h1 className=" w-[50%]  font-serif font-semibold ">Kecerdasan Buatan</h1>
        </nav>
      </div>


      {/* content */}
      <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-[95%] mt-24 m-auto  ">
        <form action="" className="flex flex-col justify-center items-center gap-4 py-4 w-full ">
          <input
            placeholder="Masukkan permintaan anda disini....."
            type="text"
            ref={inputRef}
            className="border-[2px] w-[80%] bg-black text-orange-600 rounded-[5px] border-orange-700 p-2 "
            id="content"
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="p-2 font-semibold w-[50%] border-[2px] hover:bg-black border-orange-500 bg-orange-700 rounded-[5px] "
          >
            Kirim
          </button>
        </form>
        <div className=" max-w-xl w-full mx-auto">
          {data ? (
            <SyntaxHighLight
              language="swift"
              style={darcula}
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighLight>
          ) : null}
        </div>
      </main>


    </div>
  )
}

export default Ai
