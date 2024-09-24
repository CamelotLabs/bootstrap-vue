import { extend } from '../../../vue'
import { SLOT_NAME_CUSTOM_CHILDREN } from '../../../constants/slots'

export const props = {}

export const customChildrenMixin = extend({
  props,
  methods: {
    renderCustomChildren() {
      return this.$createElement(
        'div',
        undefined, // add classes maybe later
        this.normalizeSlot(SLOT_NAME_CUSTOM_CHILDREN, {
          items: this.computedItems.slice(),
          fields: this.computedFields.slice(),
          columns: this.computedFields.length
        })
      )
    }
  }
})
