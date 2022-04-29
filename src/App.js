import QuizList from "./components/QuizList";
import QuizMenu from "./components/QuizMenu";

function App() {
  return (
    <div className="bg-blue-600 h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl text-white pb-10">Take the Quiz</h1>
      <QuizMenu />
      <QuizList />
    </div>
  );
}

export default App;
