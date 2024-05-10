export const POSITION_TYPES = ['top', 'bottom', 'left', 'right'] as const
export type PositionType = (typeof POSITION_TYPES)[number]

export const TRIGGER_TYPES = ['hover', 'click', 'focus'] as const
export type TriggerType = (typeof TRIGGER_TYPES)[number]

export type PopupPosRec = {
  top: string
  left: string
  bottom: string
  right: string
}
