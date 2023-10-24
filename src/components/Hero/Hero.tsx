import styles from "./Hero.module.css";
import logoImage from "./../../assets/logo.png";

export const HeroSection = () => {
  const tools = [
    "react",
    "angular",
    "typescript",
    "vue",
    "node",
    "laravel",
    "electron",
  ];

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroGroup}>
        <div className={styles.heroImage}>
          <img loading="eager" src={logoImage} alt="Me :)" />
        </div>
        <div className={styles.info}>
          <h1 className="text-3xl text-center">
            I help turn your ideas into{" "}
            <span className="text-green-500">Real Apps</span>
          </h1>
          <p className="text-center text-gray-400 mt-3">
            I'm Khalid, and I have 6+ years of Full-Stack expertise.
            Data-driven, user-centric solutions. Ready to elevate your team
          </p>
        </div>
      </div>
      <div className={styles.workTools}>
        {tools.map((tool, index) => {
          return (
            <div className={styles.tool + ` ${tool}`} key={index}>
              <img
                className={"text-white h-full w-full"}
                src={`./icons/${tool}.${
                  ["vue", "electron"].includes(tool) ? "png" : "svg"
                }`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
