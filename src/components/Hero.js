import React from "react";
import banner from "../assets/banner.png";
import pc from "../assets/pc.png";
import icon from "../assets/icon.png";
import cur from "../assets/cur.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import flag from "../assets/flag.png";
import alarm from "../assets/alarm.png";
import win from "../assets/win.PNG";
import flag2 from "../assets/flag2.png";
import winner from "../assets/winner.png";
import whatsapp from "../assets/whatsapp.png";
const Hero = () => {
  return (
    <div>
      <div class="relative h-64  overflow-hidden bg-indigo-500 ">
        <div class="absolute overflow-hidden top-0 right-0 block w-full h-full">
          <img
            alt="banner"
            class="object-fill h-[18rem] w-full "
            src={banner}
          />
        </div>
      </div>
      <div className="m-4 grid place-items-center gap-2 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 ">
        <div className="border border-gray-300 h-full">
          <div className="flex justify-between items-center relative">
            <div className=" p-2 mt-1">
              <img src={pc} alt="pc" width={150} height={120} />
            </div>
            <div className=" flex flex-col h-full p-2 ">
              <div className="flex justify-between">
                <span className="font-semibold uppercase ">You Pick</span>
                <span className="underline text-blue-400 text-xs">
                  {" "}
                  Play Now»
                </span>
              </div>
              <div className="">
                <span className="text-sm">
                  It’s easy! Pick from over 40 official lottery games you wish
                  to play. Then select your winning numbers.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex justify-between items-center relative">
            <div className=" p-2 mt-1">
              <img src={icon} alt="pc" width={150} height={120} />
            </div>
            <div className=" flex flex-col space-y-1  ">
              <div className="flex justify-between">
                <span className="font-semibold  uppercase">we buy</span>
                <span className="underline text-blue-400 text-xs">
                  {" "}
                  More Details»
                </span>
              </div>
              <div className="">
                <span className="text-sm">
                  Once you’ve picked your winning numbers we’ll purchase your
                  ticket on your behalf.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex justify-between items-center relative">
            <div className=" p-2 mt-1">
              <img src={cur} alt="pc" width={150} height={120} />
            </div>
            <div className=" flex flex-col space-y-2  ">
              <div className="flex justify-between">
                <span className="font-semibold  uppercase">you win!!!</span>
                <span className="underline text-xs text-blue-400">
                  {" "}
                  Withdraw My Winnings »
                </span>
              </div>
              <div className="">
                <span className="text-sm">
                  When you win, we’ll automatically credit your account the full
                  value of your winnings.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 ">
        <span className="font-bold">BIGGEST UPCOMING LOTTERY DRAW</span>
      </div>
      <div className="p-1 grid gap-2  sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="border grid  border-gray-300 h-full">
          <div className="flex justify-around items-center relative">
            <div className=" p-2 mt-1">
              <img src={l1} alt="pc" />
            </div>
            <div className=" flex flex-col space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className="bg-blue-500 p-4 flex justify-around rounded-b">
            <div className="bg-yellow-400 px-4 py-1 rounded">Play Now</div>
            <div className="text-white flex items-center space-x-2">
              {" "}
              <img className="object-contain" src={alarm} alt="flag" />
              <span> 1:22:01</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex justify-around items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className="bg-blue-500 p-4 flex justify-around rounded-b">
            <div className="bg-yellow-400 px-4 py-1 rounded">Play Now</div>
            <div className="text-white flex items-center space-x-2">
              {" "}
              <img className="object-contain" src={alarm} alt="flag" />
              <span> 1:22:01</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex justify-around items-center relative">
            <div className=" p-2 mt-1">
              <img src={l3} alt="pc" />
            </div>
            <div className=" flex flex-col space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className="bg-blue-500 p-4 flex justify-around rounded-b">
            <div className="bg-yellow-400 px-4 py-1 rounded">Play Now</div>
            <div className="text-white flex items-center space-x-2">
              {" "}
              <img className="object-contain" src={alarm} alt="flag" />
              <span> 1:22:01</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white  p-2 m-2 rounded-md flex justify-around rounded-b">
        <span>PLAY UPCOMING LOTTERIES ONLINE</span>
      </div>
      <div className="p-1 grid gap-2  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
        <div className="border border-gray-300 h-full w-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
        <div className="border border-gray-300 h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className=" p-2 mt-1">
              <img src={l2} alt="pc" />
            </div>
            <div className=" flex flex-col justify-center items-center space-y-2  ">
              <div className="flex space-x-4">
                <img width={30} src={flag} alt="flag" />
                <span className="font-semibold  uppercase">Mega Millions</span>
              </div>
              <div className="text-green-600 text-xl font-semibold">
                $94 000 000
              </div>
            </div>
          </div>
          <div className=" p-4 flex flex-col space-y-2 justify-center items-center rounded-b">
            <div className="text-blue-500 flex items-center space-x-2">
              {" "}
              <img
                className="object-contain bg-blue-500"
                src={alarm}
                alt="flag"
              />
              <span> 1:22:01</span>
            </div>
            <div className="bg-yellow-400 px-16 py-1 rounded">Play Now</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-2">
        <div>
          <div className="bg-red-500 mt-10 text-white  p-2 m-2 rounded-md flex justify-around rounded-b">
            <span>BIGGEST LOTTORY WINNERS</span>
          </div>
          <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border border-gray-200 m-2 justify-center items-center">
            <div className="border p-2 flex justify-center items-center">
              <img src={win} className="object-contain" alt="" />
            </div>
            <div>
              <div>
                <span className="font-bold">
                  Shaun Vincent a Lottery Winner
                </span>
              </div>
              <div>
                <span className="m-2 P-2 text-center">
                  Shaun Vincent, from Barnsley, celebrates his £1,158,038
                  National Lottery win after his cheque presentation at the
                  Cedar Court Hotel, Wakefield.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-red-500 mt-10 text-white  p-2 m-2 rounded-md flex justify-around rounded-b">
            <span>OUR LATEST WINNERS</span>
          </div>
          <div className="border m-2 border-gray-300 ">
            <div className=" flex flex-col justify-center items-center h-full p-2 ">
              <span className="font-semibold uppercase ">
                Total prizes paid out
              </span>
              <span className="font-bold text-xl uppercase text-green-700">
                US$ 107 233 768
              </span>
              <span className="font-semibold uppercase  ">
                <span className="font-bold text-xl">6 975 146</span>
                <span className="font-semibold mx-2">winning tickets</span>
              </span>
            </div>
          </div>
          <div className="m-2 grid gap-2  grid-cols-1">
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 h-full">
              <div className="flex  items-center ">
                <div className=" p-2 mt-1">
                  <img src={winner} alt="pc" width={80} height={120} />
                </div>
                <div className=" flex flex-col h-full p-2 ">
                  <div className="flex flex-col">
                    <span className=" uppercase ">20.11.2021</span>
                  </div>
                  <div className="flex space-x-4">
                    <img width={30} src={flag2} alt="flag" />
                    <span className="font-semibold">J.J won Р175</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 ">
                      in 7 ИЗ 49 draw #13476
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 mt-16">
        <div>
          <span className="text-black font-bold">
            FREQUENTLY ASKED QUESTION (F.A.Q.)
          </span>
        </div>
        <div className="flex border-b p-1 border-gray-400 justify-between items-center m-2">
          <span className="text-blue-500 font-bold ">
            Can I play the lottery online?
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="flex border-b p-1 border-gray-400 justify-between items-center m-2">
          <span className="text-blue-500 font-bold ">
            How will I get my wins?{" "}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="flex border-b p-1 border-gray-400 justify-between items-center m-2">
          <span className="text-blue-500 font-bold ">
            Is it safe to play lottery online?{" "}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="relative w-full h-[12rem] bg-[url('https://i.ibb.co/L1D7MYv/Untitled.png')] bg-cover bg-center flex justify-around items-center">
          <div className="flex mt-16 flex-col justify-start items-center">
            <div className="flex mt-36  items-center ">
              <div className=" p-2 mt-1">
                <img src={whatsapp} alt="pc" width={50} height={100} />
              </div>
              <div className=" flex flex-col h-full p-2 ">
                <div className="flex flex-col">
                  <span className=" uppercase ">Live chat by WhatsApp</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-600 ">Customer Service</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <span className="text-black font-bold">USEFUL LINKS</span>
              <div className="flex flex-col">
                <span className="  ">Lottery Results & Winners</span>
                <span className=" ">Lottery Promotions</span>
                <span className="  ">About Us</span>
                <span className=" ">Contact Us</span>
                <span className="  ">Terms & Conditions</span>
                <span className="  ">Security</span>
                <span className=" ">Privacy Policy</span>
                <span className="  ">Acceptable Use Policy</span>
                <span className="  ">Website Use Policy</span>
                <span className="text-black font-bold">Affiliate program</span>
              </div>
            </div>
          </div>
          <div className="mt-36 w-96">
            <span className="font-semibold uppercase mx-2 ">
              Total prizes paid out
            </span>
            <div className=" flex flex-col items-center h-full p-2 ">
              <span className=" text-sm ">
                The trade name SmartWinners and all content on this website is a
                copyright of SmartWinners Limited. All rights reserved. We are
                an independent lottery ticket purchasing service. We are not
                affiliated with nor are we endorsed by any State sanctioned
                lottery organization. We make no claims on our site to be such.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
