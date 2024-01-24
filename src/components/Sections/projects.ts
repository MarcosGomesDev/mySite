import Mario from "../../../public/site-mario.png";
import List from "../../../public/site-list.png";
import Waiter from "../../../public/site-waiter.webp";

export const projectsArray = [
  {
    name: "Mário Guitarman",
    description:
      "Site para o músico Mário Guitarman, com informações sobre o artista, agenda de shows e contato.",
    image: Mario,
    link: "https://marioguitarman.netlify.app/",
    github: "https://github.com/MarcosGomesDev/marioguitarman",
    techs: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Lista de Tarefas",
    description:
      "Lista de tarefas com possibilidade de adicionar, remover e marcar como concluída.",
    image: List,
    link: "https://my-tasks-to-do.netlify.app/",
    github: "https://github.com/MarcosGomesDev/ToDoList",
    techs: ["React", "Vite", "TypeScript", "Styled Components"],
  },
  {
    name: "Waiter App",
    description:
      "Site para controle de pedidos de um restaurante, com possibilidade de adicionar, remover e marcar como concluído.",
    image: Waiter,
    link: "https://web-waiter.netlify.app/",
    github: "https://github.com/MarcosGomesDev/WaiterWeb",
    techs: ["React", "Vite", "TypeScript", "Styled Components"],
  },
];
