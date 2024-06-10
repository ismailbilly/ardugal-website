import React from 'react'
import maintenance from "../assets/maintenance.svg";
import electrical from "../assets/electrical.svg";
import construction from "../assets/construction.svg";
import mechanical from "../assets/mechanical.svg";
const Services = () => {
  return (
    <div className="container mt-[100px] bg-[#F2F6F9]">
      <div className="sm:w-[80%] sm:mx-auto w-full px-7 pb-20 pt-6">
        <h2 className="text-3xl text-center my-6 sm:my-16 font-bold text-primary">
          OUR SERVICES SVGOMG
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-[#005189] text-white group border-2 border-black py-6 hover:bg-secondary hover:text-white transition duration-300 delay-100 rounded-lg">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="w-10  group-hover:fill-white transition duration-300 delay-100"
              >
                <path d="M21.57 6.63H21a4.92 4.92 0 0 0-.37-.89l.38-.38a.93.93 0 0 0 0-1.29l-.6-.6a.93.93 0 0 0-1.29 0l-.38.38a4.92 4.92 0 0 0-.89-.37V3A.92.92 0 0 0 17 2h-.84a.92.92 0 0 0-.92.91v.53a5.65 5.65 0 0 0-.88.37L14 3.47a.94.94 0 0 0-.65-.26.94.94 0 0 0-.65.26l-.6.6a.91.91 0 0 0 0 1.29l.38.38a4.3 4.3 0 0 0-.37.89h-.54a.92.92 0 0 0-.91.92v.84a.91.91 0 0 0 .91.91h.54a4.08 4.08 0 0 0 .37.89l-.38.38a.92.92 0 0 0 0 1.3l.59.59a.91.91 0 0 0 .65.27.91.91 0 0 0 .65-.27l.38-.38a4.22 4.22 0 0 0 .88.37V13a.92.92 0 0 0 .92.91H17a.92.92 0 0 0 .92-.91v-.54a4.3 4.3 0 0 0 .89-.37l.38.38a.92.92 0 0 0 1.29 0l.6-.59a.9.9 0 0 0 .26-.65.92.92 0 0 0-.26-.65l-.38-.38a5.38 5.38 0 0 0 .3-.9h.53a.91.91 0 0 0 .91-.91v-.84a.92.92 0 0 0-.87-.92Zm-.09 1.67h-.83a.49.49 0 0 0-.49.41 3.72 3.72 0 0 1-.54 1.29.5.5 0 0 0 .06.63l.6.6-.48.48-.59-.6a.5.5 0 0 0-.63-.06 3.63 3.63 0 0 1-1.29.53.5.5 0 0 0-.4.49v.84h-.68v-.84a.5.5 0 0 0-.39-.49 3.61 3.61 0 0 1-1.3-.53.5.5 0 0 0-.63.06l-.59.6-.48-.48.6-.6a.49.49 0 0 0 .06-.62 3.63 3.63 0 0 1-.48-1.3.51.51 0 0 0-.49-.41h-.84v-.67h.84a.51.51 0 0 0 .49-.4 3.63 3.63 0 0 1 .53-1.29.5.5 0 0 0-.06-.63l-.6-.59.48-.48.59.6a.53.53 0 0 0 .64.06 3.72 3.72 0 0 1 1.28-.54.49.49 0 0 0 .4-.49V3h.68v.83a.49.49 0 0 0 .4.49 3.85 3.85 0 0 1 1.29.54.5.5 0 0 0 .63-.06l.59-.6.48.48-.6.59a.5.5 0 0 0-.06.63 3.85 3.85 0 0 1 .54 1.29.49.49 0 0 0 .49.4h.83Z" />
                <path d="M18.93 6.93a2.67 2.67 0 0 0-1.43-1.37 2.5 2.5 0 0 0-2 0 2.63 2.63 0 0 0-1.33 1.34.63.63 0 0 0 0 .09A2.59 2.59 0 0 0 14 8a2.62 2.62 0 0 0 .18 1 2.59 2.59 0 0 0 5-1A2.55 2.55 0 0 0 19 7Zm-2.38 2.63a1.59 1.59 0 0 1-1.48-1A1.62 1.62 0 0 1 15 8a1.69 1.69 0 0 1 .09-.54v-.1a1.65 1.65 0 0 1 .91-.87 1.62 1.62 0 0 1 .58-.11 1.69 1.69 0 0 1 .63.13 1.61 1.61 0 0 1 .81.77.66.66 0 0 1 0 .11 1.62 1.62 0 0 1 .11.58 1.59 1.59 0 0 1-1.58 1.59ZM9.19 12.7A2.18 2.18 0 0 0 8 11.58a2 2 0 0 0-1.63 0 2.16 2.16 0 0 0-1.13 1.17 2.23 2.23 0 0 0-.14.77 2.29 2.29 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2.07 2.07 0 0 0-.15-.77s-.01-.04-.01-.05Zm-1.95 2a1.13 1.13 0 0 1-1-.71 1.16 1.16 0 0 1-.07-.42 1.05 1.05 0 0 1 .09-.44 1.13 1.13 0 0 1 1-.68 1.33 1.33 0 0 1 .45.09 1.21 1.21 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.15 1.11Z" />
                <path d="m10.81 15.5-.23-.24a3.76 3.76 0 0 0 .23-.55h.33a.82.82 0 0 0 .82-.83v-.65a.81.81 0 0 0-.82-.82h-.33a4 4 0 0 0-.23-.57l.23-.23a.81.81 0 0 0 .25-.58.79.79 0 0 0-.25-.58l-.46-.45a.82.82 0 0 0-1.16 0l-.19.22a3 3 0 0 0-.61-.22v-.35a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82V10a3 3 0 0 0-.56.23L5.29 10a.84.84 0 0 0-1.16 0l-.46.47a.75.75 0 0 0-.24.58.8.8 0 0 0 .24.58l.23.23a3.57 3.57 0 0 0-.23.57h-.33a.81.81 0 0 0-.82.82v.65a.82.82 0 0 0 .82.83h.33a4.41 4.41 0 0 0 .23.56l-.23.23a.82.82 0 0 0 0 1.16l.46.47a.84.84 0 0 0 1.16 0l.24-.24a3 3 0 0 0 .56.23v.34a.82.82 0 0 0 .82.82h.66a.82.82 0 0 0 .82-.82v-.34a3.88 3.88 0 0 0 .61-.25l.24.24a.82.82 0 0 0 1.16 0l.46-.47a.82.82 0 0 0-.05-1.16Zm-.88-1.39a2.52 2.52 0 0 1-.4 1 .5.5 0 0 0 .07.63l.38.38-.21.22-.39-.39a.5.5 0 0 0-.63-.06 2.8 2.8 0 0 1-1 .4.5.5 0 0 0-.4.49v.54h-.3v-.54a.5.5 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.5.5 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.5.5 0 0 0 .2-.67 2.62 2.62 0 0 1-.4-1 .5.5 0 0 0-.49-.4h-.59v-.3h.54a.51.51 0 0 0 .49-.37A2.62 2.62 0 0 1 5 12a.5.5 0 0 0-.07-.63L4.5 11l.21-.22.39.39a.5.5 0 0 0 .63.06 2.72 2.72 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.51h.3v.54a.5.5 0 0 0 .4.49 2.72 2.72 0 0 1 1 .4.5.5 0 0 0 .63-.06l.39-.39.15.19-.38.38a.5.5 0 0 0-.07.63 2.52 2.52 0 0 1 .4 1 .51.51 0 0 0 .49.41H11v.3h-.54a.5.5 0 0 0-.53.39ZM17.57 18.29a2.22 2.22 0 0 0-1.18-1.13 2.07 2.07 0 0 0-1.62 0 2.22 2.22 0 0 0-1.13 1.18 2 2 0 0 0-.14.77 2.07 2.07 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2 2 0 0 0-.15-.77s-.03-.04-.03-.05Zm-2 2a1.14 1.14 0 0 1-1-.71 1.23 1.23 0 0 1-.07-.42 1.12 1.12 0 0 1 .09-.45 1.18 1.18 0 0 1 .62-.6 1.14 1.14 0 0 1 .41-.07 1.12 1.12 0 0 1 .45.09 1.17 1.17 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.13 1.11Z" />
                <path d="M19.52 18h-.33a3.88 3.88 0 0 0-.23-.56l.23-.24a.82.82 0 0 0 0-1.16l-.46-.46a.82.82 0 0 0-1.16 0l-.24.23a3.88 3.88 0 0 0-.56-.23v-.33a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82v.33a3.88 3.88 0 0 0-.56.23l-.24-.23a.82.82 0 0 0-1.16 0L12 16a.83.83 0 0 0 0 1.16l.23.24a3.88 3.88 0 0 0-.23.56h-.33a.82.82 0 0 0-.82.82v.66a.82.82 0 0 0 .82.82H12a3.88 3.88 0 0 0 .23.56l-.24.24a.83.83 0 0 0 0 1.16l.46.46a.8.8 0 0 0 1.16 0l.24-.23a3.88 3.88 0 0 0 .56.23V23a.83.83 0 0 0 .82.83H16a.83.83 0 0 0 .82-.83v-.33a3.88 3.88 0 0 0 .56-.23l.24.23a.81.81 0 0 0 1.16 0l.46-.46a.78.78 0 0 0 .24-.58.75.75 0 0 0-.24-.58l-.24-.2a3.88 3.88 0 0 0 .23-.56h.33a.82.82 0 0 0 .82-.82v-.66a.82.82 0 0 0-.86-.81Zm-.18 1.3h-.54a.51.51 0 0 0-.49.4 2.55 2.55 0 0 1-.4 1 .51.51 0 0 0 .07.64l.38.38-.21.21-.39-.38a.49.49 0 0 0-.63-.06 2.72 2.72 0 0 1-1 .4.49.49 0 0 0-.4.49v.54h-.3v-.54a.49.49 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.49.49 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.51.51 0 0 0 .07-.64 2.55 2.55 0 0 1-.4-1 .51.51 0 0 0-.49-.4h-.46V19h.54a.51.51 0 0 0 .49-.4 2.62 2.62 0 0 1 .4-1 .5.5 0 0 0-.07-.63l-.38-.39.21-.21.39.38a.5.5 0 0 0 .63.07 2.55 2.55 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.54h.3V16a.5.5 0 0 0 .4.49 2.55 2.55 0 0 1 1 .4.5.5 0 0 0 .63-.07l.39-.38.21.21L18 17a.5.5 0 0 0-.07.63 2.55 2.55 0 0 1 .4 1 .51.51 0 0 0 .49.4h.54Z" />
              </svg>
            </div>
            <div className="text-center sm:px-2">
              <h3 className="font-bold text-xl my-4">Mechanical</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, repellat! Lorem ipsum dolor consectetur adipisicing
                elit{" "}
              </p>
            </div>
          </div>
          <div className="bg-secondary text-white group border-2 border-black py-6 hover:bg-[#005189] hover:text-white transition duration-300 delay-100 rounded-lg">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="w-10  group-hover:fill-white transition duration-300 delay-100"
              >
                <path d="M21.57 6.63H21a4.92 4.92 0 0 0-.37-.89l.38-.38a.93.93 0 0 0 0-1.29l-.6-.6a.93.93 0 0 0-1.29 0l-.38.38a4.92 4.92 0 0 0-.89-.37V3A.92.92 0 0 0 17 2h-.84a.92.92 0 0 0-.92.91v.53a5.65 5.65 0 0 0-.88.37L14 3.47a.94.94 0 0 0-.65-.26.94.94 0 0 0-.65.26l-.6.6a.91.91 0 0 0 0 1.29l.38.38a4.3 4.3 0 0 0-.37.89h-.54a.92.92 0 0 0-.91.92v.84a.91.91 0 0 0 .91.91h.54a4.08 4.08 0 0 0 .37.89l-.38.38a.92.92 0 0 0 0 1.3l.59.59a.91.91 0 0 0 .65.27.91.91 0 0 0 .65-.27l.38-.38a4.22 4.22 0 0 0 .88.37V13a.92.92 0 0 0 .92.91H17a.92.92 0 0 0 .92-.91v-.54a4.3 4.3 0 0 0 .89-.37l.38.38a.92.92 0 0 0 1.29 0l.6-.59a.9.9 0 0 0 .26-.65.92.92 0 0 0-.26-.65l-.38-.38a5.38 5.38 0 0 0 .3-.9h.53a.91.91 0 0 0 .91-.91v-.84a.92.92 0 0 0-.87-.92Zm-.09 1.67h-.83a.49.49 0 0 0-.49.41 3.72 3.72 0 0 1-.54 1.29.5.5 0 0 0 .06.63l.6.6-.48.48-.59-.6a.5.5 0 0 0-.63-.06 3.63 3.63 0 0 1-1.29.53.5.5 0 0 0-.4.49v.84h-.68v-.84a.5.5 0 0 0-.39-.49 3.61 3.61 0 0 1-1.3-.53.5.5 0 0 0-.63.06l-.59.6-.48-.48.6-.6a.49.49 0 0 0 .06-.62 3.63 3.63 0 0 1-.48-1.3.51.51 0 0 0-.49-.41h-.84v-.67h.84a.51.51 0 0 0 .49-.4 3.63 3.63 0 0 1 .53-1.29.5.5 0 0 0-.06-.63l-.6-.59.48-.48.59.6a.53.53 0 0 0 .64.06 3.72 3.72 0 0 1 1.28-.54.49.49 0 0 0 .4-.49V3h.68v.83a.49.49 0 0 0 .4.49 3.85 3.85 0 0 1 1.29.54.5.5 0 0 0 .63-.06l.59-.6.48.48-.6.59a.5.5 0 0 0-.06.63 3.85 3.85 0 0 1 .54 1.29.49.49 0 0 0 .49.4h.83Z" />
                <path d="M18.93 6.93a2.67 2.67 0 0 0-1.43-1.37 2.5 2.5 0 0 0-2 0 2.63 2.63 0 0 0-1.33 1.34.63.63 0 0 0 0 .09A2.59 2.59 0 0 0 14 8a2.62 2.62 0 0 0 .18 1 2.59 2.59 0 0 0 5-1A2.55 2.55 0 0 0 19 7Zm-2.38 2.63a1.59 1.59 0 0 1-1.48-1A1.62 1.62 0 0 1 15 8a1.69 1.69 0 0 1 .09-.54v-.1a1.65 1.65 0 0 1 .91-.87 1.62 1.62 0 0 1 .58-.11 1.69 1.69 0 0 1 .63.13 1.61 1.61 0 0 1 .81.77.66.66 0 0 1 0 .11 1.62 1.62 0 0 1 .11.58 1.59 1.59 0 0 1-1.58 1.59ZM9.19 12.7A2.18 2.18 0 0 0 8 11.58a2 2 0 0 0-1.63 0 2.16 2.16 0 0 0-1.13 1.17 2.23 2.23 0 0 0-.14.77 2.29 2.29 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2.07 2.07 0 0 0-.15-.77s-.01-.04-.01-.05Zm-1.95 2a1.13 1.13 0 0 1-1-.71 1.16 1.16 0 0 1-.07-.42 1.05 1.05 0 0 1 .09-.44 1.13 1.13 0 0 1 1-.68 1.33 1.33 0 0 1 .45.09 1.21 1.21 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.15 1.11Z" />
                <path d="m10.81 15.5-.23-.24a3.76 3.76 0 0 0 .23-.55h.33a.82.82 0 0 0 .82-.83v-.65a.81.81 0 0 0-.82-.82h-.33a4 4 0 0 0-.23-.57l.23-.23a.81.81 0 0 0 .25-.58.79.79 0 0 0-.25-.58l-.46-.45a.82.82 0 0 0-1.16 0l-.19.22a3 3 0 0 0-.61-.22v-.35a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82V10a3 3 0 0 0-.56.23L5.29 10a.84.84 0 0 0-1.16 0l-.46.47a.75.75 0 0 0-.24.58.8.8 0 0 0 .24.58l.23.23a3.57 3.57 0 0 0-.23.57h-.33a.81.81 0 0 0-.82.82v.65a.82.82 0 0 0 .82.83h.33a4.41 4.41 0 0 0 .23.56l-.23.23a.82.82 0 0 0 0 1.16l.46.47a.84.84 0 0 0 1.16 0l.24-.24a3 3 0 0 0 .56.23v.34a.82.82 0 0 0 .82.82h.66a.82.82 0 0 0 .82-.82v-.34a3.88 3.88 0 0 0 .61-.25l.24.24a.82.82 0 0 0 1.16 0l.46-.47a.82.82 0 0 0-.05-1.16Zm-.88-1.39a2.52 2.52 0 0 1-.4 1 .5.5 0 0 0 .07.63l.38.38-.21.22-.39-.39a.5.5 0 0 0-.63-.06 2.8 2.8 0 0 1-1 .4.5.5 0 0 0-.4.49v.54h-.3v-.54a.5.5 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.5.5 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.5.5 0 0 0 .2-.67 2.62 2.62 0 0 1-.4-1 .5.5 0 0 0-.49-.4h-.59v-.3h.54a.51.51 0 0 0 .49-.37A2.62 2.62 0 0 1 5 12a.5.5 0 0 0-.07-.63L4.5 11l.21-.22.39.39a.5.5 0 0 0 .63.06 2.72 2.72 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.51h.3v.54a.5.5 0 0 0 .4.49 2.72 2.72 0 0 1 1 .4.5.5 0 0 0 .63-.06l.39-.39.15.19-.38.38a.5.5 0 0 0-.07.63 2.52 2.52 0 0 1 .4 1 .51.51 0 0 0 .49.41H11v.3h-.54a.5.5 0 0 0-.53.39ZM17.57 18.29a2.22 2.22 0 0 0-1.18-1.13 2.07 2.07 0 0 0-1.62 0 2.22 2.22 0 0 0-1.13 1.18 2 2 0 0 0-.14.77 2.07 2.07 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2 2 0 0 0-.15-.77s-.03-.04-.03-.05Zm-2 2a1.14 1.14 0 0 1-1-.71 1.23 1.23 0 0 1-.07-.42 1.12 1.12 0 0 1 .09-.45 1.18 1.18 0 0 1 .62-.6 1.14 1.14 0 0 1 .41-.07 1.12 1.12 0 0 1 .45.09 1.17 1.17 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.13 1.11Z" />
                <path d="M19.52 18h-.33a3.88 3.88 0 0 0-.23-.56l.23-.24a.82.82 0 0 0 0-1.16l-.46-.46a.82.82 0 0 0-1.16 0l-.24.23a3.88 3.88 0 0 0-.56-.23v-.33a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82v.33a3.88 3.88 0 0 0-.56.23l-.24-.23a.82.82 0 0 0-1.16 0L12 16a.83.83 0 0 0 0 1.16l.23.24a3.88 3.88 0 0 0-.23.56h-.33a.82.82 0 0 0-.82.82v.66a.82.82 0 0 0 .82.82H12a3.88 3.88 0 0 0 .23.56l-.24.24a.83.83 0 0 0 0 1.16l.46.46a.8.8 0 0 0 1.16 0l.24-.23a3.88 3.88 0 0 0 .56.23V23a.83.83 0 0 0 .82.83H16a.83.83 0 0 0 .82-.83v-.33a3.88 3.88 0 0 0 .56-.23l.24.23a.81.81 0 0 0 1.16 0l.46-.46a.78.78 0 0 0 .24-.58.75.75 0 0 0-.24-.58l-.24-.2a3.88 3.88 0 0 0 .23-.56h.33a.82.82 0 0 0 .82-.82v-.66a.82.82 0 0 0-.86-.81Zm-.18 1.3h-.54a.51.51 0 0 0-.49.4 2.55 2.55 0 0 1-.4 1 .51.51 0 0 0 .07.64l.38.38-.21.21-.39-.38a.49.49 0 0 0-.63-.06 2.72 2.72 0 0 1-1 .4.49.49 0 0 0-.4.49v.54h-.3v-.54a.49.49 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.49.49 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.51.51 0 0 0 .07-.64 2.55 2.55 0 0 1-.4-1 .51.51 0 0 0-.49-.4h-.46V19h.54a.51.51 0 0 0 .49-.4 2.62 2.62 0 0 1 .4-1 .5.5 0 0 0-.07-.63l-.38-.39.21-.21.39.38a.5.5 0 0 0 .63.07 2.55 2.55 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.54h.3V16a.5.5 0 0 0 .4.49 2.55 2.55 0 0 1 1 .4.5.5 0 0 0 .63-.07l.39-.38.21.21L18 17a.5.5 0 0 0-.07.63 2.55 2.55 0 0 1 .4 1 .51.51 0 0 0 .49.4h.54Z" />
              </svg>
            </div>
            <div className="text-center sm:px-2">
              <h3 className="font-bold text-xl my-4">Mechanical</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, repellat! Lorem ipsum dolor consectetur adipisicing
                elit{" "}
              </p>
            </div>
          </div>
          <div className="bg-[#05AABE] text-white group border-2 border-black py-6 hover:bg-secondary hover:text-white transition duration-300 delay-100 rounded-lg">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="w-10  group-hover:fill-white transition duration-300 delay-100"
              >
                <path d="M21.57 6.63H21a4.92 4.92 0 0 0-.37-.89l.38-.38a.93.93 0 0 0 0-1.29l-.6-.6a.93.93 0 0 0-1.29 0l-.38.38a4.92 4.92 0 0 0-.89-.37V3A.92.92 0 0 0 17 2h-.84a.92.92 0 0 0-.92.91v.53a5.65 5.65 0 0 0-.88.37L14 3.47a.94.94 0 0 0-.65-.26.94.94 0 0 0-.65.26l-.6.6a.91.91 0 0 0 0 1.29l.38.38a4.3 4.3 0 0 0-.37.89h-.54a.92.92 0 0 0-.91.92v.84a.91.91 0 0 0 .91.91h.54a4.08 4.08 0 0 0 .37.89l-.38.38a.92.92 0 0 0 0 1.3l.59.59a.91.91 0 0 0 .65.27.91.91 0 0 0 .65-.27l.38-.38a4.22 4.22 0 0 0 .88.37V13a.92.92 0 0 0 .92.91H17a.92.92 0 0 0 .92-.91v-.54a4.3 4.3 0 0 0 .89-.37l.38.38a.92.92 0 0 0 1.29 0l.6-.59a.9.9 0 0 0 .26-.65.92.92 0 0 0-.26-.65l-.38-.38a5.38 5.38 0 0 0 .3-.9h.53a.91.91 0 0 0 .91-.91v-.84a.92.92 0 0 0-.87-.92Zm-.09 1.67h-.83a.49.49 0 0 0-.49.41 3.72 3.72 0 0 1-.54 1.29.5.5 0 0 0 .06.63l.6.6-.48.48-.59-.6a.5.5 0 0 0-.63-.06 3.63 3.63 0 0 1-1.29.53.5.5 0 0 0-.4.49v.84h-.68v-.84a.5.5 0 0 0-.39-.49 3.61 3.61 0 0 1-1.3-.53.5.5 0 0 0-.63.06l-.59.6-.48-.48.6-.6a.49.49 0 0 0 .06-.62 3.63 3.63 0 0 1-.48-1.3.51.51 0 0 0-.49-.41h-.84v-.67h.84a.51.51 0 0 0 .49-.4 3.63 3.63 0 0 1 .53-1.29.5.5 0 0 0-.06-.63l-.6-.59.48-.48.59.6a.53.53 0 0 0 .64.06 3.72 3.72 0 0 1 1.28-.54.49.49 0 0 0 .4-.49V3h.68v.83a.49.49 0 0 0 .4.49 3.85 3.85 0 0 1 1.29.54.5.5 0 0 0 .63-.06l.59-.6.48.48-.6.59a.5.5 0 0 0-.06.63 3.85 3.85 0 0 1 .54 1.29.49.49 0 0 0 .49.4h.83Z" />
                <path d="M18.93 6.93a2.67 2.67 0 0 0-1.43-1.37 2.5 2.5 0 0 0-2 0 2.63 2.63 0 0 0-1.33 1.34.63.63 0 0 0 0 .09A2.59 2.59 0 0 0 14 8a2.62 2.62 0 0 0 .18 1 2.59 2.59 0 0 0 5-1A2.55 2.55 0 0 0 19 7Zm-2.38 2.63a1.59 1.59 0 0 1-1.48-1A1.62 1.62 0 0 1 15 8a1.69 1.69 0 0 1 .09-.54v-.1a1.65 1.65 0 0 1 .91-.87 1.62 1.62 0 0 1 .58-.11 1.69 1.69 0 0 1 .63.13 1.61 1.61 0 0 1 .81.77.66.66 0 0 1 0 .11 1.62 1.62 0 0 1 .11.58 1.59 1.59 0 0 1-1.58 1.59ZM9.19 12.7A2.18 2.18 0 0 0 8 11.58a2 2 0 0 0-1.63 0 2.16 2.16 0 0 0-1.13 1.17 2.23 2.23 0 0 0-.14.77 2.29 2.29 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2.07 2.07 0 0 0-.15-.77s-.01-.04-.01-.05Zm-1.95 2a1.13 1.13 0 0 1-1-.71 1.16 1.16 0 0 1-.07-.42 1.05 1.05 0 0 1 .09-.44 1.13 1.13 0 0 1 1-.68 1.33 1.33 0 0 1 .45.09 1.21 1.21 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.15 1.11Z" />
                <path d="m10.81 15.5-.23-.24a3.76 3.76 0 0 0 .23-.55h.33a.82.82 0 0 0 .82-.83v-.65a.81.81 0 0 0-.82-.82h-.33a4 4 0 0 0-.23-.57l.23-.23a.81.81 0 0 0 .25-.58.79.79 0 0 0-.25-.58l-.46-.45a.82.82 0 0 0-1.16 0l-.19.22a3 3 0 0 0-.61-.22v-.35a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82V10a3 3 0 0 0-.56.23L5.29 10a.84.84 0 0 0-1.16 0l-.46.47a.75.75 0 0 0-.24.58.8.8 0 0 0 .24.58l.23.23a3.57 3.57 0 0 0-.23.57h-.33a.81.81 0 0 0-.82.82v.65a.82.82 0 0 0 .82.83h.33a4.41 4.41 0 0 0 .23.56l-.23.23a.82.82 0 0 0 0 1.16l.46.47a.84.84 0 0 0 1.16 0l.24-.24a3 3 0 0 0 .56.23v.34a.82.82 0 0 0 .82.82h.66a.82.82 0 0 0 .82-.82v-.34a3.88 3.88 0 0 0 .61-.25l.24.24a.82.82 0 0 0 1.16 0l.46-.47a.82.82 0 0 0-.05-1.16Zm-.88-1.39a2.52 2.52 0 0 1-.4 1 .5.5 0 0 0 .07.63l.38.38-.21.22-.39-.39a.5.5 0 0 0-.63-.06 2.8 2.8 0 0 1-1 .4.5.5 0 0 0-.4.49v.54h-.3v-.54a.5.5 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.5.5 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.5.5 0 0 0 .2-.67 2.62 2.62 0 0 1-.4-1 .5.5 0 0 0-.49-.4h-.59v-.3h.54a.51.51 0 0 0 .49-.37A2.62 2.62 0 0 1 5 12a.5.5 0 0 0-.07-.63L4.5 11l.21-.22.39.39a.5.5 0 0 0 .63.06 2.72 2.72 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.51h.3v.54a.5.5 0 0 0 .4.49 2.72 2.72 0 0 1 1 .4.5.5 0 0 0 .63-.06l.39-.39.15.19-.38.38a.5.5 0 0 0-.07.63 2.52 2.52 0 0 1 .4 1 .51.51 0 0 0 .49.41H11v.3h-.54a.5.5 0 0 0-.53.39ZM17.57 18.29a2.22 2.22 0 0 0-1.18-1.13 2.07 2.07 0 0 0-1.62 0 2.22 2.22 0 0 0-1.13 1.18 2 2 0 0 0-.14.77 2.07 2.07 0 0 0 .14.78 2.13 2.13 0 0 0 4.11-.78 2 2 0 0 0-.15-.77s-.03-.04-.03-.05Zm-2 2a1.14 1.14 0 0 1-1-.71 1.23 1.23 0 0 1-.07-.42 1.12 1.12 0 0 1 .09-.45 1.18 1.18 0 0 1 .62-.6 1.14 1.14 0 0 1 .41-.07 1.12 1.12 0 0 1 .45.09 1.17 1.17 0 0 1 .6.62 1.15 1.15 0 0 1 .08.41 1.14 1.14 0 0 1-1.13 1.11Z" />
                <path d="M19.52 18h-.33a3.88 3.88 0 0 0-.23-.56l.23-.24a.82.82 0 0 0 0-1.16l-.46-.46a.82.82 0 0 0-1.16 0l-.24.23a3.88 3.88 0 0 0-.56-.23v-.33a.82.82 0 0 0-.82-.82h-.66a.82.82 0 0 0-.82.82v.33a3.88 3.88 0 0 0-.56.23l-.24-.23a.82.82 0 0 0-1.16 0L12 16a.83.83 0 0 0 0 1.16l.23.24a3.88 3.88 0 0 0-.23.56h-.33a.82.82 0 0 0-.82.82v.66a.82.82 0 0 0 .82.82H12a3.88 3.88 0 0 0 .23.56l-.24.24a.83.83 0 0 0 0 1.16l.46.46a.8.8 0 0 0 1.16 0l.24-.23a3.88 3.88 0 0 0 .56.23V23a.83.83 0 0 0 .82.83H16a.83.83 0 0 0 .82-.83v-.33a3.88 3.88 0 0 0 .56-.23l.24.23a.81.81 0 0 0 1.16 0l.46-.46a.78.78 0 0 0 .24-.58.75.75 0 0 0-.24-.58l-.24-.2a3.88 3.88 0 0 0 .23-.56h.33a.82.82 0 0 0 .82-.82v-.66a.82.82 0 0 0-.86-.81Zm-.18 1.3h-.54a.51.51 0 0 0-.49.4 2.55 2.55 0 0 1-.4 1 .51.51 0 0 0 .07.64l.38.38-.21.21-.39-.38a.49.49 0 0 0-.63-.06 2.72 2.72 0 0 1-1 .4.49.49 0 0 0-.4.49v.54h-.3v-.54a.49.49 0 0 0-.4-.49 2.72 2.72 0 0 1-1-.4.49.49 0 0 0-.63.06l-.39.38-.21-.21.38-.38a.51.51 0 0 0 .07-.64 2.55 2.55 0 0 1-.4-1 .51.51 0 0 0-.49-.4h-.46V19h.54a.51.51 0 0 0 .49-.4 2.62 2.62 0 0 1 .4-1 .5.5 0 0 0-.07-.63l-.38-.39.21-.21.39.38a.5.5 0 0 0 .63.07 2.55 2.55 0 0 1 1-.4.5.5 0 0 0 .4-.49v-.54h.3V16a.5.5 0 0 0 .4.49 2.55 2.55 0 0 1 1 .4.5.5 0 0 0 .63-.07l.39-.38.21.21L18 17a.5.5 0 0 0-.07.63 2.55 2.55 0 0 1 .4 1 .51.51 0 0 0 .49.4h.54Z" />
              </svg>
            </div>
            <div className="text-center sm:px-2">
              <h3 className="font-bold text-xl my-4">Mechanical</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, repellat! Lorem ipsum dolor consectetur adipisicing
                elit{" "}
              </p>
            </div>
          </div>
          <div className="border-2 border-black">
            <img src={maintenance} alt="" className="w-10 " />
          </div>
          <div className="border-2 border-black">
            <img src={electrical} alt="" className="w-10 " />
          </div>
          <div className="border-2 border-black">
            <img src={construction} alt="" className="w-10 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services