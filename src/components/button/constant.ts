export const BUTTON_TYPES = ['default', 'primary', 'dashed', 'text', 'link'] as const
export type ButtonType = (typeof BUTTON_TYPES)[number]
export const BUTTON_SHAPES = ['square', 'circle', 'round'] as const
export type ButtonShape = (typeof BUTTON_SHAPES)[number]

export const BUTTON_STATUSES = ['normal', 'warning', 'success', 'danger'] as const
export type ButtonStatus = (typeof BUTTON_STATUSES)[number]

export const BUTTON_SIZES = ['mini', 'small', 'medium', 'large'] as const
export type ButtonSize = (typeof BUTTON_SIZES)[number]
