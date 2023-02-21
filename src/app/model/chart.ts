export interface Data {
  "status": string,
  "name": string,
  "unit": string,
  "period": string,
  "description": string,
  "values": Value[]
}

export interface Value {
  "x": number,
  "y": number
}
