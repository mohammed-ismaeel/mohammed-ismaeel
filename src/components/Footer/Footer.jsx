const Footer = () => {
  return (
    <footer className=" w-4/5  h-14 flex max-md:flex-col max-md:h-auto max-md:gap-2 max-md:py-5 mx-auto my-0 justify-between items-center border-t border-solid border-gray-400">
      <p className="text-blacky dark:text-white text-sm font-medium">
        @ 2024. All Rights Reserved
      </p>
      <p className="text-blacky dark:text-white text-sm font-medium text-center">
        Designed & Developed by
        <span className="text-blue font-bold"> MOHMAMMED ISMAEEL</span>
      </p>
      <ul className="social flex gap-2 list-none">
        <li className=" hover:scale-125">
          <a
            className="text-blue text-2xl dark:text-white"
            href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="https://t.me/Moh_Ismaeel"
            target="_blank"
            className="text-blue text-2xl dark:text-white"
          >
            <i class="fa-brands fa-telegram"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="www.linkedin.com"
            target="_blank"
            className="text-blue text-2xl dark:text-white"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="www.linkedin.com"
            target="_blank"
            className="text-blue text-2xl dark:text-white"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li className=" hover:scale-125">
          <a
            href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
            target="_blank"
            className="text-blue text-2xl dark:text-white"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
