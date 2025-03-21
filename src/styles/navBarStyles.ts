export const navBarStyles = {
  container: "w-full border-t border-b border-black mt-4", // Línea arriba y abajo
  nav: "flex justify-center items-center gap-18 py-4",
  link: "relative text-gray-800 font-semibold transition-all hover:text-black hover:after:content-[''] hover:after:absolute hover:after:-bottom-2 hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-black",
  active: "after:content-blank after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-black", // Línea al estar activo
};
