import { fetchData } from "../fetchData.js";

export const quizData = await fetchData(
  "/app/frontend-quiz-app/js/data/data.json"
);
