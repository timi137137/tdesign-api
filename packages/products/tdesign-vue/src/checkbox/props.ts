/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCheckboxProps } from './type';
import { PropType } from 'vue';

export default {
  /** 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 */
  checkAll: Boolean,
  /** 是否选中 */
  checked: Boolean,
  /** 是否选中，非受控属性 */
  defaultChecked: Boolean,
  /** 多选框内容，同 label */
  default: {
    type: [String, Function] as PropType<TdCheckboxProps['default']>,
  },
  /** 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。Checkbox.disabled 优先级高于 CheckboxGroup.disabled */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 是否为半选 */
  indeterminate: Boolean,
  /** 主文案 */
  label: {
    type: [String, Function] as PropType<TdCheckboxProps['label']>,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    default: '',
  },
  /** 只读状态 */
  readonly: Boolean,
  /** 多选框的值 */
  value: {
    type: [String, Number] as PropType<TdCheckboxProps['value']>,
  },
  /** 值变化时触发 */
  onChange: Function as PropType<TdCheckboxProps['onChange']>,
  /** 点击时出发，一般用于外层阻止冒泡场景 */
  onClick: Function as PropType<TdCheckboxProps['onClick']>,
};
