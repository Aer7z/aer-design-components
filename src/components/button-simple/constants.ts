export const BUTTON_SIMPLE_VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'text',
  'link',
  'destructive'
] as const
export type ButtonSimpleVariant = (typeof BUTTON_SIMPLE_VARIANTS)[number]

export const BUTTON_SIMPLE_SHAPES = ['square', 'circle', 'round'] as const
export type ButtonSimpleShape = (typeof BUTTON_SIMPLE_SHAPES)[number]

// export const BUTTON_SIMPLE_STATUSES = ['normal', 'warning', 'success', 'danger'] as const
// export type ButtonSimpleStatus = (typeof BUTTON_SIMPLE_STATUSES)[number]

export const BUTTON_SIMPLE_SIZES = ['mini', 'small', 'medium', 'large'] as const
export type ButtonSimpleSize = (typeof BUTTON_SIMPLE_SIZES)[number]
