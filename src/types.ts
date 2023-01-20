import React from "react"

export interface QuestionType {
  category: string,
  correctAnswer: string,
  difficulty: string,
  id: string,
  incorrectAnswers: string[],
  isNiche: boolean,
  question: string,
  regions: string[],
  tags: string[],
  type: string
}

export type StartProps = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>
}

export type QuestionProps = {
  item: QuestionType,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setScore: React.Dispatch<React.SetStateAction<Scores[]>>,
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>,
  shuffled: string[],
  nOfQuestions: number,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  time: number
}

export type QuestionsProps = {
  data: QuestionType[]
}

export type Scores = {
  question: string,
  answer: string,
  time: number
}


export type ScoreProps = {
  score: Scores[],
  data: QuestionType[]
}

export type ScoreResultProps = {
  myScore: Scores,
  qData: QuestionType,
  setQuestionN: React.Dispatch<React.SetStateAction<number>>,
  questionN: number,
  nOfQuestions: number
}

export type TimerProps = {
  page: number,
  nOfQuestions: number,
  time: number
}

export type PrevDetailProps = {
  text: string,
  type: string
}

export type Game = {
  nOfCorrectA: string,
  unansweredQuestions: string,
  percentageOfCorrectA: number,
  percentageOfTime: number
}

export type BestCorrect = {
  percentage: number,
  correctAnswers: string
}

export type LocalUnion = string | null

export type ShowState = {
  time: boolean,
  answers: boolean,
  prev: boolean,
  best: boolean
}

export type DetailsState = {
  limit: number,
  category: string,
  difficulty: string
}

export type InputProps = {
  details: DetailsState,
  value: string,
  name: string,
  handleClick: (e: any) => void
}