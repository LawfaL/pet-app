interface ICardProps {
    imgUrl: string
    title: string
}

interface ICardType1 extends ICardProps {
    type: 'product-card',
    description: React.ReactNode
    price: string
    promo?: string
}

interface ICardType2 extends ICardProps {
    type: 'info-card',
    description: string
    badges: string[]
}

export type ICard = ICardType1 | ICardType2