import { clone } from 'ramda'

const Form = {
  data() {
    return {
      form: {},
      defaultForm: null,
      componentKey: 0
    }
  },

  methods: {
    forceRerender() {
      this.componentKey += 1
    },

    resetForm() {
      Object.assign(this.form, this.defaultForm)
    }
  },

  mounted() {
    this.defaultForm = clone(this.form)
  }
}

export default Form
