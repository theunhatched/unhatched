import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-17'
import enableHooks from 'jest-react-hooks-shallow'
import 'bdd-lazy-var/global'

configure({
  adapter: new EnzymeAdapter(),
})

enableHooks(jest)
