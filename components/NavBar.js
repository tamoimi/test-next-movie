import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <div>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? "active" : ""}> Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === "/about" ? "active" : ""}>
              Top movies
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: #dcd7c9;
          border-radius: 10px;
          margin-bottom: 50px;
        }
        .active {
          color: #a27b5c;
        }
        nav div {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 30px 0;
        }
        nav div a {
          font-size: 24px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
