import { NgModule } from '@angular/core'
import { UselessCardComponent } from './card.component'

const CARD_DIRECTIVES = [
  UselessCardComponent
]

@NgModule({
  declarations: CARD_DIRECTIVES,
  exports: CARD_DIRECTIVES
})
export class UselessCardModule {}
