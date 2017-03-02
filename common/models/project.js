export const PROJECT_DEFAULT_EXPECTED_HOURS = 38

export const PROJECT_STATES = {
  IN_PROGRESS: 'IN_PROGRESS',
  REVIEW: 'REVIEW',
  CLOSED: 'CLOSED',
  ABANDONED: 'ABANDONED',
}

const dayMS = 24 * 60 * 60 * 1000

export const PROJECT_REVIEW_TIMEOUT_DAYS = 3
export const PROJECT_ABANDON_TIMEOUT_DAYS = 20
export const PROJECT_REVIEW_TIMEOUT_MS = PROJECT_REVIEW_TIMEOUT_DAYS * dayMS
export const PROJECT_ABANDON_TIMEOUT_MS = PROJECT_ABANDON_TIMEOUT_DAYS * dayMS
export const TRUSTED_PROJECT_REVIEW_START_DATE = new Date('2017-03-06 00:00:00 GMT-0800')
