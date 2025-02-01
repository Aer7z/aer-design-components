export const CHECKBOX_GROUP_DIRECTIONS = ['horizontal', 'vertical'] as const
export type CheckboxGroupDirection = (typeof CHECKBOX_GROUP_DIRECTIONS)[number]
