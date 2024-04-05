export const INPUT_TYPES = ['email', 'number', 'password', 'search', 'tel', 'text', 'erl'] as const
export type InputType = (typeof INPUT_TYPES)[number]

export const INPUT_STATUSES = ['normal', 'error', 'warning'] as const
export type InputStatus = (typeof INPUT_STATUSES)[number]

export const INPUT_SIZES = ['mini', 'small', 'medium', 'large'] as const
export type InputSize = (typeof INPUT_SIZES)[number]
