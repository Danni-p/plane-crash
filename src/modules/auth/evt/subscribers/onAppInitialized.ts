// import { AppInitializedEvent } from 'src/app/evt/events/AppInitializedEvent'
import ApiClient from 'src/api-client'
import { AbstractOnAppInitialized } from 'src/app/evt/subscriptions/abstractOnAppInitialized'

export class OnAppInitialized extends AbstractOnAppInitialized {
  protected onEvent (/* event: AppInitializedEvent */): void {
    ApiClient.authService.authListenerOn()
  }
}
