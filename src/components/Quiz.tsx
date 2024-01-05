import { useState } from "react";
import { QuizzType, resultInitialState, Result } from "../data/questions";

type MeuComponenteProps = {
  questions: QuizzType["questions"];
};

const Quiz: React.FC<MeuComponenteProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [respostaId, setRespostaId] = useState<number | string>("");
  const [resposta, setResposta] = useState<boolean>(true);
  const [result, setResult] = useState<Result>(resultInitialState);
  const [showResult, setShowResult] = useState<boolean>(false);

  const { id, questao, alternativas, respostaCorreta } =
    questions[currentQuestion];

  const handleClick = (resposta: string, index: number | string) => {
    setRespostaId(index);
    if (resposta === respostaCorreta) {
      setResposta(true);
    } else {
      setResposta(false);
    }
  };

  const handleNext = () => {
    setResposta(false);
    setRespostaId("");
    setResult((prev) => {
      return resposta
        ? {
            ...prev,
            score: prev.score + 5,
            respostaCorreta: prev.respostaCorreta + 1,
          }
        : {
            ...prev,
            respostaErrada: prev.respostaErrada + 1,
          };
    });

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const handleTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{questao}</h2>
          <ul>
            {alternativas.map((resposta, index) => {
              return (
                <li
                  key={id}
                  onClick={() => handleClick(resposta, index)}
                  className={respostaId === index ? "selecione-resposta" : ""}
                >
                  {resposta}
                </li>
              );
            })}
          </ul>
          <div className="footer">
            <button onClick={handleNext} disabled={respostaId === ""}>
              {currentQuestion === questions.length - 1
                ? "terminar"
                : "Próximo"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Resultado</h3>
          <p>
            Total de questões: <span>{questions.length}</span>
          </p>
          <p>
            Total de pontos: <span>{result.score}</span>
          </p>
          <p>
            Total de questões corretas: <span>{result.respostaCorreta}</span>
          </p>
          <p>
            Total de questões erradas: <span>{result.respostaErrada}</span>
          </p>
          <button onClick={handleTryAgain}>Tente novamente</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
