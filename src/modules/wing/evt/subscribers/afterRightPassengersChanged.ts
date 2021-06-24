import useWing from '../../store'
import { RightPassengersChangedEvent } from '../events/rightPassengersChangedEvent'
import { AbstractAfterRightPassengersChanged } from '../subscriptions/abstractAfterRightPassengersChanged'

const { commitSetActiveRightWingPassengers, commitSetMaxRightWingPassengers } = useWing()

export class AfterRightPassengersChanged extends AbstractAfterRightPassengersChanged {
  protected onEvent (event: RightPassengersChangedEvent): void {
    commitSetActiveRightWingPassengers(event.getRightWingPassengers().active)
    commitSetMaxRightWingPassengers(event.getRightWingPassengers().max)
  }
}
