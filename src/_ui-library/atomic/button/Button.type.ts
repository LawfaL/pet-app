export type IButtonProps = {
   label: string
   size: "small" | "medium" | "large"
}

interface IButtonCommon extends IButtonProps { 
   type: "fill" | "outlined"
   iconLeft?: any
   iconRight?: any
}

interface IButtonIcon extends Pick<IButtonProps, "size"> { 
   type: "icon"
   icon: any
}

export type IButton =  IButtonIcon | IButtonCommon