import useWing from '../../store'
import { LeftPassengersChangedEvent } from '../events/leftPassengersChangedEvent'
import { AbstractAfterLeftPassengersChanged } from '../subscriptions/abstractAfterLeftPassengersChanged'

const { commitSetActiveLeftWingPassengers, commitSetMaxLeftWingPassengers } = useWing()

export class AfterLeftPassengersChanged extends AbstractAfterLeftPassengersChanged {
  protected onEvent (event: LeftPassengersChangedEvent): void {
    commitSetActiveLeftWingPassengers(event.getLeftWingPassengers().active)
    commitSetMaxLeftWingPassengers(event.getLeftWingPassengers().max)
  }
}
