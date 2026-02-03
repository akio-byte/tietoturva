
import { VoteData } from '../types';

const STORAGE_KEY = 'lail_votes_v1';

export const readVotes = (): VoteData => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const castVote = (optionId: string): void => {
  const votes = readVotes();
  votes[optionId] = (votes[optionId] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
};

export const resetVotes = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportVotesJson = (): string => {
  return JSON.stringify(readVotes(), null, 2);
};
