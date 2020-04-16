import { QuestionDto } from './questionDto';

export interface TestDto{
    testId?: number;
    testName?: string;
    userIds?: number[];
    questionIds?: QuestionDto[];
}