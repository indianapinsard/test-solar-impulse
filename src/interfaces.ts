export interface IProject {
    uuid: string
    name: string
    timezone: string
}

export enum DataType {
    TOTAL = 'total',
    STACKED = 'stacked',
}

export interface IEnergy {
    label: string
    color: string
    type: DataType
    data: [number, number][]
}

export enum ConsumptionUnity {
    KWH = 'khW',
    EUROS = 'euros',
}
