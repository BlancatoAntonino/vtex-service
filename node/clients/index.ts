import { IOClients } from '@vtex/api'
import Analytics from '../clients/analytics'
import { Catalog } from '@vtex/clients'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get analytics() {
    return this.getOrSet('analytics', Analytics)
    }

    public get catalog() {
        return this.getOrSet('catalog',Catalog)
    }
}
