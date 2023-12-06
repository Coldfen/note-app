import { APP_INITIALIZER, Provider } from "@angular/core";
import { Note } from "../types/note.types";

export const getNotes = (): Note[] | null => {
  const notes = localStorage.getItem("notes");
  return JSON.parse(notes);
};

export const setDefaultNotes = () => {
  const notes = getNotes();

  if (!notes) {
    localStorage.setItem("notes", JSON.stringify(NOTE_MOCK));
  }
};

export const initProviders: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useValue: setDefaultNotes,
    multi: true,
  },
];

export const NOTE_MOCK = [
  {
    descriptions:
      "Тест 1\nLorem ipsum dolor sit amet consectetur adipisicing elit. Non autem enim beatae quod inventore a perferendis, consequatur assumenda deserunt, alias consectetur dignissimos nam maiores sunt! Beatae recusandae praesentium suscipit ab! Tenetur deserunt temporibus ducimus perspiciatis rem animi dicta voluptatem rerum placeat ratione aspernatur consequatur possimus, eos recusandae non nostrum quibusdam harum at repellat fuga accusantium nobis odit earum! Animi, excepturi? Dolores enim et, quisquam labore repellat voluptas voluptate eos alias, ex, cupiditate deleniti ea nemo rerum dolorem! Dolorum ut culpa placeat. Voluptatibus nostrum earum est sequi dolorum minima fuga ea? Alias iure, perferendis natus hic distinctio eum. Veniam quibusdam delectus veritatis impedit dolor asperiores tenetur nulla dolorum deserunt voluptate! Sed consequatur obcaecati perspiciatis debitis odio neque quam et aut dolorem. Illo natus porro qui obcaecati? Harum rem, commodi ipsum dolores eos minus quia aspernatur quas. Id suscipit perferendis qui vel minima porro similique tenetur maiores quasi saepe amet, voluptatibus distinctio. Aspernatur optio temporibus, molestias quos porro cupiditate repudiandae mollitia facilis quisquam impedit, molestiae vel quaerat similique rem repellendus placeat delectus, cum natus et nostrum ab. Quisquam blanditiis aspernatur similique neque. Dicta fugiat nihil, assumenda ipsa itaque, placeat esse voluptate quas sit asperiores numquam? Dolore voluptas consequuntur, suscipit facere esse totam tempora quaerat voluptatibus similique doloremque soluta, fuga reprehenderit amet assumenda! Illo quaerat, placeat molestiae deleniti corporis rerum nobis modi nihil accusantium repellendus eaque provident delectus, fuga quia, dicta suscipit omnis illum blanditiis odit sunt obcaecati. Similique, officiis. Ratione, dignissimos adipisci. Recusandae voluptatibus tenetur, quod eligendi ratione quo illum asperiores laboriosam cumque eos! Praesentium earum laborum consectetur aspernatur iure, reprehenderit tempora. Assumenda voluptatem inventore est autem quo cum ipsam nam excepturi! Consequuntur ab quidem et mollitia quod maxime, saepe accusamus! Quibusdam harum repudiandae sit ab, enim perferendis! Dolore nobis quisquam, eius beatae harum distinctio fuga totam repellendus ullam atque, sapiente commodi?",
    id: "6aa54a05-c55a-4314-82ed-7da913b9e14f",
    title: "Тестовая 1",
  },
  {
    descriptions:
      '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
    id: "1ab4e52f-5a0d-4bc1-9f3c-1d7b35e7b420",
    title: "Тестовая 2",
  },
  {
    descriptions:
      'The standard Lorem Ipsum passage, used since the 1500s\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\nSection 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n\n1914 translation by H. Rackham\n"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n\nSection 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\n\n1914 translation by H. Rackham\n"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."\n\n',
    id: "81fa4b40-6a60-47d8-9a3f-74b075b37f82",
    title: "Тестовая 3",
  },
  {
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: "41b5cab5-b329-4f5c-b8dc-7b06cb94165c",
    title: "Тестовая 4",
  },
];
