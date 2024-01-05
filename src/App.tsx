import Quiz from "./components/Quiz";
import { Quizz } from "./data/questions";

function App() {
  return (
    <>
      <Quiz questions={Quizz.questions} />
    </>
  );
}

export default App;
