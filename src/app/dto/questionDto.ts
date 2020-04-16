import { TestDto } from './testDto';
import { AnswerDto } from './AnswerDto';

export interface QuestionDto{
    questionId?: number;
    question?: string;
    testId?: number;
    answer?: AnswerDto[];
    hint?: string;
    
}