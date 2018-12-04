export interface Question{
    Content: string
    ID: number
    Tags: string[]
    Difficulty: number
    SLO: string[]
    CreationDate: Date
    CreatedBy: string
    ModifiedDate: Date
    ModifiedBy: string

    totalUses: number
    totalResponses: number
    responseRate: number
    totalCorrectPercent: number
    respondantCorrectPercent: number
    avgTime: number //seconds
    discriminantValue: number
  
}
