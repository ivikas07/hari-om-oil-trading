import { getWhatsappURL } from "@/config/contact";

const WhatsAppButton = () => {
  const message = `Hello Hari Om Oil Trading,

I am interested in your lubricant and additive products. Please share the available options, current pricing, minimum order quantity, and delivery details.

Thank you. I look forward to hearing from you.`;

  return (
    <a
      href={getWhatsappURL(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hari Om Oil Trading on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center overflow-visible rounded-full bg-[#22d768] shadow-[0_5px_14px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-200 sm:bottom-6 sm:right-6 sm:h-[52px] sm:w-[52px]"
    >
      <span
        aria-hidden="true"
        className="whatsapp-ring absolute -inset-1.5 -z-20 rounded-full border border-white/55"
      />
      <span
        aria-hidden="true"
        className="whatsapp-ring whatsapp-ring-delayed absolute -inset-1.5 -z-20 rounded-full border border-green-100/50"
      />
      <span
        aria-hidden="true"
        className="absolute -inset-2 -z-10 rounded-full bg-[#0e5c4f]/55 shadow-[0_0_18px_rgba(14,92,79,0.45)]"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="relative z-10 h-7 w-7 fill-white sm:h-8 sm:w-8"
      >
        <path d="M16.04 3.2A12.73 12.73 0 0 0 5.08 22.4L3.2 28.8l6.56-1.8a12.8 12.8 0 1 0 6.28-23.8Zm0 23.25a10.42 10.42 0 0 1-5.32-1.45l-.38-.23-3.9 1.07 1.04-3.8-.25-.39a10.46 10.46 0 1 1 8.81 4.8Zm5.73-7.83c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.53-1.56a9.48 9.48 0 0 1-1.75-2.17c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.32.31-.53.11-.21.06-.39-.02-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.28 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.79.67.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
