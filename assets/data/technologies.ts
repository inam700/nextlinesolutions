import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiKeras,
  SiPytorch,
  SiTensorflow,
  SiApachespark,
  SiSnowflake,
  SiTableau,
} from "react-icons/si";

export const groupedTechnologies = [
  {
    type: "Frontend",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.JS", icon: FaReact },
      { name: "Next.JS", icon: SiNextdotjs },
    ],
  },
  {
    type: "Backend",
    items: [
      { name: "Node.JS", icon: FaNodeJs },
      { name: "Express.JS", icon: SiExpress },
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Hibernate", icon: SiHibernate },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    type: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Postgres", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    type: "AI/ML",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Keras", icon: SiKeras },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
  {
    type: "Data Science",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Apache Spark", icon: SiApachespark },
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Tableau", icon: SiTableau },
    ],
  },
];
