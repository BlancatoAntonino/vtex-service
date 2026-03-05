//node/clients/analytics.ts
import { AppClient, InstanceOptions, IOContext } from '@vtex/api'

export default class Analytics extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('replyqa1.mocked-analytics@0.x', context, options)
  }

  public getLiveUsers(): Promise<LiveUsersProduct[]> {
    return this.http.get('_v/live-products')
  }
}

// Promise<LiveUsersProduct[]> è ciò che il metodo deve tornare: nel nostro
//caso la Promise di un Array di oggetti di tipo LiveUserProduct -> lo definisco nell'interfaccia (più giù)
//L'endpoint GET _v/live-producs appartiene al servizio mocked-analytics

//Definisco l'oggetto LiveUserProduct
interface LiveUsersProduct {
  slug: string
  liveUsers: number
}