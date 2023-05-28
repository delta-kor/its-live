interface Props {
  uuid: string;
  color?: string;
  className?: string;
}

export default function Logo({ uuid, color, className }: Props) {
  if (uuid === '0356bfc3-7d40-4e44-8e52-29cc10930c45')
    return (
      <svg
        className={className}
        viewBox="0 0 38 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0402216 0.510266C0.0302218 0.515396 0.0171452 0.527853 0.0117608 0.537379C-0.00285423 0.562294 -0.00439265 15.4304 0.0102223 15.4597C0.0302218 15.5015 0.000222632 15.5 0.777895 15.5C1.54249 15.5 1.52634 15.5007 1.54403 15.4656C1.54787 15.4582 1.55249 12.607 1.5548 8.91817L1.55864 2.38472L2.2317 2.85882L2.90476 3.33293L2.90861 9.39301C2.91092 12.8114 2.91553 15.4582 2.91938 15.4656C2.93707 15.5007 2.92092 15.5 3.68551 15.5C4.46318 15.5 4.43318 15.5015 4.45318 15.4597C4.46011 15.445 4.46241 13.753 4.46241 7.99927C4.46241 1.57279 4.46088 0.554966 4.45164 0.537379C4.44549 0.526387 4.43165 0.51393 4.42011 0.508801C4.40549 0.502206 4.22319 0.500008 3.68551 0.500008C3.14783 0.500008 2.96553 0.502206 2.95091 0.508801C2.90784 0.527121 2.90861 0.518327 2.90861 1.02394C2.90861 1.28042 2.90553 1.48926 2.90245 1.48779C2.89861 1.48633 2.59246 1.27089 2.2217 1.00929C1.85017 0.746954 1.53634 0.525655 1.52326 0.516129L1.49865 0.500008H0.778664C0.195602 0.50074 0.0548366 0.502206 0.0402216 0.510266ZM7.84771 0.510266C7.83771 0.515396 7.82463 0.527853 7.81925 0.537379C7.80463 0.562294 7.8031 15.4304 7.81771 15.4597C7.83771 15.5015 7.80771 15.5 8.58538 15.5C9.34998 15.5 9.33383 15.5007 9.35152 15.4656C9.35536 15.4582 9.35998 12.6055 9.36229 8.91597L9.36613 2.37885L10.0023 2.82658L10.6384 3.27358V9.35711C10.6392 14.0572 10.6415 15.445 10.6484 15.4597C10.6684 15.5015 10.6384 15.5 11.4161 15.5C12.1938 15.5 12.1638 15.5015 12.1838 15.4597C12.1907 15.445 12.193 14.0564 12.193 9.34978L12.1938 3.25892L12.8176 2.81925C13.1606 2.57744 13.4445 2.37812 13.4483 2.37739C13.4514 2.37592 13.4545 5.31437 13.4545 8.90791C13.4545 13.9575 13.4568 15.445 13.4637 15.4597C13.4837 15.5015 13.4537 15.5 14.2314 15.5C15.0091 15.5 14.9791 15.5015 14.9991 15.4597C15.006 15.445 15.0083 13.753 15.0083 7.99927C15.0083 1.50611 15.0068 0.554966 14.9968 0.537379C14.9906 0.525655 14.976 0.513197 14.9644 0.508068C14.9483 0.502206 14.7545 0.500008 14.216 0.501472L13.4891 0.503672L12.4514 1.23572C11.8799 1.63875 11.4092 1.96776 11.4045 1.96776C11.3999 1.96776 10.9292 1.63875 10.3576 1.23572L9.31998 0.503672L8.59307 0.502206C7.99924 0.50074 7.86309 0.502206 7.84771 0.510266ZM19.032 0.510266C19.022 0.515396 19.009 0.527853 19.0036 0.537379C18.989 0.562294 18.9874 15.4304 19.002 15.4597C19.022 15.5015 18.992 15.5 19.7697 15.5C20.5474 15.5 20.5174 15.5015 20.5374 15.4597C20.5505 15.4318 20.5505 0.568156 20.5374 0.54031C20.5174 0.498542 20.5474 0.500008 19.7682 0.500008C19.1874 0.50074 19.0466 0.502206 19.032 0.510266ZM24.555 0.510266C24.545 0.515396 24.5319 0.527853 24.5265 0.537379C24.5104 0.564492 24.5111 7.31412 24.5265 7.34343C24.5327 7.35442 24.5465 7.36688 24.558 7.37201C24.5727 7.3786 24.755 7.3808 25.2926 7.3808H26.008V8.6192H25.2926C24.755 8.6192 24.5727 8.6214 24.558 8.62799C24.5465 8.63312 24.5327 8.64558 24.5265 8.65657C24.5173 8.67416 24.5157 9.14607 24.5157 12.0589C24.5157 14.6654 24.518 15.445 24.525 15.4597C24.545 15.5015 24.515 15.5 25.2926 15.5C26.0572 15.5 26.0411 15.5007 26.0588 15.4656C26.0626 15.4582 26.0672 13.978 26.0695 12.0933L26.0734 8.73424L26.6641 9.3256L27.2541 9.91695V12.6788C27.2541 14.8046 27.2564 15.445 27.2634 15.4597C27.2834 15.5015 27.2534 15.5 28.031 15.5C28.8087 15.5 28.7787 15.5015 28.7987 15.4597C28.8056 15.445 28.8079 14.6654 28.8079 12.0589C28.8079 9.14607 28.8064 8.67416 28.7972 8.65657C28.791 8.64558 28.7772 8.63312 28.7656 8.62799C28.751 8.6214 28.5702 8.6192 28.0387 8.6192H27.331V7.3808H28.0387C28.5702 7.3808 28.751 7.3786 28.7656 7.37201C28.7772 7.36688 28.791 7.35442 28.7972 7.34343C28.8133 7.31265 28.8133 0.568156 28.7972 0.537379C28.791 0.526387 28.7772 0.51393 28.7656 0.508801C28.751 0.502206 28.5687 0.500008 28.0303 0.500008C27.2664 0.500008 27.2826 0.499274 27.2649 0.534448C27.261 0.541776 27.2564 2.02565 27.2541 3.91549L27.2503 7.28261L26.6603 6.67807L26.0703 6.07279L26.0695 3.31608C26.0695 1.19468 26.0672 0.554966 26.0603 0.54031C26.0403 0.498542 26.0703 0.500008 25.2911 0.500008C24.7103 0.50074 24.5696 0.502206 24.555 0.510266ZM33.747 0.510266C33.737 0.515396 33.724 0.527853 33.7186 0.537379C33.7024 0.564492 33.7032 7.31412 33.7186 7.34343C33.7247 7.35442 33.7386 7.36688 33.7501 7.37201C33.7647 7.3786 33.9447 7.3808 34.4732 7.3808H35.177V8.6192H34.4732C33.9447 8.6192 33.7647 8.6214 33.7501 8.62799C33.7386 8.63312 33.7247 8.64558 33.7186 8.65657C33.7093 8.67416 33.7078 9.14607 33.7078 12.0589C33.7078 14.6654 33.7101 15.445 33.717 15.4597C33.737 15.5015 33.707 15.5 34.4847 15.5C35.2624 15.5 35.2324 15.5015 35.2524 15.4597C35.2593 15.445 35.2616 14.8039 35.2616 12.6751V9.90962L35.8524 9.31754L36.4423 8.72618L36.4462 12.0896C36.4485 13.9765 36.4531 15.4582 36.457 15.4656C36.4747 15.5007 36.4585 15.5 37.2231 15.5C38.0008 15.5 37.9708 15.5015 37.9908 15.4597C37.9977 15.445 38 14.6654 38 12.0589C38 9.14607 37.9985 8.67416 37.9892 8.65657C37.9831 8.64558 37.9692 8.63312 37.9577 8.62799C37.9431 8.6214 37.76 8.6192 37.2192 8.6192H36.5V7.3808H37.2192C37.76 7.3808 37.9431 7.3786 37.9577 7.37201C37.9692 7.36688 37.9831 7.35442 37.9892 7.34343C37.9985 7.32584 38 6.85393 38 3.9404C38 1.02687 37.9985 0.554966 37.9892 0.537379C37.9831 0.526387 37.9692 0.51393 37.9577 0.508801C37.9431 0.502206 37.7608 0.500008 37.2223 0.500008C36.4454 0.500008 36.4754 0.498542 36.4554 0.54031C36.4485 0.554966 36.4462 1.19395 36.4462 3.31241L36.4454 6.06546L35.8539 6.6722L35.2616 7.27895V3.91915C35.2616 1.32951 35.2593 0.554966 35.2524 0.54031C35.2324 0.498542 35.2624 0.500008 34.4832 0.500008C33.9024 0.50074 33.7617 0.502206 33.747 0.510266Z"
          fill={color}
        />
      </svg>
    );

  if (uuid === '3fe198ec-1e23-4078-b693-1bfa68e7de71')
    return (
      <svg
        className={className}
        viewBox="0 0 36 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.0536 8.2741C4.0536 8.2741 2.6271 9.49123 0.7713 9.05539V7.46329C0.86805 7.44023 2.646 7.04083 4.05585 8.27225L4.0536 8.2741ZM5.13675 8.27548C5.71005 7.59059 6.50475 6.27799 6.27345 4.44007H5.5206C5.5206 4.44007 5.9013 6.09673 4.6179 7.72526C2.74365 6.18021 0.8703 6.65618 0.7713 6.68293V4.44007H0V12.1086H0.7713V9.88464C0.87525 9.90355 2.98845 10.2568 4.5954 8.82202C4.6413 8.8686 5.8194 10.0894 5.5386 12.1086H6.3144C6.53355 9.63375 5.1822 8.31884 5.13675 8.27548Z"
          fill={color}
        />
        <path
          d="M36 13.2732V14.0341H16.3291V13.2732H21.8983V4.12091C20.8701 5.33112 18.9027 5.26609 18.9027 5.26609V4.38149C19.2456 4.39441 20.9083 4.29017 21.8983 2.87241C22.8883 1.45419 22.6723 0 22.6723 0H23.6754V13.2732H36Z"
          fill={color}
        />
        <path
          d="M13.3338 13.2729H8.69751e-08V14.034H13.3338V13.2729Z"
          fill={color}
        />
        <path
          d="M35.9469 6.43987V7.25621C35.9469 7.25621 35.1392 6.8854 34.2635 7.3669C33.4067 7.8378 33.2118 8.68873 33.1475 9.2122V12.2354H32.4144V6.32272H33.1475V7.36229C34.3116 5.95652 35.9469 6.43987 35.9469 6.43987Z"
          fill={color}
        />
        <path
          d="M8.16255 8.79112C8.35965 7.79583 9.21735 7.04728 10.2465 7.04728C11.2757 7.04728 12.1334 7.79583 12.3305 8.79112H8.16255ZM10.2465 6.27752C8.6589 6.27752 7.37145 7.59704 7.37145 9.22419C7.37145 10.8513 8.6589 12.1709 10.2465 12.1709C11.4444 12.1709 12.4709 11.42 12.9029 10.3523H12.0672C11.695 10.9837 11.0187 11.4057 10.2465 11.4057C9.1602 11.4057 8.2647 10.5714 8.136 9.494H13.109C13.1171 9.40499 13.1216 9.31505 13.1216 9.22419C13.1216 7.59704 11.8341 6.27752 10.2465 6.27752Z"
          fill={color}
        />
        <path
          d="M26.014 8.79112C26.2111 7.79583 27.0693 7.04728 28.098 7.04728C29.1271 7.04728 29.9853 7.79583 30.1824 8.79112H26.014ZM28.098 6.27752C26.5104 6.27752 25.2234 7.59704 25.2234 9.22419C25.2234 10.8513 26.5104 12.1709 28.098 12.1709C29.2959 12.1709 30.3224 11.42 30.7544 10.3523H29.9191C29.5465 10.9837 28.8706 11.4057 28.098 11.4057C27.0121 11.4057 26.1162 10.5714 25.9875 9.494H30.9605C30.9686 9.40499 30.9731 9.31505 30.9731 9.22419C30.9731 7.59704 29.686 6.27752 28.098 6.27752Z"
          fill={color}
        />
        <path
          d="M17.3705 11.3757C16.2117 11.3757 15.2726 10.4132 15.2726 9.22558C15.2726 8.03796 16.2117 7.07542 17.3705 7.07542C18.5288 7.07542 19.4683 8.03796 19.4683 9.22558C19.4683 10.4132 18.5288 11.3757 17.3705 11.3757ZM17.3705 6.30566C16.5398 6.30566 15.7923 6.67001 15.2726 7.25114V6.31949H14.5238V17.0002H15.2726V11.2005C15.7928 11.7811 16.5398 12.1455 17.3705 12.1455C18.9437 12.1455 20.2194 10.838 20.2194 9.22558C20.2194 7.61273 18.9437 6.30566 17.3705 6.30566Z"
          fill={color}
        />
      </svg>
    );

  if (uuid === '6d5c4508-41a2-4943-9c6a-f33c5a14b952')
    return (
      <svg
        className={className}
        viewBox="0 0 374 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M111.588 91.3421H103.872V32.9775H111.588V91.3421Z"
          fill={color}
        />
        <path
          d="M109.214 34.7201H106.246V5.54355H109.214V34.7201Z"
          fill={color}
        />
        <path
          d="M133.91 7.03213H81.5504V4.05492H133.91V7.03213Z"
          fill={color}
        />
        <path
          d="M162.415 91.9321L155.145 89.3375L183.659 8.93021L190.928 11.5248L162.415 91.9321Z"
          fill={color}
        />
        <path
          d="M193.126 40.2657L200.396 37.6711L190.33 9.28631L183.06 11.8809L193.126 40.2657Z"
          fill={color}
        />
        <path
          d="M183.659 8.93021L186.754 0.000183105L190.33 9.28631L187.447 11.572L183.659 8.93021Z"
          fill={color}
        />
        <path
          d="M216.255 89.4999L213.459 90.4976L195.086 38.6879L197.883 37.6902L216.255 89.4999Z"
          fill={color}
        />
        <path
          d="M267.723 51.1411L274.264 47.0351L246.49 2.50503L239.949 6.61104L267.723 51.1411Z"
          fill={color}
        />
        <path
          d="M274.264 92.9998H266.548V47.0363H274.264V92.9998Z"
          fill={color}
        />
        <path
          d="M283.063 36.3271L281.329 33.5925L301.278 4.19865L303.731 5.87412L283.063 36.3271Z"
          fill={color}
        />
        <path
          d="M330.148 47.0356H333.029C333.029 47.0356 332.469 8.14258 373.999 5.89447V3.24539C373.999 3.24539 332.33 2.01587 330.148 47.0356Z"
          fill={color}
        />
        <path
          d="M335.181 46.5732C335.181 46.5732 334.183 82.7855 373.999 84.9285V92.3822C373.999 92.3822 330.088 92.9612 327.84 46.5732H335.181Z"
          fill={color}
        />
        <path
          d="M8.52956 47.4746C8.52956 47.4746 7.4978 9.13774 49.497 7.03216V4.05496C49.497 4.05496 7.36646 3.50069 5.36861 47.4746H8.52956Z"
          fill={color}
        />
        <path
          d="M46.199 47.0356H38.707C38.707 47.0356 40.2054 83.1808 -0.000473022 86.0617V92.8263C-0.000473022 92.8263 43.8267 94.4397 46.199 47.0356Z"
          fill={color}
        />
      </svg>
    );

  if (uuid === 'b2a61d1a-2eb0-4147-ad0a-a62ce326e2e3')
    return (
      <svg
        className={className}
        viewBox="0 0 801 251"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M452.141 0L444.877 19.9522L394.199 29.8054L349.356 1.78291L333.669 26.8948L310.711 1.39861L290.217 19.8514L221.9 0.630003L217.798 15.2335L124.224 0.630003L121.414 18.5851L6.74103 0.630003L1.26001 35.5259L202.559 67.026L0 106.426L6.74733 141.121L106.471 121.748L110.484 141.127L195.263 123.569L198.413 138.689L284.925 120.614L288.302 137.504L370.832 121.011L386.759 138.695L411.19 116.695L443.043 128.288L450.836 106.867L505.647 141.102L518.404 120.683L591.031 141.121L594.597 128.426L675.647 141.121L678.457 123.166L793.117 141.121L798.586 106.193L600.393 75.1657L800.06 35.2802L793.13 0.630003L690.887 21.0295L686.621 0.598503L617.649 15.0067L614.669 0.630003L537.941 16.4998L535.2 2.39401L485.348 12.0835L452.141 0Z"
          fill={color}
        />
        <path
          d="M24.8599 167.889H6.74734V249.16H66.6543V231.69H24.8599V167.889Z"
          fill={color}
        />
        <path
          d="M97.1086 216.148H124.741V198.684H97.1086V185.378H141.946V167.883H78.996V249.154H143.13V231.69H97.1086V216.148Z"
          fill={color}
        />
        <path
          d="M357.388 216.148H385.02V198.684H357.388V185.378H402.225V167.883H339.269V249.154H403.41V231.69H357.388V216.148Z"
          fill={color}
        />
        <path
          d="M591.075 249.16H609.194V216.154H637.985V198.684H609.194V185.385H654.031V167.889H591.075V249.16Z"
          fill={color}
        />
        <path
          d="M665.529 167.915H683.648V249.154H665.529V167.915Z"
          fill={color}
        />
        <path
          d="M529.568 167.883L496.134 249.154H515.034L522.764 229.907H556.652L564.382 249.154H583.282L549.854 167.883H529.568ZM529.48 213.243L539.736 187.697L549.993 213.243H529.48Z"
          fill={color}
        />
        <path
          d="M747.026 224.59L727.849 167.889H700.929V249.16H717.743V187.52L738.597 249.16H755.468L776.321 187.52V249.16H793.136V167.889H766.216L747.026 224.59Z"
          fill={color}
        />
        <path
          d="M232.963 207.013C226.665 204.298 220.161 202.086 213.514 200.398C209.039 199.265 204.666 197.76 200.442 195.899C199.3 195.452 198.319 194.673 197.625 193.662C196.931 192.651 196.556 191.455 196.548 190.229C196.548 185.964 202.118 182.499 209.287 182.499C216.456 182.499 225.075 185.284 225.075 194.135H243.187C243.369 188.6 241.748 183.154 238.57 178.618C235.113 174.469 230.715 171.205 225.743 169.099C220.77 166.993 215.365 166.105 209.98 166.51C179.015 166.51 177.44 186.96 177.44 191.08C177.368 195.256 178.586 199.352 180.928 202.81C183.269 206.268 186.621 208.919 190.526 210.402C195.546 212.553 200.72 214.326 206.005 215.707C210.333 216.967 217.086 218.731 219.512 219.714C223.607 221.364 225.566 223.393 225.566 226.574C225.566 233.259 215.99 234.544 211.246 234.544C196.542 234.544 194.457 225.302 194.11 222.492H175.998C175.909 228.506 177.979 234.353 181.831 238.973C185.489 242.874 189.954 245.93 194.915 247.927C199.876 249.924 205.213 250.813 210.553 250.533C231.224 250.533 244.573 240.667 244.573 225.396C244.703 221.519 243.664 217.692 241.591 214.413C239.519 211.133 236.508 208.553 232.95 207.006"
          fill={color}
        />
        <path
          d="M312.67 207.013C306.372 204.298 299.869 202.086 293.222 200.398C288.747 199.265 284.374 197.76 280.15 195.899C279.008 195.452 278.027 194.673 277.333 193.662C276.639 192.651 276.264 191.455 276.256 190.229C276.256 185.964 281.826 182.499 288.995 182.499C296.164 182.499 304.783 185.284 304.783 194.135H322.896C323.077 188.6 321.457 183.154 318.278 178.618C314.821 174.469 310.423 171.205 305.45 169.099C300.478 166.993 295.073 166.105 289.688 166.51C258.723 166.51 257.148 186.96 257.148 191.08C257.075 195.257 258.292 199.354 260.634 202.814C262.976 206.273 266.328 208.925 270.233 210.408C275.254 212.56 280.428 214.333 285.713 215.713C290.041 216.973 296.794 218.737 299.22 219.72C303.315 221.37 305.274 223.399 305.274 226.581C305.274 233.265 295.698 234.55 290.954 234.55C276.25 234.55 274.165 225.308 273.818 222.498H255.743C255.655 228.513 257.725 234.36 261.577 238.979C265.234 242.881 269.7 245.937 274.661 247.934C279.621 249.93 284.959 250.82 290.299 250.54C310.969 250.54 324.319 240.674 324.319 225.402C324.449 221.525 323.41 217.698 321.337 214.419C319.264 211.14 316.254 208.559 312.696 207.013"
          fill={color}
        />
        <path
          d="M486.136 192.907C486.134 186.279 483.5 179.923 478.814 175.237C474.127 170.55 467.771 167.916 461.143 167.915H418.139V249.185H435.2V217.931H453.344L471.022 249.185H490.111L471.211 215.795C475.648 213.842 479.42 210.64 482.067 206.579C484.714 202.517 486.121 197.773 486.117 192.926M460.387 200.454H435.187V185.404H460.387C462.383 185.404 464.297 186.196 465.708 187.608C467.12 189.019 467.913 190.933 467.913 192.929C467.913 194.925 467.12 196.839 465.708 198.25C464.297 199.661 462.383 200.454 460.387 200.454Z"
          fill={color}
        />
      </svg>
    );

  return null;
}
