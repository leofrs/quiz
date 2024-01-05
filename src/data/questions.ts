type Question = {
  id: number | string;
  questao: string;
  alternativas: string[];
  type: string;
  respostaCorreta: string;
};

export type QuizzType = {
  questions: Question[];
};

export type Result = {
  score: number;
  respostaCorreta: number;
  respostaErrada: number;
};

export const Quizz: QuizzType = {
  questions: [
    {
      id: 1,
      questao: "Quando o brasil foi descoberto ?",
      alternativas: ["2000", "1500", "1457", "2004"],
      type: "MCQs",
      respostaCorreta: "1500",
    },
    {
      id: 2,
      questao: "Neymar é ?",
      alternativas: ["pagodeiro", "funkeiro", "jogador", "piloto"],
      type: "MCQs",
      respostaCorreta: "jogador",
    },
    {
      id: 3,
      questao: "Oliver tsubasa é ?",
      alternativas: ["pagodeiro", "funkeiro", "jogador", "piloto"],
      type: "MCQs",
      respostaCorreta: "jogador",
    },
    {
      id: 4,
      questao: "airton senna é ?",
      alternativas: ["pagodeiro", "funkeiro", "jogador", "piloto"],
      type: "MCQs",
      respostaCorreta: "jogador",
    },
    {
      id: 5,
      questao: "ronaldinho é ?",
      alternativas: ["pagodeiro", "funkeiro", "jogador", "piloto"],
      type: "MCQs",
      respostaCorreta: "jogador",
    },
  ],
};

export const resultInitialState: Result = {
  score: 0,
  respostaCorreta: 0,
  respostaErrada: 0,
};
