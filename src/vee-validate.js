import { required, confirmed, length, email, numeric } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required
})

extend('email', {
  ...email
})

extend('confirmed', {
  ...confirmed
})

extend('length', {
  ...length
})

extend('numeric', {
  ...numeric
})
